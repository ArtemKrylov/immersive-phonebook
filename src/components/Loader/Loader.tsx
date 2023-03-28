import { Box, Center } from "@chakra-ui/react";
import React from "react";
import { ThreeCircles } from "react-loader-spinner";

const Loader: React.FC = () => {
  return (
    <Box w={"100vw"} h={"300px"} pt={20}>
      <Center>
        <ThreeCircles
          color="#1A365D"
          innerCircleColor="#1CD8D2"
          height="200"
          width="200"
          ariaLabel="three-circles-rotating"
        />
      </Center>
    </Box>
  );
};

export default Loader;
