import { nanoid } from "nanoid";
import { useState, useRef } from "react";
import { AddForm } from "./AddNumberForm.styled"
import { addContact } from "redux/slices";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

export const AddNumberForm = () => {
    const nameInputId = useRef(nanoid());
    const telephoneInputId = useRef(nanoid());

    const [name, setName] = useState("");
    const [number, setNumber] = useState("");

    const dispatch = useDispatch();

    const contacts = useSelector(state => state.contacts.value);
    const chageHendler = (event) => {
        const {value, name} = event.target;
        switch(name){
            case "name":
                setName(value);
                break;
            case "number":
                setNumber(value);
                break;
            default:
                return;
        }
    }

    const clearForm = () => {
        setName("");
        setNumber("");
    }

    const onSubmitHendler = (event) =>{
        event.preventDefault();
        if(contacts.some(item => item.name.toLowerCase() === name.toLowerCase())){
            alert(`${name} is already in contacts`);
            clearForm();
            return;
        }
        dispatch(addContact({name, number, id: nanoid()}));
        clearForm();
    }

    return(
        <AddForm onSubmit={onSubmitHendler}>
            <label htmlFor={nameInputId.current}>Name</label>
            <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                id={nameInputId.current}
                required
                onChange={chageHendler}
                value={name}
            /> 
            <br />
            <label htmlFor={telephoneInputId.current}>Telephone</label>  
            <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={chageHendler}
                value={number}
                id={telephoneInputId.current}
            />
            <br />
            <button type="submit" disabled={name === "" || number === ""}>Add contact</button>
        </AddForm>
    )
}

AddNumberForm.propTypes = {
    onSubmit: PropTypes.func
}