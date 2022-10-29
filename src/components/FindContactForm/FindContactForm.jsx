import { useRef } from "react"
import { nanoid } from "nanoid";
import { VerticalForm } from "./FindContactForm.styled"
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { chageFilter } from "redux/slices";

export const FindContactForm = () => {
    const nameId = useRef(nanoid());
    const dispatch = useDispatch();
    const name = useSelector(state => state.filter);
    const chageHendler = (event) => {
        const {value} = event.target;
        dispatch(chageFilter(value));
    }

    return(
        <VerticalForm onSubmit={event => event.preventDefault()}>
            <label htmlFor={nameId.current}>Find contacts by name</label>
            <input 
                id={nameId.current}
                type="text" 
                name="name"
                value={name}
                onChange={chageHendler}
                autoComplete="off"
            />
        </VerticalForm>
    )
}





FindContactForm.propTypes = {
    filterChage: PropTypes.func
}