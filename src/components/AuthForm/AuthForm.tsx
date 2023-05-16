import React, { FC } from "react";
import { Formik, Form, Field } from "formik";
import { object, string } from "yup";
import {
  Button,
  Flex,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";

import { useAppDispatch } from "hooks/useAppDispatch";
import { userLogin, userSignUp } from "redux/auth/operationsAuth";
import FormErrorMessage from "components/FormErrorMessage/FormErrorMessage";

const signUpSchema = object({
  name: string().required(),
  email: string().email().required(),
  password: string().min(7).max(16).required(),
});

const loginSchema = object({
  email: string().email().required(),
  password: string().min(7).max(16).required(),
});

interface AuthFormInterface {
  type: "register" | "login";
}

const AuthForm: FC<AuthFormInterface> = ({ type }) => {
  const dispatch = useAppDispatch();
  const isRegisterForm: boolean = type === "register" ? true : false;

  function handleAuthSubmit(
    {
      name,
      email,
      password,
    }: { name: string; email: string; password: string },
    { resetForm }: any
  ) {
    switch (type) {
      case "register": {
        dispatch<any>(userSignUp({ name, email, password }));
        break;
      }
      case "login": {
        dispatch<any>(userLogin({ email, password }));
        break;
      }
      default:
        throw new Error("wrong auth type value");
    }
    resetForm();
  }

  return (
    <>
      <Heading
        className="auth__heading"
        fontSize={"26px"}
        mb={2}
        mt={2}
        textAlign="center"
      >
        {isRegisterForm ? "Sign up" : "Login"}
      </Heading>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={isRegisterForm ? signUpSchema : loginSchema}
        onSubmit={handleAuthSubmit}
      >
        <Form className="auth__form">
          <Flex flexDir={"column"} alignItems="center" justifyContent="center">
            {isRegisterForm && (
              <FormLabel
                className="auth__label"
                cursor={"pointer"}
                htmlFor="name"
                mb={3}
                mr={0}
                _hover={{ color: "accent.500" }}
                _focus={{ color: "accent.500" }}
              >
                <Text className="auth__label-text" mb={1}>
                  Name
                </Text>
                <FormErrorMessage name="name" />
                <Field
                  as={Input}
                  name="name"
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="auth__input"
                  w={{ md: "400px", lg: "500px" }}
                  _hover={{
                    borderColor: "accent2.700",
                    _placeholder: { color: "accent.500" },
                  }}
                  _focus={{
                    borderColor: "accent2.700",
                    _placeholder: { color: "accent.500" },
                  }}
                />
              </FormLabel>
            )}
            <FormLabel
              className="auth__label"
              cursor={"pointer"}
              htmlFor="email"
              mb={3}
              mr={0}
              _hover={{ color: "accent.500" }}
              _focus={{ color: "accent.500" }}
            >
              <Text className="auth__label-text" mb={1}>
                Email
              </Text>
              <FormErrorMessage name="email" />
              <Field
                as={Input}
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                className="auth__input"
                w={{ md: "400px", lg: "500px" }}
                _hover={{
                  borderColor: "accent2.700",
                  _placeholder: { color: "accent.500" },
                }}
                _focus={{
                  borderColor: "accent2.700",
                  _placeholder: { color: "accent.500" },
                }}
              />
            </FormLabel>
            <FormLabel
              className="auth__label"
              htmlFor="password"
              cursor={"pointer"}
              mb={3}
              mr={0}
              _hover={{ color: "accent.500" }}
              _focus={{ color: "accent.500" }}
            >
              <Text className="auth__label-text" mb={1}>
                Password
              </Text>
              <FormErrorMessage name="password" />
              <Field
                as={Input}
                name="password"
                type="password"
                required
                placeholder="Enter your password"
                className="auth__input"
                w={{ md: "400px", lg: "500px" }}
                _hover={{
                  borderColor: "accent2.700",
                  _placeholder: { color: "accent.500" },
                }}
                _focus={{
                  borderColor: "accent2.700",
                  _placeholder: { color: "accent.500" },
                }}
              />
            </FormLabel>

            <Button
              type="submit"
              className="auth__submit-btn"
              mt={2}
              colorScheme={"purple"}
              _hover={{
                color: "purple.700",
                bgColor: "white",
                border: "1px solid purple",
              }}
              _focus={{
                color: "purple.700",
                bgColor: "white",
                border: "1px solid purple",
              }}
            >
              {isRegisterForm ? "Sign up" : "Login"}
            </Button>
          </Flex>
        </Form>
      </Formik>
    </>
  );
};

export default AuthForm;
