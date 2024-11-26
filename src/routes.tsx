/* eslint-disable react-refresh/only-export-components */

import { lazy } from "@loadable/component";
import Default from "./layouts/Default";

const Home = lazy(() => import("./pages/home/Home"));
const ComoUtilizar = lazy(() => import("./pages/ComoUtilizar"));
const ComiteGestor = lazy(() => import("./pages/ComiteGestor"));
const Contato = lazy(() => import("./pages/Contato"));

const Links = lazy(() => import("./pages/Links"));
const ServicosPrestados = lazy(() => import("./pages/ServicosPrestados"));
const Forms = lazy(() => import("./pages/Formularios"));
const Infra = lazy(() => import("./pages/labs/Infraestrutura"));

const Publicacoes = lazy(() => import("./pages/Publicacoes"));



const routes = [
  {
    path: "/",
    element: <Default />,
    children: [
      {
        path: "", // [ROUTE] 
        element: <Home />,
      },

      {
        path: "infraestrutura", // [ROUTE] 
        element: <Infra />,
      },

      {
        path: "comoutilizar", // [ROUTE] 
        element: <ComoUtilizar />,
      },

      {
        path: "comitegestor", // [ROUTE] 
        element: <ComiteGestor />,
      },

      {
        path: "contato", // [ROUTE] 
        element: <Contato />,
      },

      {
        path: "formularios", // [ROUTE] 
        element: <Forms />,
      },

      {
        path: "links", // [ROUTE] 
        element: <Links />,
      },

      {
        path: "servicosprestados", // [ROUTE] 
        element: <ServicosPrestados />,
      },


      {
        path: "publicacoes", // [ROUTE] 
        element: <Publicacoes />,
      },



    ],
  },
];

export default routes;
