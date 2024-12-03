// HERE Serviços prestados

import { Helmet } from "react-helmet-async";
import { Box, Heading, Strong } from "@radix-ui/themes";
import classNames from "classnames";
import { Card_Menu, Dropdown_Menu } from "../components/menu/Menu";
import CIBBiM_BG from "../assets/bg_cropped2.svg";

import { Text, Button } from "@radix-ui/themes";

import { Link } from "react-router-dom";


// ★ ServiçosPrestados ✦────────────➤
const ServiçosPrestados = () => {
  // ── ✦─DOM─➤
  return (
    <>
      <Helmet title="Serviços prestados CIBBiM" />
      <Box id="servico_canvas" className="relative w-full h-screen mt-3">
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
              Serviços prestados
            </Heading>

            <Text as="div" highContrast className="text-sm md:text-base mb-2">
              Os equipamentos do CIBBiM destinados às análises e ensaios com
              microrganismos estão disponíveis para pesquisadores e
              profissionais de empresas, bem como para professores e estudantes
              de mestrado, doutorado e iniciação científica de instituições de
              ensino médio e superior, evidenciando o caráter multiusuário e
              multidisciplinar do Centro.
            </Text>

            <Text as="div" highContrast className="text-sm md:text-base">
              <Strong>Atividades realizadas:</Strong>
            </Text>

            <Text
              as="div"
              highContrast
              className="text-sm md:text-base whitespace-pre-wrap"
            >
              ◆ Isolamento e caracterização de fungos e bactérias <br />
              ◆ Observação microscópica <br />
              ◆ Identificação fenotípica de microrganismos <br />
              ◆ Testes bioquímicos e enzimáticos <br />
              ◆ Análise microbiológica de água <br />
              ◆ Análise microbiológica de alimentos e bebidas <br />
              ◆ Avaliação da colonização micorrízica em plantas <br />
              ◆ Armazenamento dos microrganismos a longo prazo <br />
              ◆ Análise de resistência a antimicrobianos <br />
            </Text>

            <Text as="div" highContrast className="text-sm md:text-base">
              <Strong>
                Clique abaixo para acessar os equipamentos e serviços oferecidos
                pelo CIBBiM
              </Strong>
            </Text>

            <Link to="/auth/login/">
              <Button className="" variant="solid">
                <Text weight="bold" color = "gray" size="2" highContrast>
                  Agende aqui
                </Text>
              </Button>
            </Link>
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
}; // ★ ServiçosPrestados ✦────────────➤

export default ServiçosPrestados;
