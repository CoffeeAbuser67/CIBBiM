/* eslint-disable react-refresh/only-export-components */

import { lazy } from "@loadable/component";
import Default from "./layouts/Default";

const Home = lazy(() => import("./pages/home/Home"));
const ComoUtilizar = lazy(() => import("./pages/ComoUtilizar"));
const ComiteGestor = lazy(() => import("./pages/ComiteGestor"));
const Contato = lazy(() => import("./pages/Contato"));

const Infra = lazy(() => import("./pages/labs/Infraestrutura"));

const routes = [
  {
    path: "/",
    element: <Default />,
    children: [
      {
        path: "", // [ROUTE] /
        element: <Home />,
      },

      {
        path: "infraestrutura", // [ROUTE] /
        element: <Infra />,
      },

      {
        path: "comoutilizar", // [ROUTE] /
        element: <ComoUtilizar />,
      },

      {
        path: "comitegestor", // [ROUTE] /
        element: <ComiteGestor />,
      },

      {
        path: "contato", // [ROUTE] /
        element: <Contato />,
      },
    ],
  },
];

export default routes;
