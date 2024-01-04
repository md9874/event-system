interface TicketInterface {
  id: number;
  number: string;
  dateOfBuy: Date;
  eventId: number;
  eventName: string;
  companyId: number;
  compnayName: string;
  userId: number;
}

export default TicketInterface;
