import React from "react";
import { userLogout } from "redux/auth/operationsAuth";
import { selectorAuth } from "redux/auth/selectorsAuth";
import { FiLogOut } from "react-icons/fi";

import { useAppSelector } from "hooks/useAppSelector";

import Navigation from "components/Navigation/Navigation";
import { useAppDispatch } from "hooks/useAppDispatch";
import { Button, Container, Flex } from "@chakra-ui/react";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector(selectorAuth);
  const {
    user: { name },
    token,
  } = auth;

  function onLogoutBtnClick(): void {
    if (!token) return;
    dispatch<any>(userLogout(token));
  }

  return (
    <Container
      className="container"
      pt={2}
      pb={2}
      background="linear-gradient(to right, #1cd8d2, #93edc7)"
      color={"blue.900"}
    >
      <Flex
        className="header"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="2"
      >
        <Navigation />

        {token && (
          <Flex gap="2">
            <p>Hello {name}!</p>{" "}
            <Button
              size={"xs"}
              rightIcon={<FiLogOut />}
              onClick={onLogoutBtnClick}
            >
              Logout
            </Button>
          </Flex>
        )}
      </Flex>
    </Container>
  );
};

export default Header;
