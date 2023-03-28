import {
  Button,
  Flex,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { useAppDispatch } from "hooks/useAppDispatch";
import React, { FC } from "react";
import { userLogin, userSignUp } from "redux/auth/operationsAuth";

interface AuthFormInterface {
  type: "register" | "login";
}

const AuthForm: FC<AuthFormInterface> = ({ type }) => {
  const dispatch = useAppDispatch();
  const isRegisterForm: boolean = type === "register" ? true : false;

  function handleAuthSubmit(event: any) {
    event.preventDefault();
    const form = event.currentTarget;
    const email: string = form.elements.email.value;
    const password: string = form.elements.password.value;
    switch (type) {
      case "register": {
        dispatch<any>(
          userSignUp({ name: form.elements?.name.value, email, password })
        );
        break;
      }
      case "login": {
        dispatch<any>(userLogin({ email, password }));
        break;
      }
      default:
        throw new Error("wrong auth type value");
    }
    form.reset();
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
      <form onSubmit={handleAuthSubmit} className="auth__form">
        <Flex flexDir={"column"} alignItems="center" justifyContent="center">
          {isRegisterForm && (
            <FormLabel
              className="auth__label"
              cursor={"pointer"}
              mb={3}
              _hover={{ color: "accent.500" }}
              _focus={{ color: "accent.500" }}
            >
              <Text className="auth__label-text" mb={1}>
                Name
              </Text>
              <Input
                name="name"
                type={"text"}
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
            mb={3}
            _hover={{ color: "accent.500" }}
            _focus={{ color: "accent.500" }}
          >
            <Text className="auth__label-text" mb={1}>
              Email
            </Text>
            <Input
              name="email"
              type={"email"}
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
            cursor={"pointer"}
            mb={3}
            _hover={{ color: "accent.500" }}
            _focus={{ color: "accent.500" }}
          >
            <Text className="auth__label-text" mb={1}>
              Password
            </Text>
            <Input
              name="password"
              type={"password"}
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
      </form>
    </>
  );
};

export default AuthForm;
