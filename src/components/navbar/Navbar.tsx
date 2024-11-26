// import

import { Box, Flex, Heading } from "@radix-ui/themes";

import BRASAO_UESC from "../../assets/BRASAO_UESC.svg";

// ★ Navbar
const Navbar = () => {
  //──DOM──➤
  return (
    <>
      <Box
        id="navbar"
        className="flex w-full h-[100px] rounded-t-none shadow drop-shadow-xl shadow-slate-950  bg-blue-950 items-center justify-start"
      >
        <Flex align={"center"}>

          <img 
            // HERE BRASAO_UESC
            src={BRASAO_UESC}
            alt="Bold typography"
            className="w-[50px] h-[67px] bg-cover bg-center ml-10 mr-7"
          />

          <Flex direction={"column"}>
            <Heading size={"8"} className="text-neutral-200">
              Uesc
            </Heading>

            <Heading size={"5"} className="text-neutral-200">
              Universidade Estadual de Santa Cruz
            </Heading>
          </Flex>
        </Flex>
      </Box>

      <Box
        id="navbar"
        className=" flex w-full h-[5px] rounded-t-none bg-yellow-300"
      ></Box>
    </>
  );
}; // . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .

export default Navbar;
