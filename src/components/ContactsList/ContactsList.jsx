import { ContactList } from "./ContactsList.styled"
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { deleteContact } from "redux/slices";
import { useDispatch } from "react-redux";

export const ContactsList = () => {
  const contacts = useSelector(state => state.contacts.value);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const filteredContacts = () => {
    if(!filter){
      return contacts;
    }
    return contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));
  }
        return(
            <ContactList>
            {filteredContacts().map(item => {
              return(
                <li key={item.id}>
                  <span>{item.name}:</span> 
                  <span>{item.number}</span> 
                  <button onClick={() => {dispatch(deleteContact(item.id))}}>delete</button>
                </li>
              )
            })}
            </ContactList>
        )
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    number: PropTypes.string,
  }))
}