import { Skeleton, Stack } from "@chakra-ui/react";
import React from "react";

const ContactsSkeleton: React.FC = () => {
  return (
    <Stack p="[5,null,10,20]">
      <Skeleton h="8" startColor="blue.800" endColor="gray.300" />
      <Skeleton h="8" startColor="blue.500" endColor="gray.300" />
      <Skeleton h="8" startColor="cyan.500" endColor="gray.300" />
      <Skeleton h="8" startColor="teal.300" endColor="gray.300" />
      <Skeleton h="8" startColor="green.400" endColor="gray.300" />
      <Skeleton h="8" startColor="pink.700" endColor="regray.300d" />
      <Skeleton h="8" startColor="purple.600" endColor="gray.300" />
    </Stack>
  );
};

export default ContactsSkeleton;
