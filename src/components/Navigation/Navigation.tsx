import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { NavLinkStyled } from "./Navigation.styled";

const Navigation: React.FC = () => {
  const pages: { name: string; path: string }[] = [
    { name: "Home", path: "/" },
    { name: "Contacts", path: "/contacts" },
  ];

  return (
    <Flex
      as="nav"
      gap={[2, 2, 4, 5]}
      fontSize={"[12px,12px,16px,16px]"}
      className="navigation header__navigation"
    >
      {pages.map((page) => (
        <NavLinkStyled
          key={page.path}
          to={page.path}
          className={"navigation__link"}
        >
          <Text
            className="navigation__linkText"
            as={"b"}
            _hover={{ color: "accent.300" }}
            _focus={{ color: "accent.300" }}
          >
            {page.name}
          </Text>
        </NavLinkStyled>
      ))}
    </Flex>
  );
};

export default Navigation;
