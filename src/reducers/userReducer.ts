import { SetUserDetailsType, UserDetailsInterface } from "types";

const userReducer = (state: UserDetailsInterface | null, action: SetUserDetailsType) => {
  switch (action.type) {
    case "SET_USER_DATA":
      return {
        id: action.userData.id,
        user: action.userData.user
      };
    case "REMOVE_USER_DATA":
      return null;
    default:
      return state;
  }
};

export default userReducer;
