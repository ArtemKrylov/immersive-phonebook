import { Box, Heading, Text } from "@chakra-ui/react";
import ContainerComp from "components/Container/ContainerComp";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <ContainerComp>
      <Box pt={5} textAlign="center">
        <Heading fontSize={"30px"} mb={5}>
          Welcome to the Immersive phonebook app!
        </Heading>
        <Text>You have to register / login first to use the app properly</Text>
      </Box>
    </ContainerComp>
  );
};

export default HomePage;
