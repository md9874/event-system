export interface GetMemberTicketsRequestInterface {}

export interface GetMemberTicketsResponseInterface {
  id: number;
  number: string;
  dateOfBuy: string;
  eventId: number;
  eventName: string;
  companyId: number;
  compnayName: string;
  userId: number;
}

async function getMemberTickets(props: GetMemberTicketsRequestInterface): Promise<Response> {
  const dataBase: GetMemberTicketsResponseInterface[] = [
    {
      id: 1,
      number: "GDS-123/HSGHG",
      dateOfBuy: "2024-01-04T08:00:00",
      eventId: 1,
      eventName: "Konferencja dziennikarska",
      companyId: 1,
      compnayName: "NY Times",
      userId: 1,
    },
    {
      id: 2,
      number: "TWE-844/OWMKS",
      dateOfBuy: "2024-01-04T08:00:00",
      eventId: 2,
      eventName: "Warsztaty karciane",
      companyId: 2,
      compnayName: "Macao Company",
      userId: 2,
    },
  ];

  return new Response(JSON.stringify(dataBase));
}
export default getMemberTickets;
