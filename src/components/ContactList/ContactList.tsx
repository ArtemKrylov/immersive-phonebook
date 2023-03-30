import { Box, Center, List, SimpleGrid } from "@chakra-ui/react";
import ContactItem from "components/ContactItem/ContactItem";
import ContactsPaginate from "components/ContactsPaginate/ContactsPaginate";
import ContainerComp from "components/Container/ContainerComp";
import SkeletonContacts from "components/Skeletons/ContactsSkeleton";
import { useAppSelector } from "hooks/useAppSelector";
import { Contact } from "models/contact";
import React, { useEffect, useState } from "react";

import {
  selectContacts,
  selectLoadingContacts,
} from "redux/contacts/selectorsContacts";

interface ContactListInterface {
  query: string | null;
}

const ContactList: React.FC<ContactListInterface> = ({ query }) => {
  //local state
  const [page, setPage] = useState(1);
  const [shownContacts, setShownContacts] = useState<Contact[]>([]);
  //

  const contacts: Contact[] = useAppSelector(selectContacts);
  const filteredContacts: Contact[] = filterContacts(contacts, query);
  // let filteredPageContacts = filteredContacts.slice(
  //   0 + 10 * (page - 1),
  //   9 + 10 * (page - 1)
  // );
  const isLoading: boolean = useAppSelector(selectLoadingContacts);
  const CONTACTS_PER_PAGE: number = 10;
  const pageCount: number = Math.ceil(
    filteredContacts.length / CONTACTS_PER_PAGE
  );

  useEffect(() => {
    const filteredPageContacts: Contact[] = filteredContacts.slice(
      0 + CONTACTS_PER_PAGE * (page - 1),
      9 + CONTACTS_PER_PAGE * (page - 1) + 1
    );
    setShownContacts(filteredPageContacts);
  }, [page, filteredContacts]);

  return (
    <Box as="section" className="section section--contactList">
      <ContainerComp>
        <List className={"contactList"} spacing={2} mb={"20px"}>
          <SimpleGrid
            minChildWidth={{ base: "270px", md: "300px" }}
            spacing={{ base: "2", md: "4" }}
          >
            {isLoading && <SkeletonContacts />}
            {shownContacts.length > 0 &&
              shownContacts.map(({ id = "", name, number }) => (
                <Center key={id}>
                  <ContactItem id={id} name={name} number={number} />
                </Center>
              ))}
          </SimpleGrid>
        </List>
        {pageCount > 1 && (
          <ContactsPaginate pageCount={pageCount} setPage={setPage} />
        )}
      </ContainerComp>
    </Box>
  );
};

export default ContactList;

function filterContacts(contacts: Contact[], query: string | null) {
  if (!query) return contacts;
  return contacts.filter((contact) => contact.name.includes(query));
}
