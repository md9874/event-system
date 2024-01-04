import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/material";
import getAllEvents, { GetAllEventsRequestInterface, GetAllEventsResponseInterface } from "api/getAllEvents";
import { CustomDataTable, FetchApiInterface, PageLoader } from "components";
import { AppContext } from "context";
import { getAllEventsResponseInterfaceToEventInterface } from "mappers";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { EventInterface } from "types";

function AllRequestsTab(): JSX.Element {
  const [events, setEvents] = useState<EventInterface[]>([]);
  const [checkedRequest, setCheckedRequest] = useState<EventInterface | undefined>(undefined);

  const appContext = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <PageLoader
      apis={[
        {
          fetchApi: getAllEvents,
          requestData: {},
          state: [events, setEvents],
          mapper: getAllEventsResponseInterfaceToEventInterface,
        } as FetchApiInterface<GetAllEventsRequestInterface, GetAllEventsResponseInterface, EventInterface>,
      ]}
    >
      <Box display={{ display: "flex", flexDirection: "column" }}>
        <CustomDataTable
          headers={["Nazwa", "Organizator", "Rozpoczęcie", "Zakończenie"]}
          objectKeys={["name", "companyName", "dateFrom", "dateTo"]}
          dataArray={events}
          actions={[
            {
              label: "Zobacz",
              icon: <SearchIcon />,
              isShown: () => true,
              onClick: (element: EventInterface) => {
                navigate(`event/${element.id.toString()}`);
              },
            },
            {
              label: "Kup bilet",
              icon: <ConfirmationNumberIcon />,
              isShown: () => true,
              onClick: (element: EventInterface) => {
                //setCheckedRequest(element);
              },
            },
          ]}
          sx={{ marginTop: "20px" }}
        />
      </Box>
    </PageLoader>
  );
}

export default AllRequestsTab;
