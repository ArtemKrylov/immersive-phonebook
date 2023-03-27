import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

const Navigation: React.FC = () => {
  // const isLogged: boolean = Boolean(useAppSelector(selectorLogged));

  return (
    <Flex
      as="nav"
      gap={[2, 2, 4, 5]}
      fontSize={"[12px,12px,16px,16px]"}
      className="navigation header__navigation"
    >
      <NavLink to="/" className={"navigation__link"}>
        <Text as={"b"}>Home</Text>
      </NavLink>
      <NavLink to="/contacts" className={"navigation__link"}>
        <Text as={"b"}>Contacts</Text>
      </NavLink>
      {/* {!isLogged && (
        <>
          <NavLink to="/register" className={"navigation__link"}>
            <Text as={"b"}>Register</Text>
          </NavLink>
          <NavLink to="/login" className={"navigation__link"}>
            <Text as={"b"}>Login</Text>
          </NavLink>
        </>
      )} */}
    </Flex>
  );
};

export default Navigation;
