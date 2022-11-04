import { nanoid } from "nanoid"
import { useState } from "react";
import { createNewUser } from "redux/operations";
import { useDispatch } from "react-redux";

export const SignUp = () => {
    const dispatch = useDispatch();

    const nameID = nanoid();
    const mailID = nanoid();
    const passwordID = nanoid();

    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");

    const chageHendled = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        switch (name){
            case "name":
                setName(value);
                break;
            case "mail":
                setMail(value);
                break;
            case "password":
                setPassword(value);
                break;
            default:
                return;
        }
    }

    const submitHendler = event => {
        event.preventDefault();
        dispatch(createNewUser({name, email: mail, password}));
    }



    return <form onSubmit={submitHendler}>
        <label htmlFor={nameID}>Name</label>
        <input 
            type="text" 
            id={nameID}
            name="name"
            value={name}
            onChange={chageHendled}
        />
        <label htmlFor={mailID}>E-mail</label>
        <input 
            type="mail" 
            id={mailID} 
            name="mail"
            value={mail}
            onChange={chageHendled}
        />
        <label htmlFor={passwordID}>Password</label>
        <input 
            type="password" 
            id={passwordID}
            name="password"
            value={password}
            onChange={chageHendled}
        />
        <button type="submit">submit</button>
    </form>
}