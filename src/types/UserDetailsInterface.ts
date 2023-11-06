interface UserDetailsInterface {
  id: number;
  user: string;
}

export default UserDetailsInterface;

export type SetUserDetailsType = { type: "SET_USER_DATA"; userData: UserDetailsInterface } | { type: "REMOVE_USER_DATA" };
