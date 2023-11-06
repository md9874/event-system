import { Layout } from "layout";
import { Home, Login, Page404 } from "pages";
import { RouteObject, createBrowserRouter } from "react-router-dom";

const commonRouter: RouteObject[] = [
  {
    path: "/",
    element: <Login />,
  },
  { path: "*", element: <Page404 /> },
];

const loginRouter: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "example",
        element: <div></div>,
      },
    ],
  },
  { path: "*", element: <Page404 /> },
];

function getRouter(login: boolean) {
  let router: RouteObject[] = [];
  if (login) {
    router = loginRouter;
  } else {
    router = commonRouter;
  }
  return createBrowserRouter(router);
}

export default getRouter;
