import React, { useEffect, useState } from "react";
import { Box, Heading } from "@chakra-ui/react";
import { Helmet } from "react-helmet";

import { fetchContacts } from "redux/contacts/operationsContacts";
import { useAppDispatch } from "hooks/useAppDispatch";
import { useAppSelector } from "hooks/useAppSelector";
import { selectorAuth } from "redux/auth/selectorsAuth";

import ContactList from "components/ContactList/ContactList";
import ContactFilter from "components/ContactFilter/ContactFilter";
import ContainerComp from "components/Container/ContainerComp";
import ContactAdd from "components/ContactAdd/ContactAdd";

const ContactsPage: React.FC = () => {
  //localstate
  const [query, setQuery] = useState<string | null>(null);
  //
  const { token } = useAppSelector(selectorAuth);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!token) return;
    dispatch<any>(fetchContacts());
  }, [dispatch, token]);

  function getQuery(query: string) {
    setQuery(query);
  }

  return (
    <Box
      className="contactPage"
      pt={[3, 3, 4, 5]}
      fontFamily="contactsFont"
      flexGrow={1}
    >
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alkatra:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ContainerComp>
        <Heading mb={[2, 2, 3, 4]} fontSize={"xl"} textAlign="center">
          Your contacts
        </Heading>
        <ContactAdd />
      </ContainerComp>

      <ContactFilter getQuery={getQuery} />
      <ContactList query={query} />
    </Box>
  );
};

export default ContactsPage;
