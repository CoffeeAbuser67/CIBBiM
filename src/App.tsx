import { Suspense } from "react";
import { useRoutes } from "react-router-dom";

import { HelmetProvider, Helmet } from "react-helmet-async";
import routes from "./routes";
import Loader from "./components/Loader";

import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





function App() {
  const content = useRoutes(routes);
  return (
    <HelmetProvider>
      <Helmet
        titleTemplate="%s Centro de Inovação em Biologia e Biotecnologia Microbiana 🔬"
        defaultTitle="CIBBiM"
      />

      <Theme accentColor="blue" grayColor="olive">
        <Suspense fallback={<Loader />}>{content}</Suspense>
      </Theme>
      <ToastContainer theme="colored" />

    </HelmetProvider>
  );
}

export default App;
