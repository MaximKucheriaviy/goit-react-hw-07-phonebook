import { ContactList } from "./ContactsList.styled"
import PropTypes from "prop-types";


export const ContactsList = ({contacts, deleteContact}) => {
  console.log(contacts);
  return(
    <ContactList>
      {contacts.map(item => {
        return(
          <li key={item._id}>
            <span>{item.name}:</span> 
            <span>{item.phone}</span> 
            <button onClick={() => {deleteContact(item._id)}}>delete</button>
          </li>
        )
      })}
    </ContactList>
  )
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string,
    number: PropTypes.string,
  }))
}