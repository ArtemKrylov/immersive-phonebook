import React from "react";
import { Center, Input } from "@chakra-ui/react";
import ContainerComp from "components/Container/ContainerComp";

interface ContactFilterInterface {
  getQuery(query: string): void;
}

const ContactFilter: React.FC<ContactFilterInterface> = ({ getQuery }) => {
  function handleQueryChange(event: any) {
    getQuery(event.target.value);
  }

  return (
    <ContainerComp>
      <Center>
        <Input
          type={"text"}
          placeholder={"Enter your filter query"}
          onChange={handleQueryChange}
          maxW={{ md: "400px", lg: "600px" }}
          textAlign="center"
          cursor={"pointer"}
          borderRadius="md"
          _hover={{
            color: "white",
            backgroundColor: "accent.500",
            _placeholder: { color: "white" },
          }}
          _focus={{
            color: "white",
            backgroundColor: "accent.500",
            _placeholder: { color: "white" },
          }}
        ></Input>
      </Center>
    </ContainerComp>
  );
};

export default ContactFilter;
