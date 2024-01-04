export interface GetEventRequestInterface {
  eventId: number;
}

export interface GetEventResponseInterface {
  id: number;
  companyName: string;
  name: string;
  dateFrom: string;
  dateTo: string;
}

async function getEvent(props: GetEventRequestInterface): Promise<Response> {
  const dataBase: GetEventResponseInterface = {
    id: 1,
    companyName: "NY Times",
    name: "Konferencja dziennikarska",
    dateFrom: "2024-03-01T16:00:00",
    dateTo: "2024-03-02T16:00:00",
  };

  return new Response(JSON.stringify(dataBase));
}
export default getEvent;
