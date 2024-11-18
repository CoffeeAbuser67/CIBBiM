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


// ✪ TableTest
const TableTest = () => {
  return (
    <Table.Root size="2" className = "max-w-[520px]">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Laboratórios</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body >
        <Table.Row>
          <Table.RowHeaderCell>
            <Box className = "max-w-[420px]">
              <Card
                variant="surface"
                size="1"
                className={classNames(
                  "shadow-md opacity-75 overflow-hidden bg-gray-100",
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
                    <Text as="div" weight="bold" highContrast>
                      Teodros Girmay
                    </Text>
                    <Text as="div" color="gray">
                      Engineering
                    </Text>
                  </Box>
                </Flex>
              </Card>
            </Box>
          </Table.RowHeaderCell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  );
}; // . . . . . . . . . . .



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
            <Heading
              color="green"
              size="7"
              highContrast
            >
              Infraestrutura
            </Heading>
          </Box>

          <Box className="col-span-2">

            <Flex direction="column" >
              <Text color="gray" size="3" highContrast>
                Conheça os laboratórios que compõem o CIBBiM, juntamente com os
                respectivos equipamentos disponíveis para a comunidade.
              </Text>
            </Flex>

          </Box>

          <Box className="row-span-4 col-span-2">

            <TableTest
              //○ TableTest
            />

          </Box>

        </Box>
      </Box>
    </Box>
  );
}; // ★ Infraestrutura ✦───────────────────────➤

export default Infraestrutura;



// <Dialog.Root>
// 	<Dialog.Trigger>
// 		<Button>View users</Button>
// 	</Dialog.Trigger>
// 	<Dialog.Content>
// 		<Dialog.Title>Users</Dialog.Title>
// 		<Dialog.Description>
// 			The following users have access to this project.
// 		</Dialog.Description>

// 		<Inset side="x" my="5">
// 			<Table.Root>
// 				<Table.Header>
// 					<Table.Row>
// 						<Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
// 						<Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
// 						<Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
// 					</Table.Row>
// 				</Table.Header>

// 				<Table.Body>
// 					<Table.Row>
// 						<Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
// 						<Table.Cell>danilo@example.com</Table.Cell>
// 						<Table.Cell>Developer</Table.Cell>
// 					</Table.Row>

// 					<Table.Row>
// 						<Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
// 						<Table.Cell>zahra@example.com</Table.Cell>
// 						<Table.Cell>Admin</Table.Cell>
// 					</Table.Row>
// 				</Table.Body>
// 			</Table.Root>
// 		</Inset>

// 		<Flex gap="3" justify="end">
// 			<Dialog.Close>
// 				<Button variant="soft" color="gray">
// 					Close
// 				</Button>
// 			</Dialog.Close>
// 		</Flex>
// 	</Dialog.Content>
// </Dialog.Root>
