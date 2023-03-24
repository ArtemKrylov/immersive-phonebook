import { useAppDispatch } from "hooks/useAppDispatch";
import React from "react";
import { deleteContact } from "redux/contacts/operationsContacts";

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
    <li className="contactItem">
      <span className="contactItem__name">{name}:</span>
      <span className="contactItem__number">{number}</span>
      <button
        type="button"
        className="contactItem__button"
        value={id}
        onClick={handleDeleteBtnClick}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
