import { Flex, Text } from "@chakra-ui/react";
import ContainerComp from "components/Container/ContainerComp";
import React from "react";

const NoMatchPage: React.FC = () => {
  return (
    <ContainerComp>
      <Flex h="80vh" justifyContent="center">
        <Text as="b" pt="5" color="red.500">
          There is no page by this address! 👁️🔍
        </Text>
      </Flex>
    </ContainerComp>
  );
};

export default NoMatchPage;
