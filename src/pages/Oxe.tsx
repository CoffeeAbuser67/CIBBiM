import CIBBiM_BG from "../assets/bg_cibbim_teste.svg";
import classNames from "classnames";
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

import FOTO1 from "../assets/alimentos_bebidas_lab/FOTO1.jpg";
import FOTO2 from "../assets/alimentos_bebidas_lab/FOTO2.jpg";
import FOTO3 from "../assets/alimentos_bebidas_lab/FOTO3.jpg";

// HERE Oxe

// ✪ TableTest
const TableTest = () => {
  return (
    <Table.Root size="2">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.RowHeaderCell>
            <Box width="400px">
              <Card
                variant="surface"
                size="1"
                className={classNames(
                  "shadow-md opacity-75 overflow-hidden",
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

// ✪ GPT_card
const GPT_card = () => (
  <div className="max-w-sm mx-auto">
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg">
      <img
        src="https://via.placeholder.com/300x200"
        alt="Card Image"
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">Card Title</h2>
        <p className="text-gray-600 mt-2">
          This is a description of the card. It looks great!
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600">
          Learn More
        </button>
      </div>
    </div>
  </div>
); // . . . . . . . . . . .

// ★ Oxe  ✦──────────────────────➤
const Oxe = () => {
  // ── ✦─DOM─➤
  return (
    <Box id="Oxe_Canvas" className=" relative w-full h-screen">
      <div
        className={classNames(
          "justify-center items-center",
          "flex  flex-col gap-6 w-[900px] m-9 p-9",
          "bg-slate-200"
        )}
      >
        <TableTest
        // ○ TableTest
        />

        <GPT_card
        // ○ GPT_card
        />
      </div>

      <div
        // . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        // HERE  GRID
        className="columns-2 md:columns-3 gap-4 items-center"
      >
        <Box
          // . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
          // _PIN_ MANSONRY CARD 1
          id="MasonryCard1"
        >
          <Card className="flex flex-col gap-8 shadow-md bg-slate-200" size="2" mb="6">
            <Inset clip="border-box" side="top">
              <img
                src={FOTO1}
                alt="Bold typography"
                className="h-full w-full object-cover"
              />
            </Inset>

            <Text as="p" size="3" wrap="wrap" className="line-clamp-6">
              Typography is the art and technique of arranging type to make
              written language legible, readable and appealing when displayedis
              Typography is the art and technique of arranging type to make
              written language legible, readable and appealing when displayedis
              Typography is the art and technique of arranging type to make
              written language legible, readable and appealing when displayedis
              Typography is the art and technique of arranging type to make
              written language legible, readable and appealing when displayedis
              Typography is the art and technique of arranging type to make
              written language legible, readable and appealing when displayedis
              Typography is the art and technique of arranging type to make
              written language legible, readable and appealing when displayedis
              Typography is the art and technique of arranging type to make
              written language legible, readable and appealing when displayedis
              Typography is the art and technique of arranging type to make
              written language legible, readable and appealing when displayedis
              Typography is the art and technique of arranging type to make
              written language legible, readable and appealing when displayedis
              Typography is the art and technique
            </Text>
          </Card>
        </Box>

        <Box
          // . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
          // _PIN_ MANSONRY CARD 2
          id="MasonryCard2"
        >
          <Card className="flex flex-col gap-8 shadow-md bg-slate-200" size="2" mb="6">
            <Inset clip="border-box" side="top">
              <img
                src={FOTO2}
                alt="Bold typography"
                className="h-full w-full object-cover"
              />
            </Inset>

            <Text as="p" size="3" wrap="wrap" className="line-clamp-6">
              Typography is the art and technique of arranging type to make
              written language legible, readable and appealing when displayedis
              Typography is the art and technique of arranging type to make
              written language legible, readable and appealing when displayedis
              Typography is the art and technique of arranging type to make
              written language legible, readable and appealing when displayedis
              Typography is the art and technique of arranging type to make
              written language legible, readable and appealing when displayedis
              Typography is the art and technique of arranging type to make
              written language legible, readable and appealing when displayedis
              Typography is the art and technique of arranging type to make
              written language legible, readable and appealing when displayedis
              Typography is the art and technique of arranging type to make
              written language legible, readable and appealing when displayedis
              Typography is the art and technique of arranging type to make
              written language legible, readable and appealing when displayedis
              Typography is the art and technique of arranging type to make
              written language legible, readable and appealing when displayedis
              Typography is the art and technique
            </Text>
          </Card>
        </Box>

        <Box
          // . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
          // _PIN_ MANSONRY CARD 3
          id="MasonryCard3"
        >
          <Card className="flex flex-col gap-8 shadow-md bg-slate-200" size="2" mb="6">
            <Inset clip="border-box" side="top">
              <img
                src={FOTO3}
                alt="Bold typography"
                className="h-full w-full object-cover"
              />
            </Inset>

            <Text as="p" size="3" wrap="wrap" className="line-clamp-6">
              Typography is the art and technique of arranging type to make
              written language legible, readable and appealing when displayedis
              Typography is the art and technique of arranging type to make
              written language legible, readable and appealing when displayedis
              Typography is the art and technique of arranging type to make
              written language legible, readable and appealing when displayedis
              Typography is the art and technique of arranging type to make
              written language legible, readable and appealing when displayedis
              Typography is the art and technique of arranging type to make
              written language legible, readable and appealing when displayedis
              Typography is the art and technique of arranging type to make
              written language legible, readable and appealing when displayedis
              Typography is the art and technique of arranging type to make
              written language legible, readable and appealing when displayedis
              Typography is the art and technique of arranging type to make
              written language legible, readable and appealing when displayedis
              Typography is the art and technique of arranging type to make
              written language legible, readable and appealing when displayedis
              Typography is the art and technique
            </Text>
          </Card>
        </Box>

        <Box
          // . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
          // _PIN_ MANSONRY CARD 2
          id="MasonryCard2"
        >
          <Card className="flex flex-col gap-8 shadow-md bg-slate-200" size="2" mb="6">
            <Inset clip="border-box" side="top">
              <img
                src={FOTO2}
                alt="Bold typography"
                className="h-full w-full object-cover"
              />
            </Inset>

            <Text as="p" size="3" wrap="wrap" className="line-clamp-6">
              Typography is the art and technique of arranging type to make
              written language legible, readable and appealing when displayedis
              Typography is the art and technique of arranging type to make
              written language legible, readable and appealing when displayedis
              Typography is the art and technique of arranging type to make
              written language legible, readable and appealing when displayedis
              Typography is the art and technique of arranging type to make
              written language legible, readable and appealing when displayedis
              Typography is the art and technique of arranging type to make
              written language legible, readable and appealing when displayedis
              Typography is the art and technique of arranging type to make
              written language legible, readable and appealing when displayedis
              Typography is the art and technique of arranging type to make
              written language legible, readable and appealing when displayedis
              Typography is the art and technique of arranging type to make
              written language legible, readable and appealing when displayedis
              Typography is the art and technique of arranging type to make
              written language legible, readable and appealing when displayedis
              Typography is the art and technique
            </Text>
          </Card>
        </Box>

        <Box
          // . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
          // _PIN_ MANSONRY CARD 1
          id="MasonryCard1"
        >
          <Card className="flex flex-col gap-8 shadow-md bg-slate-200" size="2" mb="6">
            <Inset clip="border-box" side="top">
              <img
                src={FOTO1}
                alt="Bold typography"
                className="h-full w-full object-cover"
              />
            </Inset>

            <Text as="p" size="3" wrap="wrap" className="line-clamp-6">
              Typography is the art and technique of arranging type to make
              written language legible, readable and appealing when displayedis
              Typography is the art and technique of arranging type to make
              written language legible, readable and appealing when displayedis
              Typography is the art and technique of arranging type to make
              written language legible, readable and appealing when displayedis
              Typography is the art and technique of arranging type to make
              written language legible, readable and appealing when displayedis
              Typography is the art and technique of arranging type to make
              written language legible, readable and appealing when displayedis
              Typography is the art and technique of arranging type to make
              written language legible, readable and appealing when displayedis
              Typography is the art and technique of arranging type to make
              written language legible, readable and appealing when displayedis
              Typography is the art and technique of arranging type to make
              written language legible, readable and appealing when displayedis
              Typography is the art and technique of arranging type to make
              written language legible, readable and appealing when displayedis
              Typography is the art and technique
            </Text>
          </Card>
        </Box>


        <Box
          // . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
          // _PIN_ MANSONRY CARD 3
          id="MasonryCard3"
        >
          <Card className="flex flex-col gap-8 shadow-md bg-slate-200" size="2" mb="6">
            <Inset clip="border-box" side="top">
              <img
                src={FOTO3}
                alt="Bold typography"
                className="h-full w-full object-cover"
              />
            </Inset>

            <Text as="p" size="3" wrap="wrap" className="line-clamp-6">
              Typography is the art and technique of arranging type to make
              written language legible, readable and appealing when displayedis
              Typography is the art and technique of arranging type to make
              written language legible, readable and appealing when displayedis
              Typography is the art and technique of arranging type to make
              written language legible, readable and appealing when displayedis
              Typography is the art and technique of arranging type to make
              written language legible, readable and appealing when displayedis
              Typography is the art and technique of arranging type to make
              written language legible, readable and appealing when displayedis
              Typography is the art and technique of arranging type to make
              written language legible, readable and appealing when displayedis
              Typography is the art and technique of arranging type to make
              written language legible, readable and appealing when displayedis
              Typography is the art and technique of arranging type to make
              written language legible, readable and appealing when displayedis
              Typography is the art and technique of arranging type to make
              written language legible, readable and appealing when displayedis
              Typography is the art and technique
            </Text>
          </Card>
        </Box>


      </div>

      <div>
        🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀
        🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀🦀
        🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀
        🦀 🦀 🦀 🦀 🦀 🦀 🦀🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀🦀 🦀
        🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀 🦀
        🦀 🦀 🦀 🦀 🦀 🦀
      </div>
    </Box>
  );
}; // ★ Oxe  ✦──────────────────────➤

export default Oxe;
