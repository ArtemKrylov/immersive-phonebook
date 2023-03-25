import { Flex } from "@chakra-ui/react";
import { useAppSelector } from "hooks/useAppSelector";
import React from "react";
import { NavLink } from "react-router-dom";
import { selectorLogged } from "redux/auth/selectorsAuth";

const Navigation = () => {
  const isLogged: boolean = Boolean(useAppSelector(selectorLogged));

  return (
    <Flex as="nav" gap="2" className="navigation header__navigation">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
      {!isLogged && (
        <>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Login</NavLink>
        </>
      )}
    </Flex>
  );
};

export default Navigation;
