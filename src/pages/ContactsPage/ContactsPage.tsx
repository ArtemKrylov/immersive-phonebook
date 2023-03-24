import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import { useAppDispatch } from "hooks/useAppDispatch";
import { useAppSelector } from "hooks/useAppSelector";
import React, { useEffect } from "react";
import { selectorAuth } from "redux/auth/selectorsAuth";
import { fetchContacts } from "redux/contacts/operationsContacts";

const ContactsPage: React.FC = () => {
  const { token } = useAppSelector(selectorAuth);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!token) return;
    dispatch<any>(fetchContacts());
  }, [dispatch, token]);

  return (
    <div>
      ContactsPage
      <ContactForm />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
