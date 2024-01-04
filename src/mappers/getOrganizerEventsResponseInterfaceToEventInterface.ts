import { GetOrganizerEventsResponseInterface } from "api";
import { EventInterface } from "types";

function getOrganizerEventsResponseInterfaceToEventInterface(element: GetOrganizerEventsResponseInterface): EventInterface {
  return {
    id: element.id,
    companyName: element.companyName,
    name: element.name,
    dateFrom: new Date(element.dateFrom),
    dateTo: new Date(element.dateTo),
  };
}

export default getOrganizerEventsResponseInterfaceToEventInterface;
