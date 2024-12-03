// HERE Login

import { Helmet } from "react-helmet-async";
import { Box, Heading } from "@radix-ui/themes";
import classNames from "classnames";

import { Card, Flex, Text, Button, TextField } from "@radix-ui/themes";

import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

import logo_cibbim from "../../assets/logo_Cibbim.png";
import login_bg from "../../assets/Login_bg.svg";

const defaultValues = {
  email: "", // default email value
  password: "", // default password value
};

// ★ Login ✦────────────➤
const Login = () => {
  // ✪ Yup
  const validationSchema = Yup.object({
    email: Yup.string().email("Endereço de e-mail inválido"),
    password: Yup.string().required("Password é obrigatório"),
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

  // ── ✦─DOM─➤
  return (
    <>
      <Helmet title="Login Portal CIBBiM" />
      <Box
        id="login_canvas"
        className=" relative flex justify-center items-center w-full h-screen p-10"
      >
        <Card
          // ✪ Login Card
          variant="ghost"
          size="4"
          className={classNames(
            "bg-gray-200 border-none shadow drop-shadow-xl shadow-gray-200",
            "relative flex flex-col w-full sm:w-[420px] p-10 z-10"
          )}
        >
          <Flex align={"center"} justify={"center"} className="relative mt-6 mb-10">
            <img
              // HERE logo_cibbim
              src={logo_cibbim}
              alt="🔬"
              className="w-full"
            />
          </Flex>

          <form onSubmit={formik.handleSubmit}>
            <Box mb="5">
              <Text as="div" size="2" mb="1" weight="bold">
                E-mail
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

        <div
          // HERE login_bg
          id="login_bg"
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${login_bg})` }}
        >
          <div
            // HERE Opacity Control
            id="opacity BG"
            className={classNames(
              "absolute w-full h-full bg-white bg-cover bg-center",
              "opacity-90"
            )}
          />
        </div>
      </Box>
    </>
  );
}; // ★ Login ✦────────────➤

export default Login;
