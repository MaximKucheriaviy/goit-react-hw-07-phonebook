import { useSelector } from "react-redux";
import { Loader } from "./Loader/Loader";
import { Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./Header/Header";
import { Main } from "pages/Main";
import { SignUp } from "pages/SignUp";
import { LogIn } from "pages/LogIn";
import { logOut } from "redux/slices";
import { useDispatch } from "react-redux";




export const App = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(state => state.contacts.isLoading);
  const userLoading = useSelector(state => state.userToken.isLoading);
  const token = useSelector(state => state.userToken.token);

  const logOutHendler = () => {
    dispatch(logOut());
  }

  // const filteredContacts = () => {
  //   if(!filter){
  //     return contacts;
  //   }
  //   return contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));
  // }

  return (
    <div>
      <Header token={token} logOut={logOutHendler}/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="signup" element={!token ? <SignUp/> : <Navigate to="/"/>}/>
        <Route path="login" element={!token ?<LogIn/> : <Navigate to="/"/>}/>
      </Routes>
      <Loader isLoading={isLoading || userLoading}/>
    </div>
  );
}


