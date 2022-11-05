import { nanoid } from "nanoid"
import { useState, useEffect } from "react";
import { createNewUser } from "redux/operations";
import { useDispatch, useSelector } from "react-redux";
import { StyledMain } from "./StyledPages";
import { resetError } from "redux/slices";

export const SignUp = () => {
    const dispatch = useDispatch();
    const error = useSelector(state => state.userToken.error);

    const nameID = nanoid();
    const mailID = nanoid();
    const passwordID = nanoid();

    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        dispatch(resetError());
    }, [dispatch]);


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



    return <StyledMain>
    <form className="userForm" onSubmit={submitHendler}>
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
        <p className="errorMesage">{error}</p>
        <button type="submit">Зареєструватись</button>
    </form>
    </StyledMain> 
}