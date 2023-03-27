import React from "react";
import { userLogout } from "redux/auth/operationsAuth";
import { selectorAuth } from "redux/auth/selectorsAuth";
import { FiLogOut } from "react-icons/fi";

import { useAppSelector } from "hooks/useAppSelector";

import Navigation from "components/Navigation/Navigation";
import { useAppDispatch } from "hooks/useAppDispatch";
import { Box, Button, Flex, HStack, Spacer, Text } from "@chakra-ui/react";
import { NavLink, Link } from "react-router-dom";
import ContainerComp from "components/Container/ContainerComp";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector(selectorAuth);
  const {
    user: { name },
    token,
  } = auth;
  const isLogged = Boolean(token);

  function onLogoutBtnClick(): void {
    if (!token) return;
    dispatch<any>(userLogout(token));
  }

  return (
    <Box
      background="linear-gradient(to right, #1cd8d2, #93edc7)"
      color={"blue.900"}
    >
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
                <Text color={"purple.700"} as="b">
                  Immersive phonebook
                </Text>
              </Link>
            </Box>
            <Spacer />
            {isLogged ? (
              <Flex gap="2" flexDir={["column", "column", "row", "row"]} m={0}>
                <Text>Hello {name}!</Text>{" "}
                <Button
                  p={3}
                  size={"xs"}
                  rightIcon={<FiLogOut />}
                  colorScheme="purple"
                  onClick={onLogoutBtnClick}
                >
                  Logout
                </Button>
              </Flex>
            ) : (
              <>
                <NavLink to="/register" className={"navigation__link"}>
                  <Text as={"b"}>Register</Text>
                </NavLink>
                <NavLink to="/login" className={"navigation__link"}>
                  <Text as={"b"}>Login</Text>
                </NavLink>
              </>
            )}
          </HStack>

          <Navigation />
        </Flex>
      </ContainerComp>
    </Box>
  );
};

export default Header;
