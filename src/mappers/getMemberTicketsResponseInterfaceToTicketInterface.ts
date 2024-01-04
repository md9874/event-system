import { GetMemberTicketsResponseInterface } from "api";
import { TicketInterface } from "types";

function getMemberTicketsResponseInterfaceToTicketInterface(element: GetMemberTicketsResponseInterface): TicketInterface {
  return {
    id: element.id,
    number: element.number,
    dateOfBuy: new Date(element.dateOfBuy),
    eventId: element.eventId,
    eventName: element.eventName,
    companyId: element.companyId,
    compnayName: element.compnayName,
    userId: element.userId,
  };
}

export default getMemberTicketsResponseInterfaceToTicketInterface;
