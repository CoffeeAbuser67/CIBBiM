/* eslint-disable react-refresh/only-export-components */

import { lazy } from "@loadable/component";

import AuthLayout from "./layouts/Auth";
import DefaultLayout from "./layouts/Default";

const Home = lazy(() => import("./pages/home/Home"));

const ComoUtilizar = lazy(() => import("./pages/ComoUtilizar"));
const ComiteGestor = lazy(() => import("./pages/ComiteGestor"));
const Contato = lazy(() => import("./pages/Contato"));

const Links = lazy(() => import("./pages/Links"));
const ServicosPrestados = lazy(() => import("./pages/ServicosPrestados"));
const Forms = lazy(() => import("./pages/Formularios"));
const Infra = lazy(() => import("./pages/labs/Infraestrutura"));

const Publicacoes = lazy(() => import("./pages/Publicacoes"));

const Login = lazy(() => import("./pages/auth/Login"));

const routes = [
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "", // [ROUTE] /home
        element: <Home />,
      },

      {
        path: "infraestrutura", // [ROUTE] /infraestrutura
        element: <Infra />,
      },

      {
        path: "comoutilizar", // [ROUTE] /comoutilizar
        element: <ComoUtilizar />,
      },

      {
        path: "comitegestor", // [ROUTE] /comitegestor
        element: <ComiteGestor />,
      },

      {
        path: "contato", // [ROUTE] /contato
        element: <Contato />,
      },

      {
        path: "formularios", // [ROUTE] /formularios
        element: <Forms />,
      },

      {
        path: "links", // [ROUTE] /links
        element: <Links />,
      },

      {
        path: "servicosprestados", // [ROUTE] /servicosprestados
        element: <ServicosPrestados />,
      },

      {
        path: "publicacoes", // [ROUTE] /publicacoes
        element: <Publicacoes />,
      },
    ],
  },
  // . . .
  {
    path: "/auth/",
    element: <AuthLayout />,
    children: [
      {
        path: "login", // [ROUTE] /auth/login
        element: <Login />,
      },
    ],
  },
];

export default routes;
