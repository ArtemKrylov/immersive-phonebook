import React, { useEffect } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { MdPersonAdd } from "react-icons/md";

import { fetchContacts } from "redux/contacts/operationsContacts";
import { useAppDispatch } from "hooks/useAppDispatch";
import { useAppSelector } from "hooks/useAppSelector";
import { selectorAuth } from "redux/auth/selectorsAuth";
import ContactList from "components/ContactList/ContactList";
import ContactForm from "components/ContactForm/ContactForm";

const ContactsPage: React.FC = () => {
  const { token } = useAppSelector(selectorAuth);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!token) return;
    dispatch<any>(fetchContacts());
  }, [dispatch, token]);

  return (
    <Box className="contactPage" pt={[3, 3, 4, 5]}>
      <Heading mb={[2, 2, 3, 4]} fontSize={"xl"} textAlign="center">
        Your contacts
      </Heading>
      <Accordion allowToggle>
        <AccordionItem pl={2} pr={2}>
          <AccordionButton mb={[2, 2, 3, 4]}>
            <MdPersonAdd />
            <Text ml={2}>Add contact</Text>
            <Spacer />

            <AccordionIcon />
          </AccordionButton>{" "}
          <AccordionPanel>
            <ContactForm />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <ContactList />
    </Box>
  );
};

export default ContactsPage;
