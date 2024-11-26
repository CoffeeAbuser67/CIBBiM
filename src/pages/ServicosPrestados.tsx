// HERE Serviços prestados

import { Helmet } from "react-helmet-async";
import { Box, Heading } from "@radix-ui/themes";
import classNames from "classnames";
import { Card_Menu, Dropdown_Menu } from "../components/menu/Menu";
import CIBBiM_BG from "../assets/bg_cropped2.svg";

import { Card, Flex, Text, Button, TextField } from "@radix-ui/themes";

import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const defaultValues = {
  email: "", // default email value
  password: "", // default password value
};

// ★ ServiçosPrestados ✦────────────➤
const ServiçosPrestados = () => {
  // ── ✦─DOM─➤

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address"),
    password: Yup.string().required("Password is required"),
  });

  // ✪ formik
  const formik = useFormik({
    initialValues: defaultValues,
    validationSchema,
    onSubmit: async () => {
      const message = `Acesso não permitido`;
      toast.warn(message);
    },
  });

  return (
    <>
      <Helmet title="Serviços prestados CIBBiM" />
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
            <Heading color="blue" size="7" highContrast className="mt-10">
              Serviços prestados
            </Heading>

            <Text as="div" highContrast className="text-sm md:text-base mb-5">
              Para acessar os serviços oferecidos pelo CIBBiM, faça login abaixo
              para continuar."
            </Text>

            <Card
              // ✪ Login Card
              size="4"
              className=" flex flex-col w-full sm:w-[420px] "
            >
              <Heading as="h2" size="8" trim="start" mb="7" color="blue">
                CIBBiM
              </Heading>

              <form onSubmit={formik.handleSubmit}>
                <Box mb="5">
                  <Text as="div" size="2" mb="1" weight="bold">
                    Email
                  </Text>

                  <TextField.Root
                    type="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <Text size="2" color="red">
                      {formik.errors.email}
                    </Text>
                  )}
                </Box>

                <Box mb="5" position="relative">
                  <Flex align="baseline" justify="between" mb="1">
                    <Text
                      as="label"
                      size="2"
                      weight="bold"
                      htmlFor="example-password-field"
                    >
                      Senha
                    </Text>
                  </Flex>

                  <TextField.Root
                    type="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  {formik.touched.password && formik.errors.password && (
                    <Text size="2" color="red">
                      {formik.errors.password}
                    </Text>
                  )}
                </Box>

                <Flex mt="6" justify="end" gap="3">
                  <Button variant="outline" type="submit">
                    Continuar
                  </Button>
                </Flex>
              </form>
            </Card>
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
