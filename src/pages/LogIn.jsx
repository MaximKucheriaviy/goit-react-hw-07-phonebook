import { nanoid } from "nanoid"
import { useState, useEffect } from "react";
import { loginUser } from "redux/operations";
import { useDispatch, useSelector } from "react-redux";
import { StyledMain } from "./StyledPages";
import { resetError } from "redux/slices";

export const LogIn = () => {
    const dispatch = useDispatch();
    const error = useSelector(state => state.userToken.error);

    const mailID = nanoid();
    const passwordID = nanoid();

    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        dispatch(resetError());
    }, [dispatch]);

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



    return <StyledMain>
        <form className="userForm" onSubmit={submitHendler}>
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
            <button type="submit">Увійти</button>
        </form>
    </StyledMain>
}