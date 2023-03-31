import React from "react";
import { userLogout } from "redux/auth/operationsAuth";
import { selectorAuth } from "redux/auth/selectorsAuth";
import { FiLogOut } from "react-icons/fi";
import { Helmet } from "react-helmet";

import { useAppSelector } from "hooks/useAppSelector";

import Navigation from "components/Navigation/Navigation";
import { useAppDispatch } from "hooks/useAppDispatch";
import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import ContainerComp from "components/Container/ContainerComp";
import { ColorModeSwitcher } from "ColorModeSwitcher";
import { NavLinkStyled } from "./Header.styled";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const auth = useAppSelector(selectorAuth);
  const {
    user: { name },
    token,
  } = auth;
  const isLogged = Boolean(token);

  function onLogoutBtnClick(): void {
    if (!token) return;
    navigate("/", { replace: true });
    dispatch<any>(userLogout(token));
  }

  return (
    <Box
      background={"headerGradient"}
      color={"accent.700"}
      fontFamily="headerFont"
    >
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:wght@700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ContainerComp>
        <Flex
          className="header"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          flexDir={"column"}
          gap="2"
        >
          <HStack w={"100%"}>
            <Box maxW={"50%"}>
              <Link to="/">
                <Text
                  as="b"
                  _hover={{ color: "accent.300" }}
                  _focus={{ color: "accent.300" }}
                >
                  Immersive phonebook
                </Text>
              </Link>
            </Box>
            <ColorModeSwitcher
              justifySelf="flex-end"
              _hover={{ color: "accent.300" }}
              _focus={{ color: "accent.300" }}
            />
            <Spacer />
            {isLogged ? (
              <Flex gap="2" flexDir={{ base: "column", md: "row" }} m={0}>
                <Text textAlign={"center"}>Hello {name}!</Text>
                <Button
                  p={3}
                  size={"xs"}
                  rightIcon={<FiLogOut />}
                  colorScheme="purple"
                  onClick={onLogoutBtnClick}
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
                  Logout
                </Button>
              </Flex>
            ) : (
              <Flex
                flexDir={{ base: "column", md: "row" }}
                alignItems="center"
                gap={{ base: 1, md: 3, lg: 4 }}
              >
                <NavLinkStyled to="/register" className={"navigation__link"}>
                  <Text
                    className={"navigation__linkText"}
                    as={"b"}
                    _hover={{ color: "accent.300" }}
                    _focus={{ color: "accent.300" }}
                  >
                    Register
                  </Text>
                </NavLinkStyled>
                <NavLinkStyled to="/login" className={"navigation__link"}>
                  <Text
                    className={"navigation__linkText"}
                    as={"b"}
                    _hover={{ color: "accent.300" }}
                    _focus={{ color: "accent.300" }}
                  >
                    Login
                  </Text>
                </NavLinkStyled>
              </Flex>
            )}
          </HStack>
          <Divider borderColor={"accent"} />

          <Navigation />
        </Flex>
      </ContainerComp>
    </Box>
  );
};

export default Header;
