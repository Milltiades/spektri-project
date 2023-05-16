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

function App() {
  return (
    <>
      <GlobalStylesComponent />
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/event" element={<EventPage />} />
        <Route path="/registration" element={<SignInPage/>}/>
        <Route path="login" element={<LoginPage/>} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/add-event" element={<AddEventPage />} />
      </Routes>
      <FooterComponent />
    </>
  );
}

export default App;
