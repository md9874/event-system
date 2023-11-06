import { AuthType, SetAuthType } from "types";

const authReducer = (state: AuthType, action: SetAuthType) => {
  switch (action.type) {
    case "SET_AUTH":
      return action.token;
    default:
      return state;
  }
};

export default authReducer;
