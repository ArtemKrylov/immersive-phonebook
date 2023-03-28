import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Spacer,
  Text,
} from "@chakra-ui/react";
import ContactForm from "components/ContactForm/ContactForm";
import React from "react";
import { MdPersonAdd } from "react-icons/md";

const ContactAdd: React.FC = () => {
  return (
    <Accordion allowToggle>
      <AccordionItem pl={2} pr={2}>
        <AccordionButton
          mb={[2, 2, 3, 4]}
          borderRadius="md"
          _hover={{
            color: "white",
            backgroundColor: "accent.500",
          }}
        >
          <MdPersonAdd />
          <Text ml={5}>Add contact</Text>
          <Spacer />

          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <ContactForm />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default ContactAdd;
