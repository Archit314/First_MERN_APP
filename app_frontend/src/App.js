import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import LandingPage from "./Components/NavLinks/LandingPage";
import { authContext } from "./Components/Context/AuthContext";
import { useState } from "react";

function App() {
  const [isLoggedIn, SetIsLoggedIn] = useState(false);

  const login = () => {
    SetIsLoggedIn(true);
  };
  const logout = () => {
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
          </Routes>
        </BrowserRouter>
      </authContext.Provider>
    </>
  );
}

export default App;
