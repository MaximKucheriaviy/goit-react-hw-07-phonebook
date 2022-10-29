import { Section } from "./Section/Section";
import { AddNumberForm } from "./AddNumberForm/AddNumberForm";
import { ContactsList } from "./ContactsList/ContactsList";
import { FindContactForm } from "./FindContactForm/FindContactForm";



export const App = () => {
  return (
    <div>
      <Section title="Phonebook">
        <AddNumberForm/>
      </Section>
      <Section title="Contacts">
        <FindContactForm/>
        <ContactsList/>
      </Section>
    </div>
  );
}


