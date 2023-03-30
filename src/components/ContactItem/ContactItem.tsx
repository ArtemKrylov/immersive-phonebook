import React from "react";
import {
  Button,
  Center,
  Divider,
  Flex,
  Icon,
  IconButton,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { MdContactPhone } from "react-icons/md";

import { useAppDispatch } from "hooks/useAppDispatch";
import { deleteContact } from "redux/contacts/operationsContacts";
import { DeleteIcon, PhoneIcon } from "@chakra-ui/icons";

interface ContactItemInterface {
  id: string;
  name: string;
  number: string;
}

const ContactItem: React.FC<ContactItemInterface> = ({ id, name, number }) => {
  const dispatch = useAppDispatch();
  function handleDeleteBtnClick(event: any) {
    dispatch<any>(deleteContact(id));
  }
  return (
    <ListItem
      className="contactItem"
      position={"relative"}
      p={5}
      border="1px dotted"
      borderColor="accent.300"
      borderRadius={"md"}
      maxW={{ md: "300px", lg: "500px" }}
      w="100%"
      _hover={{ borderColor: "white", transform: "translate(1px, 1px)" }}
      _focus={{ borderColor: "white", transform: "translate(1px, 1px)" }}
    >
      <Icon as={MdContactPhone} m={0} position="absolute" top={0} left={0} />
      <Flex
        className="contactItem__name"
        alignItems={"center"}
        justify={"space-between"}
        flexDirection="column"
        mb={3}
        gap={3}
      >
        <Text maxW={"70%"} display={"inline-block"} isTruncated>
          {name}:
        </Text>

        <Text className="contactItem__number">{number}</Text>
      </Flex>
      <Divider borderColor={"purple.700"} mb={3} />
      <IconButton
        type="button"
        aria-label="delete"
        className="contactItem__button"
        w={"15px"}
        h={"15px"}
        position="absolute"
        top={0}
        right={0}
        value={id}
        onClick={handleDeleteBtnClick}
        icon={<DeleteIcon />}
        size={{ base: "xs", md: "md" }}
        colorScheme={"purple"}
        _hover={{
          color: "purple.700",
          bgColor: "white",
          border: "1px solid purple",
        }}
        _focus={{
          color: "purple.700",
          bgColor: "white",
          border: "1px solid purple",
        }}
      ></IconButton>
      <Center>
        <Button
          type="button"
          className="contactItem__button--call"
          leftIcon={<PhoneIcon />}
          size={{ base: "xs", md: "md" }}
          colorScheme={"purple"}
          _hover={{
            color: "purple.700",
            bgColor: "white",
            border: "1px solid purple",
          }}
          _focus={{
            color: "purple.700",
            bgColor: "white",
            border: "1px solid purple",
          }}
        >
          <a href={`tel:${number}`}>Call</a>
        </Button>
      </Center>
    </ListItem>
  );
};

export default ContactItem;
