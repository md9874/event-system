import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/material";
import { GetOrganizerEventsRequestInterface, GetOrganizerEventsResponseInterface, getOrganizerEvents } from "api";
import { CustomDataTable, FetchApiInterface, PageLoader } from "components";
import { AppContext } from "context";
import { getOrganizerEventsResponseInterfaceToEventInterface } from "mappers";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { EventInterface } from "types";

function OrganizerEventsTab(): JSX.Element {
  const [events, setEvents] = useState<EventInterface[]>([]);
  const [checkedRequest, setCheckedRequest] = useState<EventInterface | undefined>(undefined);

  const appContext = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <PageLoader
      apis={[
        {
          fetchApi: getOrganizerEvents,
          requestData: {},
          state: [events, setEvents],
          mapper: getOrganizerEventsResponseInterfaceToEventInterface,
        } as FetchApiInterface<GetOrganizerEventsRequestInterface, GetOrganizerEventsResponseInterface, EventInterface>,
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
                //navigate(element.id.toString());
              },
            },
          ]}
          sx={{ marginTop: "20px" }}
        />
      </Box>
    </PageLoader>
  );
}

export default OrganizerEventsTab;
