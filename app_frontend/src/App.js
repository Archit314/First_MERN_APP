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

function App() {
  const [isLoggedIn, SetIsLoggedIn] = useState(false);

  const login = (token) => {
    localStorage.setItem('access_token', token)
    SetIsLoggedIn(true);
  };
  const logout = () => {
    localStorage.clear()
    SetIsLoggedIn(false);
  };

  useEffect(() => {
    const token = localStorage.getItem('access_token');

    if (token) {
      SetIsLoggedIn(true);
    } else {
      SetIsLoggedIn(false);
    }
  }, [])
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
