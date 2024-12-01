// HERE ComiteGestor

import { Helmet } from "react-helmet-async";

import { Box, Text, Heading, Strong } from "@radix-ui/themes";
import classNames from "classnames";
import { Card_Menu, Dropdown_Menu } from "../components/menu/Menu";
import CIBBiM_BG from "../assets/bg_cropped2.svg";

// ★ ComiteGestor ✦────────────➤
const ComiteGestor = () => {

  // ── ✦─DOM─➤

  return (
    <>
      <Helmet title="Comitê Gestor do CIBBiM" />

      <Box id="comitegestor_canvas" className="relative w-full h-screen mt-3">
        <Box
          // _PIN_ panel1
          id="panel1"
          className={classNames(
            "relative flex flex-col mx-10 z-10",
            "lg:flex-row lg:mx-16 lg:px-16 lg:py-12 lg:gap-9"
          )}
        >
          <Box
            // {○} Card_Menu
            className="hidden w-[280px] lg:block"
          >
            <Card_Menu />
          </Box>

          <Box
            // {○} Dropdown_Menu
            className="relative flex lg:hidden mt-10"
          >
            <Dropdown_Menu />
          </Box>

          <Box className="flex flex-col gap-5">
            <Heading color="blue" size="7" highContrast className="mt-10">
              Comitê Gestor
            </Heading>

            <Heading size="4" highContrast>
              Comissão de Administração
            </Heading>

            <Text as="div" highContrast className="text-sm md:text-base">
              <Strong>Diretora:</Strong> Dra. Ana Paula Trovatti Uetanabaro
              <br />
              <br />
              <Strong>Vice-Diretora:</Strong> Dra. Rachel Passos Rezende
            </Text>

            <Text as="div" highContrast className="text-sm md:text-base">
              <Strong>Comissão de Pesquisa</Strong>
              <br />
              Dra. Adriana Bozzi
              <br />
              Dra. Andrea Miura Da Costa
              <br />
              Dra. Carla Cristina Romano
              <br />
              Dr. Eduardo Ary Villela Marinho
              <br />
              Dra. Jane Lima Dos Santos
              <br />
              Dr. Joao Carlos Teixeira Dias
              <br />
              Dra. Luciene Cristina Gastalho Campos Luiz
              <br />
              Dr. Wilson Barros Luiz
            </Text>

            <Text as="div" highContrast className="text-sm md:text-base">
              <Strong>Técnica Administrativa</Strong>
              <br />
              Adriana Xavier Brandão Pimentel
            </Text>
          </Box>
        </Box>

        <div
          // HERE CIBBiM_BG
          id="CIBBiM_BG"
          className="absolute bottom-0 w-full h-[500px] bg-cover bg-center rotate-180 z-0"
          style={{ backgroundImage: `url(${CIBBiM_BG})` }}
        >
          <div
            // HERE Opacity Control
            id="opacity BG"
            className={classNames(
              "absolute w-full h-full bg-white bg-cover bg-center",
              "opacity-50"
            )}
          />
        </div>
      </Box>
    </>
  );
}; // ★ ComiteGestor ✦────────────➤

export default ComiteGestor;
