import { LoadingBackdrop } from "components";
import { useFetchData } from "hooks";
import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";

export interface FetchApiInterface<RequestData, ResponseData, StateType> {
  fetchApi: (requestData: RequestData) => Promise<Response>;
  requestData: RequestData;
  state: [StateType | StateType[], Dispatch<SetStateAction<StateType | StateType[]>>];
  mapper?: (element: ResponseData) => StateType;
  onNotFound?: () => void;
  onError?: () => void;
}

interface PageLoaderInterface {
  children: ReactNode;
  apis: FetchApiInterface<any, any, any>[];
  isLoading?: boolean;
}

function PageLoader(props: PageLoaderInterface): JSX.Element {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const fetchDataHook = useFetchData(
    props.apis.map((apiData) => apiData.fetchApi),
    props.apis.map((apiData) => apiData.requestData)
  );

  useEffect(() => {
    async function fetchDataFunction() {
      const fetchDatas = await fetchDataHook();
      if (fetchDatas.every((data) => !data.error)) {
        props.apis.forEach((api, apiIndex) => {
          let currentData = fetchDatas[apiIndex].data;
          let currentState = api.state[0];
          let currentSetState = api.state[1];
          let currentMapper = api.mapper;
          if (fetchDatas[apiIndex].data === null) {
            if (Array.isArray(currentState)) {
              currentSetState([]);
            } else {
              currentSetState(null);
            }
            if (api.onNotFound) {
              api.onNotFound();
            }
          } else if (currentMapper) {
            if (Array.isArray(currentData))
              currentSetState(
                currentData.map((dataElement: any) => {
                  if (currentMapper) {
                    return currentMapper(dataElement);
                  }
                })
              );
            else {
              currentSetState(currentMapper(currentData));
            }
          } else {
            currentSetState(currentData);
          }
        });
      } else {
        setError(true);
        fetchDatas.forEach((data, dataIndex) => {
          if (data.error) {
            const onApiError = props.apis[dataIndex].onError;
            if (onApiError) {
              onApiError();
            }
          }
        });
      }
      setLoading(false);
    }
    fetchDataFunction();
  }, []);

  if (props.isLoading || isLoading) {
    return <LoadingBackdrop open={isLoading} />;
  } else if (error) {
    return <div>ERROR!!!</div>;
  } else {
    return <>{props.children}</>;
  }
}

export default PageLoader;
