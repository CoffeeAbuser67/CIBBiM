import CIBBiM_BG from "../assets/bg_cibbim_teste.svg";

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

const TableTest = () => {
  return (
    <Table.Root size="2">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
          <Table.Cell>danilo@example.com</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
          <Table.Cell>zahra@example.com</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  );
};

const Oxe = () => {
  return (
    <Box id="Oxe_Canvas" className="relative w-full h-screen">
      <TableTest />
    </Box>
  );
};

export default Oxe;
