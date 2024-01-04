import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, Paper } from "@mui/material";
import {
  GetEventRequestInterface,
  GetEventResponseInterface,
  getEvent
} from "api";
import { FetchApiInterface, PageLoader } from "components";
import { AppContext } from "context";
import { getEventResponseInterfaceToEventInterface } from "mappers";
import { ReactElement, useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { EventInterface } from "types";
import EventMainData from "./EventMainData";
import EventMembers from "./EventMembers";

function Event(): ReactElement {
  const [event, setEvent] = useState<EventInterface | null>(null);

  const params = useParams();
  const navigate = useNavigate();
  const appContext = useContext(AppContext);

  return (
    <PageLoader
      apis={[
        {
          fetchApi: getEvent,
          requestData: { eventId: parseInt(params.id || "0") },
          state: [event, setEvent],
          mapper: getEventResponseInterfaceToEventInterface,
        } as FetchApiInterface<GetEventRequestInterface, GetEventResponseInterface, EventInterface>,
      ]}
    >
      <Paper
        elevation={5}
        sx={{
          width: "1000px",
          height: "calc(90vh - 50px)",
          marginTop: "20px",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Button startIcon={<ArrowBackIcon />} onClick={() => navigate("/holiday-requests")} sx={{ marginRight: "auto" }}>
          Wróć
        </Button>
        {event && <EventMainData event={event} />}
        {/*(appContext.state.userData?.userType === "supervisor" || appContext.state.userData?.role === "hr") && (
          <ButtonGroup variant="contained" sx={{ marginTop: "auto", width: "min-content" }}>
            <Button startIcon={<CancelIcon />} disabled={event?.isClosed} onClick={() => acceptRequest()}>
              Odrzuć
            </Button>
            <Button startIcon={<CheckCircleIcon />} disabled={event?.isClosed} onClick={() => rejectRequest()}>
              Akceptuj
            </Button>
          </ButtonGroup>
        )*/}
        {appContext.state.userData?.userType === "organizer" && <EventMembers />}
      </Paper>
    </PageLoader>
  );
}

export default Event;
