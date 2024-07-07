import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
// import LandingPage from "./Components/NavLinks/LandingPage";
import { authContext } from "./Components/Context/AuthContext";
import { useEffect, useState } from "react";
import Auth from "./Components/Auth/Auth";
import Home from "./Components/NavLinks/Home";
import UserProfile from "./Components/User/UserProfile";
import ItemDescription from "./Components/NavLinks/ItemDescription";
import {jwtDecode} from "jwt-decode"

function App() {
  const [isLoggedIn, SetIsLoggedIn] = useState(false);

  const login = (token) => {

    const decodedToken = jwtDecode(token)
    let expirationTime = (decodedToken.exp * 1000);

    localStorage.setItem('session_expiration_time', expirationTime)
    localStorage.setItem('access_token', token)
    SetIsLoggedIn(true);
  };
  const logout = () => {
    localStorage.clear()
    SetIsLoggedIn(false);
  };

  useEffect(() => {
    const checkTokenExpiration = () => {
      const token = localStorage.getItem('access_token');
      if (token) {
        const currentTime = Date.now();
        const expirationTime = localStorage.getItem('session_expiration_time');
        
        if (currentTime > expirationTime) {
          logout();
        } else {
          SetIsLoggedIn(true);
        }
      } else {
        SetIsLoggedIn(false);
      }
    };

    // Check token expiration on component mount
    checkTokenExpiration();

    // Set up interval to check token expiration periodically
    const interval = setInterval(() => {
      checkTokenExpiration();
    }, 1000 * 60 * 30); // Check every minute

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <authContext.Provider
        value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
      >
        <BrowserRouter>
          <Navbar />
          <Routes>
            {/* <Route path="/" element={<LandingPage />} /> */}
            <Route path="/user/auth" element={<Auth />} />
            <Route path="/" element={<Home />} />
            <Route path="/user/profile" element={<UserProfile />} />
            <Route path="/item/description" element={<ItemDescription />} />
          </Routes>
        </BrowserRouter>
      </authContext.Provider>
    </>
  );
}

export default App;
