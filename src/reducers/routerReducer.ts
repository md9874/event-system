import { RouterType, SetRouterType } from "types";

const routerReducer = (state: RouterType, action: SetRouterType) => {
  switch (action.type) {
    case "SET_ROUTER":
      return action.router;
    default:
      return state;
  }
};

export default routerReducer;
