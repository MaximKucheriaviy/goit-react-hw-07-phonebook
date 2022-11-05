import { Navigate, Route } from "react-router-dom";
import { useSelector } from "react-redux";

export const PublicRoute = ({to, element, redirection}) => {
    const token = useSelector(state => state.userToken.token);
    return <>
        {token && <Navigate to={redirection}/>}
        <Route to={to} element={element}/>
    </>
}