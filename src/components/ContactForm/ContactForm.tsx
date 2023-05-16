import { addContact } from "redux/contacts/operationsContacts";
import { useAppDispatch } from "hooks/useAppDispatch";
import {
  Box,
  Button,
  Center,
  Container,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";

const ContactForm: React.FC = () => {
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
    <Box as="section" className="section section--contactForm">
      <Container className="container">
        <form className={"contactForm"} onSubmit={onContactFormSubmit}>
          <FormLabel
            mb={3}
            cursor={"pointer"}
            _hover={{ textShadow: "accentTextShadow2" }}
            _focus={{ textShadow: "accentTextShadow2" }}
          >
            <Text className="contactForm__FormLabel-text">Name</Text>
            <Input
              type="text"
              className="contactForm__input"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              placeholder="Enter your name"
              _hover={{ borderColor: "accent2.700" }}
              _focus={{ borderColor: "accent2.700" }}
            />
          </FormLabel>
          <FormLabel
            mb={3}
            cursor={"pointer"}
            _hover={{ textShadow: "accentTextShadow2" }}
            _focus={{ textShadow: "accentTextShadow2" }}
          >
            <Text className="contactForm__FormLabel-text">Number</Text>
            <Input
              type="tel"
              className="contactForm__input"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              placeholder="Enter your phone number"
              _hover={{ borderColor: "accent2.700" }}
              _focus={{ borderColor: "accent2.700" }}
            />
          </FormLabel>
          <Center>
            <Button
              type="submit"
              className="contactForm__button"
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
              Add contact
            </Button>
          </Center>
        </form>
      </Container>
    </Box>
  );
};

export default ContactForm;
