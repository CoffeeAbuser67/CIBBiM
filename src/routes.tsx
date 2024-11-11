/* eslint-disable react-refresh/only-export-components */

import { lazy } from "@loadable/component";
import Default from "./layouts/Default";

const Home = lazy(() => import("./pages/home/Home"));
const Oxe = lazy(() => import("./pages/Oxe"));

const routes = [
  {
    path: "/",
    element: <Default />,
    children: [

      {
        path: "", // [ROUTE]
        element: <Home />
      },
      {
        path: "Oxe", // [ROUTE]
        element: <Oxe />
      },






    ],
  },
];

export default routes;
