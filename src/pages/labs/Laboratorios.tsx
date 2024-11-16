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

import { Link } from "react-router-dom";

interface ButtonProps {
  name: string;
  path: string;
}

// {●} buttons
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

// Props for the ProfileCard component
interface ProfileCardProps {
  name: string;
  role: string;
  image: string;
  onOpenChange?: (isOpen: boolean) => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  role,
  image,
  onOpenChange,
}) => {
  return (
    <Dialog.Root onOpenChange={onOpenChange}>
      <Dialog.Trigger>
        <Card className="w-full text-left focus:outline-none">
          <Flex gap="3" align="center">
            <Avatar size="3" src={image} radius="full" fallback={name[0]} />
            <Box>
              <Text as="div" size="2" weight="bold">
                {name}
              </Text>
              <Text as="div" size="2" color="gray">
                {role}
              </Text>
            </Box>
          </Flex>
        </Card>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Title>{name}</Dialog.Title>
        <Dialog.Description>
          {role} - More details about this person will go here.
        </Dialog.Description>
        <Button variant="soft" onClick={() => onOpenChange?.(false)}>
          Close
        </Button>
      </Dialog.Content>
    </Dialog.Root>
  );
};

// CardList component
const CardList: React.FC = () => {
  const people = [
    {
      name: "Teodros Girmay",
      role: "Engineering",
      image:
        "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop",
    },
    {
      name: "Jane Doe",
      role: "Marketing",
      image:
        "https://images.unsplash.com/photo-1524503033411-c9566986fc8f?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.4&fp-y=0.5&fp-z=1.5&fit=crop",
    },
  ];

  return (
    <Box className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {people.map((person) => (
        <ProfileCard
          key={person.name}
          name={person.name}
          role={person.role}
          image={person.image}
        />
      ))}
    </Box>
  );
};

// <✪> Dialog_Test
// const Dialog_Test = () => {
//   return (
//     <Dialog.Root>
//       <Dialog.Trigger>
//         <Button>View users</Button>
//       </Dialog.Trigger>

//       <Dialog.Content>
//         <Dialog.Title>Users</Dialog.Title>
//         <Dialog.Description>
//           The following users have access to this project.
//         </Dialog.Description>
//         <Inset side="x" my="5">
//           <Table.Root>
//             <Table.Header>
//               <Table.Row>
//                 <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
//                 <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
//                 <Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
//               </Table.Row>
//             </Table.Header>

//             <Table.Body>
//               <Table.Row>
//                 <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
//                 <Table.Cell>danilo@example.com</Table.Cell>
//                 <Table.Cell>Developer</Table.Cell>
//               </Table.Row>

//               <Table.Row>
//                 <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
//                 <Table.Cell>zahra@example.com</Table.Cell>
//                 <Table.Cell>Admin</Table.Cell>
//               </Table.Row>
//             </Table.Body>
//           </Table.Root>
//         </Inset>

//         <Dialog.Root>
//           <Dialog.Trigger>
//             <Button>teste</Button>
//           </Dialog.Trigger>

//           <Dialog.Content>
//             <Dialog.Title>teste</Dialog.Title>

//             <Dialog.Description>
//               The following users have access to this project.
//             </Dialog.Description>

//             <Inset side="x" my="5">
//               <Text weight="bold" size="3">
//                 🦀🦀
//               </Text>
//             </Inset>

//             <Flex gap="3" justify="end">
//               <Dialog.Close>
//                 <Button variant="soft" color="gray">
//                   Close
//                 </Button>
//               </Dialog.Close>
//             </Flex>
//           </Dialog.Content>
//         </Dialog.Root>
//         ;

//         <Flex gap="3" justify="end">
//           <Dialog.Close>
//             <Button variant="soft" color="gray">
//               Close
//             </Button>
//           </Dialog.Close>
//         </Flex>
//       </Dialog.Content>
//     </Dialog.Root>
//   );
// }; // . . . . . . . .

// ★ Laboratorios ✦───────────────────────➤
const Laboratorios = () => {
  // WARN  Missing helmet

  // ── ✦─DOM─➤
  return (
    <Box id="laboratorios_canvas" className="relative w-full h-screen">
      <Box
        // _PIN_ panel1
        id="panel1"
        className="flex flex-col -full mx-16 p-16 items-center"
      >
        <Box className="grid grid-rows-6 grid-flow-col gap-8">
          <Box
            className="row-span-6"
            //{○} Card_Menu
          >
            <Card_Menu />
          </Box>

          <Box className=" col-span-2">
            <Heading
              color="green"
              size="7"
              highContrast
              className="min-w-[1300px]"
            >
              Laboratórios
            </Heading>
          </Box>

          <Box className=" row-span-2 col-span-2">
            <Flex direction="column">
              <Text color="gray" size="3" weight="bold" highContrast>
                Conheça os laboratórios que compõem o CIBBiM, juntamente com os
                respectivos equipamentos disponíveis para a comunidade.
              </Text>

              <Box>
                <CardList />
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}; // ★ Laboratorios ✦───────────────────────➤

export default Laboratorios;
