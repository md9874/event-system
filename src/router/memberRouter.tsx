import { Event, Events, Layout, Page404 } from "pages";
import { RouteObject } from "react-router-dom";

const memberRouter: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Events />,
      },
      {
        path: "event/:id",
        element: <Event />,
      },
    ],
  },
  { path: "*", element: <Page404 /> },
];

export default memberRouter;
