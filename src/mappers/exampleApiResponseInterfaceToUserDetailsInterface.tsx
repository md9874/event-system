import { ExampleApiResponseInterface } from "api";
import { UserDetailsInterface } from "types";

function exampleApiResponseInterfaceToUserDetailsInterface(element: ExampleApiResponseInterface): UserDetailsInterface {
  return {
    id: element.id,
    user: element.username
  };
}

export default exampleApiResponseInterfaceToUserDetailsInterface;
