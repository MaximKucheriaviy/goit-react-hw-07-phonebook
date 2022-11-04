import { useSelector } from "react-redux";
import { Loader } from "./Loader/Loader";
import { Routes, Route } from "react-router-dom";
import { Header } from "./Header/Header";
import { Main } from "pages/Main";
import { SignUp } from "pages/SignUp";
import { LogIn } from "pages/LogIn";



export const App = () => {

  const isLoading = useSelector(state => state.contacts.isLoading);

  // const filteredContacts = () => {
  //   if(!filter){
  //     return contacts;
  //   }
  //   return contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));
  // }

  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="signup" element={<SignUp/>}/>
        <Route path="login" element={<LogIn/>}/>
      </Routes>
      <Loader isLoading={isLoading}/>
    </div>
  );
}


