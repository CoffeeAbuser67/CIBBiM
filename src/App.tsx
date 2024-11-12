import { Suspense } from "react";
import { useRoutes } from "react-router-dom";

import { HelmetProvider, Helmet } from "react-helmet-async";
import routes from "./routes";
import Loader from "./components/Loader";

import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

function App() {
  const content = useRoutes(routes);
  return (
    <HelmetProvider>
      <Helmet
        titleTemplate="%s Centro de Inovação em Biologia e Biotecnologia Microbiana 🔬"
        defaultTitle="CIBBiM"
      />

      <Theme accentColor="green" grayColor="olive">
        <Suspense fallback={<Loader />}>{content}</Suspense>
      </Theme>
    </HelmetProvider>
  );
}

export default App;
