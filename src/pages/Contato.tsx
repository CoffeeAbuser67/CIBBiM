// HERE Contato

import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useWindowResize } from "../hooks/useWindowResize";

import {
  Box,
  Card,
  Avatar,
  Flex,
  Text,
  Button,
  Heading,
  Dialog,
  Table,
  Inset,
  Strong,
} from "@radix-ui/themes";
import classNames from "classnames";
import { Card_Menu, Dropdown_Menu } from "../components/menu/Menu";
import CIBBiM_BG from "../assets/bg_cropped2.svg";

// ★ Contato ✦────────────➤
const Contato = () => {
  // WARN  windowSize and useWindowResize. Remove in production!!

  // ✳  [windowSize, setWindowSize]
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useWindowResize((width, height) => {
    setWindowSize({ width, height }); // ↺ useWindowResize (setWindowSize)
  });

  // ── ✦─DOM─➤

  return (
    <>
      <Helmet title="Contato CIBBiM" />

      <Box
        // ⊙ windowSize
        className="fixed top-10 rounded-2xl right-10 bg-slate-600 p-2"
      >
        <Text color="tomato" size="3" highContrast>
          🦀{` wdith: ${windowSize.width}`} <br />
          🦀{` height: ${windowSize.height}`}
        </Text>
      </Box>

      <Box id="contato_canvas" className="relative w-full h-screen mt-3">
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
            <Heading color="green" size="7" highContrast className="mt-10">
              Contato
            </Heading>

            <Heading size="4" highContrast>
              Universidade Estadual de Santa Cruz (UESC)
            </Heading>

            <Text as="div" highContrast className="text-sm md:text-base">
              <Strong>Campus Soane Nazaré de Andrade</Strong>
              <br />
              km 16 da Rodovia Jorge Amado
              <br />
              Bairro: Salobrinho
              <br />
              Ilhéus – BA– Brasil
              <br />
              CEP 45662-000
            </Text>

            <Text as="div" highContrast className="text-sm md:text-base">
              <Strong>E-mail:</Strong> cibbim@uesc.br
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
}; // ★ Contato ✦────────────➤

export default Contato;
