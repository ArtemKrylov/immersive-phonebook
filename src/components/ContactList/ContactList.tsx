import { Box, List, SimpleGrid } from "@chakra-ui/react";
import ContactItem from "components/ContactItem/ContactItem";
import ContainerComp from "components/Container/ContainerComp";
import SkeletonContacts from "components/Skeletons/ContactsSkeleton";
import { useAppSelector } from "hooks/useAppSelector";
import { Contact } from "models/contact";
import React from "react";
import {
  selectContacts,
  selectLoadingContacts,
} from "redux/contacts/selectorsContacts";

const ContactList: React.FC = () => {
  const contacts: Contact[] = useAppSelector(selectContacts);
  const isLoading: boolean = useAppSelector(selectLoadingContacts);

  return (
    <Box as="section" className="section section--contactList">
      <ContainerComp>
        <List className={"contactList"} p={3} spacing={2}>
          <SimpleGrid minChildWidth={"250px"} spacing={{ base: "2", md: "4" }}>
            {isLoading && <SkeletonContacts />}
            {contacts.length > 0 &&
              contacts.map(({ id = "", name, number }) => (
                <ContactItem key={id} id={id} name={name} number={number} />
              ))}
          </SimpleGrid>
        </List>
      </ContainerComp>
    </Box>
  );
};

export default ContactList;
