// HERE Infraestrutura
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
} from "@radix-ui/themes";
import classNames from "classnames";

import { labsList } from "./Labs";
import { Helmet } from "react-helmet-async";

import { Dropdown_Menu, Card_Menu } from "../../components/menu/Menu";

import CIBBiM_BG from "../../assets/bg_cropped2.svg";
import { useWindowResize } from "../../hooks/useWindowResize";
import { useState } from "react";

// ● CrossSVG
const CrossSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} fill="none">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.782 4.032a.575.575 0 1 0-.813-.814L7.5 6.687 4.032 3.218a.575.575 0 0 0-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 0 0 .814.814L7.5 8.313l3.469 3.469a.575.575 0 0 0 .813-.814L8.313 7.5l3.469-3.468Z"
      clipRule="evenodd"
    />
  </svg>
);

// <✪> LabTemplate ✦───────────────➤
const LabTemplate = () => {
  return (
    <>
      <Table.Root size="2" className="max-w-[520px]">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Laboratórios</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {labsList.map((lab, index) => (
            <Table.Row key={index}>
              <Table.RowHeaderCell>
                <Dialog.Root>
                  <Dialog.Trigger
                    // <●> DialogTrigger
                    id="DialogTrigger"
                  >
                    <Card
                      // <○> Id
                      id={`TriggerCard_${lab.Id}`}
                      variant="surface"
                      size="1"
                      className={classNames(
                        "max-w-[420px]",
                        "opacity-75 overflow-hidden bg-gray-100 shadow-md",
                        "hover:shadow-lg hover:opacity-100",
                        "transition duration-300 ease-in-out transform hover:-translate-y-1",
                        "cursor-pointer"
                      )}
                    >
                      <Flex gap="4" align="center">
                        <Avatar
                          size="4"
                          radius="medium"
                          fallback="T"
                          color="indigo"
                        />
                        <Box>
                          <Text
                            // <○> LabName
                            as="div"
                            weight="bold"
                            highContrast
                          >
                            {lab.LabName}
                          </Text>
                          <Text
                            // <○> LabResponsible
                            as="p"
                            color="gray"
                            className="whitespace-pre-wrap"
                          >
                            {lab.LabResponsible}
                          </Text>
                        </Box>
                      </Flex>
                    </Card>
                  </Dialog.Trigger>

                  <Dialog.Content
                    className={classNames(
                      "bg-gray-100",
                      "w-[90vw] min-h-[600px] max-w-[12000px]", // Dialog width: 90% of the viewport, capped at 600px
                      "rounded-lg", // Rounded corners
                      "p-10", // Padding
                      "shadow-lg", // Shadow for aesthetics
                      "overflow-y-auto", // Ensure no horizontal scroll
                      "lg:p-12 lg:w-[75vw]"
                    )}
                  >
                    <Flex className = "mb-2" gap="3" justify="end">
                      <Dialog.Close>
                        <Button
                          // ○ CrossSVG
                          variant="soft"
                          color="gray"
                        >
                          <CrossSVG />
                        </Button>
                      </Dialog.Close>
                    </Flex>
                    <Box
                      // . . . . . . . . . . . . . . .
                      // <●> DialogContent
                      // <○> Id
                      id={`DialogContent${lab.Id}`}
                      className="flex flex-col w-full gap-6"
                    >
                      <Box className="flex flex-col">
                        <Dialog.Title as="h1">{lab.LabName}</Dialog.Title>

                        {/* HERE ✉ */}

                        <Dialog.Description className="text-xs lg:text-sm">
                          <span className=" text-sm block">
                            <strong>
                              Centro de Inovação em Biologia e Biotecnologia
                              Microbiana
                            </strong>
                          
                          </span>

                          <span className="text-sm block mb-2">
                            <strong>Universidade Estadual de Santa Cruz</strong>
                          </span>

                          <span className=" block mb-2">
                            Campus Soane Nazaré de Andrade
                            <br />
                            Rodovia Jorge Amado, km 16, Bairro Salobrinho
                            <br />
                            CEP 45662-900. Ilhéus-Bahia
                          </span>

                          {Object.entries(lab.DescriptionText).map(
                            ([key, value]) => (
                              <span
                                // <○> DescriptionText
                                key={key}
                                className=" text-xs lg:text-sm block"
                              >
                                <strong>{key}</strong>: {value}
                              </span>
                            )
                          )}
                        </Dialog.Description>

                      </Box>

                      <Box
                        // <○> DescriptionComponent
                        className="flex flex-col gap-6"
                      >
                        <lab.DescriptionComponent />
                      </Box>

                      <Box
                        id="equipamentosPanel"
                        className="flex flex-col gap-9"
                      >
                        <Text
                          // <○> EquipamentsIntro
                          as="div"
                          weight="bold"
                          highContrast
                          className = "text-sm sm:text-base"
                        >
                          {lab.EquipamentsIntro}
                        </Text>

                        <Box // . . .
                          // _PIN_  EQUIPAMENTOS GRID
                          className={classNames(
                            "columns-1 md:columns-3 gap-4 items-center"
                          )}
                        >
                          {lab.EquipamentsList.map((Equipament, index) => (
                            <Dialog.Root key={index}>
                              <Dialog.Trigger className="pointer-events-none md:pointer-events-auto">
                                <Card // <●> NestedDialogTrigger
                                  className="flex flex-col gap-5 shadow-md bg-slate-200 cursor-pointer"
                                  size="2"
                                  mb="6"
                                  key={index}
                                >
                                  <Inset clip="border-box" side="top">
                                    <img // <○> Image
                                      src={Equipament.Image}
                                      alt="Bold typography"
                                      className="h-full w-full object-cover"
                                    />
                                  </Inset>
                                  <Box className="flex flex-col gap-2">
                                    <Heading // <○> Title
                                      size="2"
                                    >
                                      {Equipament.Title}
                                    </Heading>
                                    <Text // <○> Desc
                                      as="p"
                                      size="2"
                                      wrap="wrap"
                                      className="md:line-clamp-6"
                                    >
                                      {Equipament.Desc}
                                    </Text>
                                  </Box>
                                </Card>
                              </Dialog.Trigger>

                              <Dialog.Content
                                className={classNames(
                                  // . . .
                                  // <●> NestedDialogcontent

                                  "w-full min-h-[600px] max-w-[1200px] rounded-lg bg-gray-100",
                                  "p-10 md:p-12 ", // Padding
                                  "shadow-lg overflow-y-auto " // Shadow for aesthetics and  Ensure no horizontal scroll
                                )}
                              >
                                <Card
                                  className="flex w-full min-h-[600px] gap-5 shadow-md bg-slate-200"
                                  size="2"
                                  key={index}
                                >
                                  <Inset
                                    clip="border-box"
                                    side="left"
                                    className="w-2/3"
                                  >
                                    <img // <○> Image
                                      src={Equipament.Image}
                                      alt="Bold typography"
                                      className="h-full w-full object-contain"
                                    />
                                  </Inset>

                                  <Box className="flex-1 flex-col gap-2">
                                    <Dialog.Title
                                      size="2"
                                      as="h2"
                                      // <○> Title
                                    >
                                      {Equipament.Title}
                                    </Dialog.Title>

                                    <Dialog.Description // <○> Desc
                                      size="2"
                                      wrap="wrap"
                                      className="whitespace-pre-wrap"
                                    >
                                      {Equipament.Desc}
                                    </Dialog.Description>
                                  </Box>
                                </Card>
                              </Dialog.Content>
                              {/* // . . . . . . . . . . . . . . . */}
                            </Dialog.Root>
                          ))}
                        </Box>
                      </Box>
                    </Box>

                    <Flex className="mt-10" gap="3" justify="center">
                      <Dialog.Close>
                        <Button
                          // ○ CrossSVG
                          variant="soft"
                          color="gray"
                        >
                          <CrossSVG />
                        </Button>
                      </Dialog.Close>
                    </Flex>
                  </Dialog.Content>
                </Dialog.Root>
              </Table.RowHeaderCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </>
  );
}; // <✪> LabTemplate ✦───────────────➤

// ★ Infraestrutura ✦───────────────────────➤
const Infraestrutura = () => {
  // WARN  windowSize and useWindowResize. Remove in production!!

  // ✳  [windowSize, setWindowSize]
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useWindowResize((width, height) => {
    setWindowSize({ width, height }); // ↺ useWindowResize (setWindowSize)
  });

  // ── ✦─DOM─➤
  return (
    <>
      <Helmet title="Laboratórios e Equipamentos do CIBBiM" />

      <Box
        // ⊙ windowSize
        className="fixed top-10 rounded-2xl right-10 bg-slate-600 p-2"
      >
        <Text color="tomato" size="3" highContrast>
          🦀{` wdith: ${windowSize.width}`} <br />
          🦀{` height: ${windowSize.height}`}
        </Text>
      </Box>

      <Box id="infraestrutura_canvas" className="relative w-full h-screen mt-4">
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
              Infraestrutura
            </Heading>

            <Text as="div" color="gray" size="3" highContrast>
              Conheça os laboratórios que compõem o CIBBiM, juntamente com os
              respectivos equipamentos disponíveis para a comunidade.
            </Text>

            <Box
              // <○> LabTemplate
              className="mb-10"
            >
              <LabTemplate />
            </Box>
          </Box>
        </Box>

        <div
          id="CIBBiM_BG"
          className="w-full h-[500px] bg-cover bg-center rotate-180 -mt-[500px] z-0"
          style={{ backgroundImage: `url(${CIBBiM_BG})` }}
        />
      </Box>
    </>
  );
}; // ★ Infraestrutura ✦───────────────────────➤

export default Infraestrutura;
