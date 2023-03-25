import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const NoMatchPage: React.FC = () => {
  return (
    <Flex h="80vh" justifyContent="center">
      <Text as="b" pt="5" color="red.500">
        There is no page by this address! 👁️🔍
      </Text>
    </Flex>
  );
};

export default NoMatchPage;
