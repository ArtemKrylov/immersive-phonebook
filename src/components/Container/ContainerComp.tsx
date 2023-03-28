import { Container } from "@chakra-ui/react";
import React from "react";

interface ContainerCompProps {
  children?: any;
}

const ContainerComp: React.FC<ContainerCompProps> = ({ children }) => {
  return (
    <Container
      className="container"
      pt={2}
      pb={2}
      maxW="[280px, null, 768px, 1200px]"
    >
      {children}
    </Container>
  );
};

export default ContainerComp;
