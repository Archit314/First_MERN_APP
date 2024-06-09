import React, { useContext, useState } from "react";
import { authContext } from "../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal";
import "./NavbarCss.css"

export default function Navbar() {
  const auth = useContext(authContext)

  const [showModal, SetShowModal] = useState(false)
  const navigate = useNavigate()

  const handleModal = () => {
    if (auth.isLoggedIn) {
      console.log(`open modal`);
      SetShowModal(true)
    }
  }
  const handleLogout = () => {
    auth.logout()
    navigate('/')
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg web-navbar">
        <div className="container-fluid">
          <a className="navbar-brand web-navbar-link" href="/">
            Smart DSA
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item active">
                <Link className="nav-link web-navbar-link" to="/">
                  Home
                </Link>
              </li>
              {auth.isLoggedIn && <li className="nav-item">
                <Link className="nav-link web-navbar-link" aria-current="page" to="/">
                  Concept
                </Link>
              </li>}
              {auth.isLoggedIn && <li className="nav-item">
                <Link className="nav-link web-navbar-link" to="/user/profile">
                  Profile
                </Link>
              </li>}
            </ul>
            {!auth.isLoggedIn && <Link type="button" className="btn btn-light" to={'user/auth'}>
              Authenticate
            </Link>}
            {auth.isLoggedIn && <Link type="button" className="btn btn-light" onClick={handleModal}>
              Log-out
            </Link>}
          </div>
        </div>
      </nav>
      {/* {showModal && <Modal modalAction={showModal}/>} */}
      {showModal && <Modal modalAction={handleLogout} onClose={() => SetShowModal(false)} heading="Logout your account" isAForm={false} />}
    </div>

  );
}
