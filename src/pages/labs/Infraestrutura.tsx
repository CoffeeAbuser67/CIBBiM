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
} from "@radix-ui/themes";
import classNames from "classnames";
import { Link } from "react-router-dom";

import FOTO1 from "../../assets/alimentos_bebidas_lab/FOTO1.jpg";
import FOTO2 from "../../assets/alimentos_bebidas_lab/FOTO2.jpg";
import FOTO3 from "../../assets/alimentos_bebidas_lab/FOTO3.jpg";

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
}; // . . . . . . . . . . . . . . . . . . . . . . . . . . .

// <✪> AlimentosEBebidas
const AlimentosEBebidas = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Card
          // <●> triggerCardAlimentosEBebidas
          id="triggerCardAlimentosEBebidas"
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
            <Avatar size="4" radius="medium" fallback="T" color="indigo" />
            <Box>
              <Text as="div" weight="bold" highContrast>
                🦀🦀🦀 🦀🦀🦀 🦀🦀🦀 🦀🦀🦀 🦀🦀🦀 🦀🦀🦀 🦀🦀🦀 🦀🦀🦀
                🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀
              </Text>
              <Text as="div" color="gray">
                🦀🦀🦀
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
        <Box
          // <●> contentCardAlimentosEBebidas . . . . . .
          id="contentCardAlimentosEBebidas"
          className="flex flex-col w-full gap-9"
        >
          <Dialog.Title>🦀🦀🦀</Dialog.Title>
          <Dialog.Description>
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀
            🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀
          </Dialog.Description>

          <Box id="equipamentosPanel" className = "flex flex-col gap-9">
            <Text as="div" weight="bold" highContrast>
              🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀
              🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀 🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀 
            </Text>

            <Box
              // HERE  GRID
              className="columns-2 md:columns-4 gap-4 items-center"
            >
              <Box
                // . . . . . . . .
                // _PIN_ MANSONRY CARD 1
                id="MasonryCard1"
              >
                <Card
                  className="flex flex-col gap-8 shadow-md bg-slate-200"
                  size="2"
                  mb="6"
                >
                  <Inset clip="border-box" side="top">
                    <img
                      src={FOTO1}
                      alt="Bold typography"
                      className="h-full w-full object-cover"
                    />
                  </Inset>

                  <Text as="p" size="3" wrap="wrap" className="line-clamp-6">
                    Typography is the art and technique of arranging type to
                    make written language legible, readable and appealing when
                    displayedis Typography is the art and technique of arranging
                    type to make written language legible, readable and
                    appealing when displayedis Typography is the art and
                    technique of arranging type to make written language
                    legible, readable and appealing when displayedis Typography
                    is the art and technique of arranging type to make written
                    language legible, readable and appealing when displayedis
                    Typography is the art and technique of arranging type to
                    make written language legible, readable and appealing when
                    displayedis Typography is the art and technique of arranging
                    type to make written language legible, readable and
                    appealing when displayedis Typography is the art and
                    technique of arranging type to make written language
                    legible, readable and appealing when displayedis Typography
                    is the art and technique of arranging type to make written
                    language legible, readable and appealing when displayedis
                    Typography is the art and technique of arranging type to
                    make written language legible, readable and appealing when
                    displayedis Typography is the art and technique
                  </Text>
                </Card>
              </Box>

              <Box
                // . . . . . . . .
                // _PIN_ MANSONRY CARD 2
                id="MasonryCard2"
              >
                <Card
                  className="flex flex-col gap-8 shadow-md bg-slate-200"
                  size="2"
                  mb="6"
                >
                  <Inset clip="border-box" side="top">
                    <img
                      src={FOTO2}
                      alt="Bold typography"
                      className="h-full w-full object-cover"
                    />
                  </Inset>

                  <Text as="p" size="3" wrap="wrap" className="line-clamp-6">
                    Typography is the art and technique of arranging type to
                    make written language legible, readable and appealing when
                    displayedis Typography is the art and technique of arranging
                    type to make written language legible, readable and
                    appealing when displayedis Typography is the art and
                    technique of arranging type to make written language
                    legible, readable and appealing when displayedis Typography
                    is the art and technique of arranging type to make written
                    language legible, readable and appealing when displayedis
                    Typography is the art and technique of arranging type to
                    make written language legible, readable and appealing when
                    displayedis Typography is the art and technique of arranging
                    type to make written language legible, readable and
                    appealing when displayedis Typography is the art and
                    technique of arranging type to make written language
                    legible, readable and appealing when displayedis Typography
                    is the art and technique of arranging type to make written
                    language legible, readable and appealing when displayedis
                    Typography is the art and technique of arranging type to
                    make written language legible, readable and appealing when
                    displayedis Typography is the art and technique
                  </Text>
                </Card>
              </Box>

              <Box
                // . . . . . . . .
                // _PIN_ MANSONRY CARD 3
                id="MasonryCard3"
              >
                <Card
                  className="flex flex-col gap-8 shadow-md bg-slate-200"
                  size="2"
                  mb="6"
                >
                  <Inset clip="border-box" side="top">
                    <img
                      src={FOTO3}
                      alt="Bold typography"
                      className="h-full w-full object-cover"
                    />
                  </Inset>

                  <Text as="p" size="3" wrap="wrap" className="line-clamp-6">
                    Typography is the art and technique of arranging type to
                    make written language legible, readable and appealing when
                    displayedis Typography is the art and technique of arranging
                    type to make written language legible, readable and
                    appealing when displayedis Typography is the art and
                    technique of arranging type to make written language
                    legible, readable and appealing when displayedis Typography
                    is the art and technique of arranging type to make written
                    language legible, readable and appealing when displayedis
                    Typography is the art and technique of arranging type to
                    make written language legible, readable and appealing when
                    displayedis Typography is the art and technique of arranging
                    type to make written language legible, readable and
                    appealing when displayedis Typography is the art and
                    technique of arranging type to make written language
                    legible, readable and appealing when displayedis Typography
                    is the art and technique of arranging type to make written
                    language legible, readable and appealing when displayedis
                    Typography is the art and technique of arranging type to
                    make written language legible, readable and appealing when
                    displayedis Typography is the art and technique
                  </Text>
                </Card>
              </Box>

              <Box
                // . . . . . . . .
                // _PIN_ MANSONRY CARD 2
                id="MasonryCard2"
              >
                <Card
                  className="flex flex-col gap-8 shadow-md bg-slate-200"
                  size="2"
                  mb="6"
                >
                  <Inset clip="border-box" side="top">
                    <img
                      src={FOTO2}
                      alt="Bold typography"
                      className="h-full w-full object-cover"
                    />
                  </Inset>

                  <Text as="p" size="3" wrap="wrap" className="line-clamp-6">
                    Typography is the art and technique of arranging type to
                    make written language legible, readable and appealing when
                    displayedis Typography is the art and technique of arranging
                    type to make written language legible, readable and
                    appealing when displayedis Typography is the art and
                    technique of arranging type to make written language
                    legible, readable and appealing when displayedis Typography
                    is the art and technique of arranging type to make written
                    language legible, readable and appealing when displayedis
                    Typography is the art and technique of arranging type to
                    make written language legible, readable and appealing when
                    displayedis Typography is the art and technique of arranging
                    type to make written language legible, readable and
                    appealing when displayedis Typography is the art and
                    technique of arranging type to make written language
                    legible, readable and appealing when displayedis Typography
                    is the art and technique of arranging type to make written
                    language legible, readable and appealing when displayedis
                    Typography is the art and technique of arranging type to
                    make written language legible, readable and appealing when
                    displayedis Typography is the art and technique
                  </Text>
                  
                </Card>
              </Box>

              <Box
                // . . . . . . . .
                // _PIN_ MANSONRY CARD 1
                id="MasonryCard1"
              >
                <Card
                  className="flex flex-col gap-8 shadow-md bg-slate-200"
                  size="2"
                  mb="6"
                >
                  <Inset clip="border-box" side="top">
                    <img
                      src={FOTO1}
                      alt="Bold typography"
                      className="h-full w-full object-cover"
                    />
                  </Inset>

                  <Text as="p" size="3" wrap="wrap" className="line-clamp-6">
                    Typography is the art and technique of arranging type to
                    make written language legible, readable and appealing when
                    displayedis Typography is the art and technique of arranging
                    type to make written language legible, readable and
                    appealing when displayedis Typography is the art and
                    technique of arranging type to make written language
                    legible, readable and appealing when displayedis Typography
                    is the art and technique of arranging type to make written
                    language legible, readable and appealing when displayedis
                    Typography is the art and technique of arranging type to
                    make written language legible, readable and appealing when
                    displayedis Typography is the art and technique of arranging
                    type to make written language legible, readable and
                    appealing when displayedis Typography is the art and
                    technique of arranging type to make written language
                    legible, readable and appealing when displayedis Typography
                    is the art and technique of arranging type to make written
                    language legible, readable and appealing when displayedis
                    Typography is the art and technique of arranging type to
                    make written language legible, readable and appealing when
                    displayedis Typography is the art and technique
                  </Text>
                </Card>
              </Box>

              <Box
                // . . . . . . . .
                // _PIN_ MANSONRY CARD 3
                id="MasonryCard3"
              >
                <Card
                  className="flex flex-col gap-8 shadow-md bg-slate-200"
                  size="2"
                  mb="6"
                >
                  <Inset clip="border-box" side="top">
                    <img
                      src={FOTO3}
                      alt="Bold typography"
                      className="h-full w-full object-cover"
                    />
                  </Inset>

                  <Text as="p" size="3" wrap="wrap" className="line-clamp-6">
                    Typography is the art and technique of arranging type to
                    make written language legible, readable and appealing when
                    displayedis Typography is the art and technique of arranging
                    type to make written language legible, readable and
                    appealing when displayedis Typography is the art and
                    technique of arranging type to make written language
                    legible, readable and appealing when displayedis Typography
                    is the art and technique of arranging type to make written
                    language legible, readable and appealing when displayedis
                    Typography is the art and technique of arranging type to
                    make written language legible, readable and appealing when
                    displayedis Typography is the art and technique of arranging
                    type to make written language legible, readable and
                    appealing when displayedis Typography is the art and
                    technique of arranging type to make written language
                    legible, readable and appealing when displayedis Typography
                    is the art and technique of arranging type to make written
                    language legible, readable and appealing when displayedis
                    Typography is the art and technique of arranging type to
                    make written language legible, readable and appealing when
                    displayedis Typography is the art and technique
                  </Text>
                </Card>
              </Box>
            </Box>
          </Box>

          <Flex gap="3" justify="end">
            <Dialog.Close>
              <Button variant="soft" color="gray">
                🦀
              </Button>
            </Dialog.Close>
          </Flex>
        </Box>
      </Dialog.Content>
    </Dialog.Root>
  );
}; // . . . . . . . . . . . . . . . .

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
        <Box className="grid grid-rows-6 grid-flow-col gap-6">
          <Box
            className="row-span-6"
            //{○} Card_Menu
          >
            <Card_Menu />
          </Box>

          <Box className="col-span-2">
            <Heading color="green" size="7" highContrast>
              Infraestrutura
            </Heading>
          </Box>

          <Box className="col-span-2">
            <Flex direction="column">
              <Text color="gray" size="3" highContrast>
                Conheça os laboratórios que compõem o CIBBiM, juntamente com os
                respectivos equipamentos disponíveis para a comunidade.
              </Text>
            </Flex>
          </Box>

          <Box className="row-span-4 col-span-2">
            <Table.Root size="2" className="max-w-[900px]">
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeaderCell>Laboratórios</Table.ColumnHeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.RowHeaderCell>
                    <AlimentosEBebidas />
                  </Table.RowHeaderCell>
                </Table.Row>
              </Table.Body>
            </Table.Root>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}; // ★ Infraestrutura ✦───────────────────────➤

export default Infraestrutura;
