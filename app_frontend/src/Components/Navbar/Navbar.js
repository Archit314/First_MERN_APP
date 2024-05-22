import React, { useContext } from "react";
import { authContext } from "../Context/AuthContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const auth = useContext(authContext)
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Navbar
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
              {auth.isLoggedIn && <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>}
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Menu
                </Link>
              </li>
            </ul>
            <Link type="button" className="btn btn-light" to={'user/auth'} onClick={auth.logout}>
              {!auth.isLoggedIn? 'Authenticate': 'Logout'}
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
