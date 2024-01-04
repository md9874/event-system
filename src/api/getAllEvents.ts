export interface GetAllEventsRequestInterface {}

export interface GetAllEventsResponseInterface {
  id: number;
  companyName: string;
  name: string;
  dateFrom: string;
  dateTo: string;
}

async function getAllEvents(props: GetAllEventsRequestInterface): Promise<Response> {
  const dataBase: GetAllEventsResponseInterface[] = [
    {
      id: 1,
      companyName: "NY Times",
      name: "Konferencja dziennikarska",
      dateFrom: "2024-03-01T16:00:00",
      dateTo: "2024-03-02T16:00:00",
    },
    {
      id: 2,
      companyName: "Macao Company",
      name: "Warsztaty karciane",
      dateFrom: "2024-03-14T08:00:00",
      dateTo: "2024-03-18T20:00:00",
    },
  ];

  return new Response(JSON.stringify(dataBase));
}
export default getAllEvents;
