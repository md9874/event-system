import { GetAllEventsResponseInterface } from "api";
import { EventInterface } from "types";

function getAllEventsResponseInterfaceToEventInterface(element: GetAllEventsResponseInterface): EventInterface {
  return {
    id: element.id,
    companyName: element.companyName,
    name: element.name,
    dateFrom: new Date(element.dateFrom),
    dateTo: new Date(element.dateTo),
  };
}

export default getAllEventsResponseInterfaceToEventInterface;
