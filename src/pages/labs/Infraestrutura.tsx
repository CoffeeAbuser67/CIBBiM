// HERE Infraestrutura

import {
  Box,
  Card,
  Avatar,
  Flex,
  Text,
  Button,
  Heading,
  DropdownMenu,
  Dialog,
  Table,
  Inset,
  Strong,
} from "@radix-ui/themes";
import classNames from "classnames";
import { Link } from "react-router-dom";

import { labsList } from "./Labs";

interface ButtonProps {
  name: string;
  path: string;
}

// {●} buttons
const buttons: ButtonProps[] = [
  { name: "Apresentação", path: "/" },
  { name: "Como utilizar", path: "/como_utilizar" },
  { name: "Infraestrutura", path: "/infraestrutura" },
  { name: "Serviços prestados", path: "/servicos_prestados" },
  { name: "Formulários", path: "/formularios" },
  { name: "Comitê Gestor", path: "/comite_gestor" },
  { name: "Publicações", path: "/publicacoes" },
  { name: "Links", path: "/links" },
  { name: "Contato", path: "/contato" },
]; // . . . . . . . . .

// {✪} Dropdown_Menu
const Dropdown_Menu: React.FC = () => {
  return (
    <Flex gap="3" align="center">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Button
            variant="ghost"
            size="2"
            highContrast
            color="gray"
            className="cursor-pointer"
          >
            <Text weight="bold" size="3" className="mr-1">
              Menu
            </Text>

            <DropdownMenu.TriggerIcon />
          </Button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content
          size="2"
          color="gray"
          variant="soft"
          highContrast
          className="bg-gray-100 border-none shadow drop-shadow-xl shadow-white"
        >
          {buttons.map(
            (
              item // {○} buttons
            ) => (
              <DropdownMenu.Item key={item.path} asChild>
                <Link
                  to={item.path}
                  className="flex justify-start w-full px-4 py-4 cursor-pointer"
                >
                  <Text weight="bold" size="2" highContrast>
                    {item.name}
                  </Text>
                </Link>
              </DropdownMenu.Item>
            )
          )}
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </Flex>
  );
}; // . . . . . . . . .

// {✪} Card_Menu
const Card_Menu: React.FC = () => {
  return (
    <Card
      id="Card_Menu"
      variant="ghost"
      className=" flex w-[280px] justify-start p-8 mr-2 bg-gray-100 border-none shadow drop-shadow-xl shadow-white"
    >
      <ul className="space-y-2 w-full">
        {buttons.map(
          (
            button // {○} buttons
          ) => (
            <li key={button.path}>
              <Button
                variant="ghost"
                size="4"
                color="gray"
                className=" w-full"
                highContrast
              >
                <Link to={button.path} className="flex w-full justify-start">
                  <Text weight="bold" size="3">
                    {button.name}
                  </Text>
                </Link>
              </Button>
            </li>
          )
        )}
      </ul>
    </Card>
  );
}; // . . . . . . . . .

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
                      "w-[75vw] min-h-[600px] max-w-[12000px]", // Dialog width: 90% of the viewport, capped at 700px
                      "rounded-lg", // Rounded corners
                      "p-12", // Padding
                      "shadow-lg", // Shadow for aesthetics
                      "overflow-y-auto" // Ensure no horizontal scroll
                    )}
                  >
                    <Box // . . .
                      // <●> DialogContent
                      // <○> Id
                      id={`DialogContent${lab.Id}`}
                      className="flex flex-col w-full gap-6"
                    >
                      <Box className="flex flex-col">
                        <Dialog.Title as="h1">{lab.LabName}</Dialog.Title>

                        <Heading size="3">
                          Centro de Inovação em Biologia e Biotecnologia
                          Microbiana
                        </Heading>

                        <Heading size="3">
                          Universidade Estadual de Santa Cruz
                        </Heading>
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
                        >
                          {lab.EquipamentsIntro}
                        </Text>

                        <Box // . . . . . . . . .
                          // _PIN_  EQUIPAMENTOS GRID
                          className="columns-2 md:columns-3 gap-4 items-center"
                        >
                          {lab.EquipamentsList.map((Equipament, index) => (
                            <Dialog.Root key={index}>
                              <Dialog.Trigger>
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
                                      className="line-clamp-6"
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
                                  "bg-gray-100",
                                  "w-full min-h-[600px] max-w-[1200px]", // Dialog width: 90% of the viewport, capped at 700px
                                  "rounded-lg", // Rounded corners
                                  "p-12", // Padding
                                  "shadow-lg", // Shadow for aesthetics
                                  "overflow-y-auto" // Ensure no horizontal scroll
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
                            </Dialog.Root>
                          ))}
                        </Box>
                      </Box>

                      <Flex gap="3" justify="center">
                        <Dialog.Close>
                          <Button variant="soft" color="gray">
                            🦀
                          </Button>
                        </Dialog.Close>
                      </Flex>
                    </Box>
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
  // WARN  Missing helmet

  // ── ✦─DOM─➤
  return (
    <Box id="infraestrutura_canvas" className="relative w-full h-screen">
      <Box
        // _PIN_  Panel1
        id="Pane"
        className="mx-16 p-16 overflow-hidden"
      >
        <Box className="grid grid-rows-8 grid-flow-col gap-4">
          <Box
            className="row-span-8"
            //{○} Card_Menu
          >
            <Card_Menu />
          </Box>

          <Box className="row-span-8 col-span-2">
            <Heading color="green" size="7" className="mb-6" highContrast>
              Infraestrutura
            </Heading>

            <Text  as="div" color="gray" size="3" className="mb-3" highContrast>
              Conheça os laboratórios que compõem o CIBBiM, juntamente com os
              respectivos equipamentos disponíveis para a comunidade.
            </Text>

            <LabTemplate />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}; // ★ Infraestrutura ✦───────────────────────➤

export default Infraestrutura;
