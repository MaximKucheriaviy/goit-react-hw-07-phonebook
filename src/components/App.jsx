import { Section } from "./Section/Section";
import { AddNumberForm } from "./AddNumberForm/AddNumberForm";
import { ContactsList } from "./ContactsList/ContactsList";
import { FindContactForm } from "./FindContactForm/FindContactForm";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts, deleteContact } from "redux/operations";
import { useEffect } from "react";



export const App = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  const filteredContacts = () => {
    if(!filter){
      return contacts;
    }
    return contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));
  }

  return (
    <div>
      <Section title="Phonebook">
        <AddNumberForm/>
      </Section>
      <Section title="Contacts">
        <FindContactForm/>
        <ContactsList contacts={filteredContacts(contacts)} deleteContact={(id) => {dispatch(deleteContact(id))}}/>
      </Section>
    </div>
  );
}


