/* eslint-disable react-refresh/only-export-components */

import { lazy } from "@loadable/component";
import Default from "./layouts/Default";

const Home = lazy(() => import("./pages/home/Home"));
const Oxe = lazy(() => import("./pages/Oxe"));
const Labs = lazy(() => import("./pages/labs/Laboratorios"));

const routes = [
  {
    path: "/",
    element: <Default />,
    children: [

      {
        path: "", // [ROUTE] /
        element: <Home />
      },

      {
        path: "laboratorios", // [ROUTE] /
        element: <Labs />
      },


      {
        path: "oxe", // [ROUTE] /oxe
        element: <Oxe />
      },








    ],
  },
];

export default routes;
