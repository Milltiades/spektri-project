import { Route, Routes } from "react-router";
import GlobalStylesComponent from "./components/GlobalStylesComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import EventPage from "./components/EventPage";
import HomePage from "./components/HomePage";
import SignInPage from "./components/SignInPage";
import UserPage from "./components/UserPage";
import AddEventPage from "./components/AddEventPage";
import LoginPage from "./components/LoginPage";

import {  useContext, useEffect } from 'react';

import { useNavigate } from "react-router-dom";
import { RequireAuth } from "react-auth-kit";
import { AuthContext } from "./context/AuthContext";


function App() {
  const { isAuthenticated, setIsAuthenticated, isUser, checkIsAuthenticated } =
  useContext<any>(AuthContext);

  function getCookieValue(cookieName:any) {
    const cookies = document.cookie.split("; ");

    for (let i = 0; i < cookies.length; i++) {
      const [name, value] = cookies[i].split("=");

      if (name === cookieName) {
        return decodeURIComponent(value);
      }
    }

    return undefined; // Cookie not found
  }

  const token = getCookieValue("_auth");

  const navigate = useNavigate()
  useEffect(() => {
    if(token) {
      setIsAuthenticated(true)
      console.log("isAuthenticated: ", isAuthenticated)
    } else{
      setIsAuthenticated(false)
    }
    checkIsAuthenticated()
  }, [])
  return (
    <>
      <GlobalStylesComponent />
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/event" element={<EventPage />} />
        <Route path="/signup" element={<SignInPage/>}/>
        <Route path="login" element={<LoginPage/>} />
        <Route path="/user" element={<RequireAuth loginPath="/login"><UserPage /></RequireAuth> } /> 
        <Route path="/add-event" element={<AddEventPage />} />
      </Routes>
      <FooterComponent />
    </>
  );
}

export default App;
