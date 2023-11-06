import { AppContext } from "context";
import { EncryptStorage } from "encrypt-storage";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { encryptStorageKey } from "appConfig";

function useSessionChecking() {
  const appCtx = useContext(AppContext);
  const navigate = useNavigate();

  async function sessionChecking(pathname: string) {
    const encryptStorage = new EncryptStorage(encryptStorageKey);
    const userLogin = encryptStorage.getItem("ul");
    const userPassword = encryptStorage.getItem("up");
    if (userLogin && userPassword) {
      /*let response = await login({ login: userLogin, password: userPassword, language: "pl", clientIp: "123" });
      if (!response.ok) {
        appCtx.dispatch({ type: "REMOVE_USER_DATA" });
        appCtx.dispatch({ type: "SET_ROUTER", router: undefined });
        navigate("/");
      } else {
        let resolved: LoginResponseInterface = await response.json();
        appCtx.dispatch({ type: "SET_AUTH", token: resolved.token });
        appCtx.dispatch({ type: "SET_USER_DATA", userData: { ...resolved, role: "member" } });
        appCtx.dispatch({ type: "SET_ROUTER", router: resolved.role === 4 ? "member" : undefined });
        navigate(pathname);
      }*/
    }
  }

  return sessionChecking;
}

export default useSessionChecking;
