import { Context, createContext, Dispatch, ReactElement, useReducer } from "react";
import { authReducer, infoReducer, languageReducer, routerReducer, userReducer } from "reducers";
import {
  AuthType,
  InfoDialogInterface,
  LanguageType,
  RouterType,
  SetAuthType,
  SetInfoDialogType,
  SetLanguageType,
  SetRouterType,
  SetUserDetailsType,
  UserDetailsInterface,
} from "types";

const initialState: AppContextInitialStateInterface = {
  userData: null,
  infoData: {
    open: false,
    content: "",
  },
  language: "pl",
  router: undefined,
  auth: undefined,
};

interface AppContextInitialStateInterface {
  userData: UserDetailsInterface | null;
  infoData: InfoDialogInterface;
  language: LanguageType;
  router: RouterType;
  auth: AuthType;
}

type AppContextActionsType = SetUserDetailsType | SetInfoDialogType | SetLanguageType | SetRouterType | SetAuthType;

interface AppContextInterface {
  state: AppContextInitialStateInterface;
  dispatch: Dispatch<AppContextActionsType>;
}

export const AppContext: Context<AppContextInterface> = createContext<AppContextInterface>({
  state: initialState,
  dispatch: () => null,
});

export const appReducer = ({ userData, infoData, router, language, auth }: AppContextInitialStateInterface, action: AppContextActionsType) => ({
  userData: userReducer(userData, action as SetUserDetailsType),
  infoData: infoReducer(infoData, action as SetInfoDialogType),
  language: languageReducer(language, action as SetLanguageType),
  router: routerReducer(router, action as SetRouterType),
  auth: authReducer(auth, action as SetAuthType),
});

function AppContextProvider({ children }: { children: ReactElement }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
