import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import LandingPage from "./Components/NavLinks/LandingPage";
import { authContext } from "./Components/Context/AuthContext";
import { useState } from "react";
import Auth from "./Components/Auth/Auth";
import Home from "./Components/NavLinks/Home";

function App() {
  const [isLoggedIn, SetIsLoggedIn] = useState(false);

  const login = () => {
    SetIsLoggedIn(true);
  };
  const logout = () => {
    console.log("false");
    SetIsLoggedIn(false);
  };
  return (
    <>
      <authContext.Provider
        value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
      >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/user/auth" element={<Auth />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </authContext.Provider>
    </>
  );
}

export default App;
