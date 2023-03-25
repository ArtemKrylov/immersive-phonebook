import { Flex, Text } from "@chakra-ui/react";
import { useAppSelector } from "hooks/useAppSelector";
import React from "react";
import { NavLink } from "react-router-dom";
import { selectorLogged } from "redux/auth/selectorsAuth";

const Navigation = () => {
  const isLogged: boolean = Boolean(useAppSelector(selectorLogged));

  return (
    <Flex as="nav" gap="2" className="navigation header__navigation">
      <NavLink to="/">
        <Text as={"b"} fontSize="lg">
          Home
        </Text>
      </NavLink>
      <NavLink to="/contacts">
        <Text as={"b"} fontSize="lg">
          Contacts
        </Text>
      </NavLink>
      {!isLogged && (
        <>
          <NavLink to="/register">
            <Text as={"b"} fontSize="lg">
              Register
            </Text>
          </NavLink>
          <NavLink to="/login">
            <Text as={"b"} fontSize="lg">
              Login
            </Text>
          </NavLink>
        </>
      )}
    </Flex>
  );
};

export default Navigation;
