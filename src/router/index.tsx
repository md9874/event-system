import { AppContext } from "context";
import { ReactElement, useContext } from "react";
import { RouterProvider } from "react-router-dom";
import getRouter from "./getRouter";

function AppRouter(): ReactElement {
  const appCtx = useContext(AppContext);
  return <RouterProvider router={getRouter(!!appCtx.state.userData)} />;
}
export default AppRouter;
