import CIBBiM_BG from "../../assets/bg_cropped2.svg";
import { Box, Card, Avatar, Flex, Text, Button , Heading } from "@radix-ui/themes";

import { Link } from "react-router-dom";

interface ButtonProps {
  name: string;
  path: string;
}

// <✪> CardMenu
const CardMenu: React.FC = () => {
  const buttons: ButtonProps[] = [
    { name: "Apresentação", path: "/" },
    { name: "Como utilizar", path: "/como_utilizar" },
    { name: "Laboratórios", path: "/laboratorios" },
    { name: "Serviços prestados", path: "/servicos_prestados" },
    { name: "Formulários", path: "/formularios" },
    { name: "Comitê Gestor", path: "/comite_gestor" },
    { name: "Publicações", path: "/publicacoes" },
    { name: "Links", path: "/links" },
    { name: "Contato", path: "/contato" },
  ];

  return (
    <Card variant="surface" className=" flex w-[320px] justify-start p-8">
      <ul className="space-y-2 justify-start w-full">
        {buttons.map((button) => (
          <li key={button.path}>
            <Button
              variant="ghost"
              size="4"
              color="gray"
              className="justify-start w-full"
              highContrast
            >
              <Link to={button.path}>
                <Text weight="bold" size="3">
                  {button.name}
                </Text>
              </Link>
            </Button>
          </li>
        ))}
      </ul>
    </Card>
  );
};

// ★ Home ✦─────────────────➤
const Home = () => {
  // ── ✦─DOM─➤
  return (
    <Box id="home_canvas" className="relative w-full h-screen bg-slate-800">
      {/* <div
        // _PIN_ CIBBiM_BG
        id="CIBBiM_BG"
        className="absolute w-full h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${CIBBiM_BG})` }}
      /> */}

      <Box className="flex flex-col -full mx-16 p-16 items-center bg-yellow-700">
        <Box className="grid grid-rows-3 grid-flow-col gap-8">
          <Box
            className="row-span-3"
            //<○> CardMenu
          >
            <CardMenu />
          </Box>

          <Box className=" col-span-2">
            <h1 className="text-4xl text-black"> 🦀</h1>
          </Box>

          <Box className=" row-span-2 col-span-2">
            <Flex direction="column" gap="4">
              <Heading color = "green" size="6" highContrast>
                The quick brown fox jumps over the lazy dog
              </Heading>
              <Text as="p" mb="5" size="3">
                The goal of typography is to relate font size, line height, and
                line width in a proportional way that maximizes beauty and makes
                reading easier and more pleasant. The goal of typography is to
                relate font size, line height, and line width in a proportional
                way that maximizes beauty and makes reading easier and more
                pleasant. The goal of typography is to relate font size, line
                height, and line width in a proportional way that maximizes
                beauty and makes reading easier and more pleasant.
              </Text>
            </Flex>
          </Box>
        </Box>

        <h1 className="text-4xl text-black my-20"> ✦─────────🦀──────➤</h1>

        <Box className="grid grid-rows-3 grid-flow-col gap-4">
          <h1 className="text-4xl text-black"> 🦀</h1>
          <h1 className="text-4xl text-black"> 🦀</h1>
          <h1 className="text-4xl text-black"> 🦀</h1>
          <h1 className="text-4xl text-black"> 🦀</h1>
          <h1 className="text-4xl text-black"> 🦀</h1>
          <h1 className="text-4xl text-black"> 🦀</h1>
        </Box>
      </Box>
    </Box>
  );
}; //★ Home ✦─────────────────➤

export default Home;
