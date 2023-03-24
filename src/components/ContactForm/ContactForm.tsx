import { addContact } from "redux/contacts/operationsContacts";
import { useAppDispatch } from "hooks/useAppDispatch";

const ContactForm = () => {
  const dispatch = useAppDispatch();

  function onContactFormSubmit(event: any) {
    event.preventDefault();
    const form = event.currentTarget;
    const name: string = form.elements.name.value;
    const number: string = form.elements.number.value;
    if (!name || !number) return;
    dispatch<any>(addContact({ name, number }));
    form.reset();
  }

  return (
    <form className={""} onSubmit={onContactFormSubmit}>
      <label>
        <p className="contactForm__label-text">Name</p>
        <input
          type="text"
          className="contactForm__input"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={() => {}}
          placeholder="Enter your name"
          autoFocus
        />
      </label>
      <label>
        <p className="contactForm__label-text">Number</p>
        <input
          type="tel"
          className="contactForm__input"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={() => {}}
          placeholder="Enter your phone number"
        />
      </label>
      <button type="submit" className="contactForm__button">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
