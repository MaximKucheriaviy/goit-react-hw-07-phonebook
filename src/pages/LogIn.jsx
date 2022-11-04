import { nanoid } from "nanoid"
import { useState } from "react";
import { loginUser } from "redux/operations";
import { useDispatch } from "react-redux";

export const LogIn = () => {
    const dispatch = useDispatch();

    const mailID = nanoid();
    const passwordID = nanoid();

    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");

    const chageHendled = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        switch (name){
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
        dispatch(loginUser({email: mail, password}));
    }



    return <form onSubmit={submitHendler}>
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