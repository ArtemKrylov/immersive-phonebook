import ContactItem from "components/ContactItem/ContactItem";
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
    <ul className={""}>
      {contacts.length > 0 &&
        contacts.map(({ id = "", name, number }) => (
          <ContactItem key={id} id={id} name={name} number={number} />
        ))}
    </ul>
  );
};

export default ContactList;
