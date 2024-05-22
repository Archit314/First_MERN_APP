import React, { useContext, useState } from "react";
import { authContext } from "../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Auth() {
  const auth = useContext(authContext);

  const navigate = useNavigate()

  const [isSignup, SetIsSignup] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    auth.login()
    navigate('/home')
  }

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="w-50 p-4 border rounded">
        <form onSubmit={handleSubmit}>

          <div className="mb-3 row">
            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input type="text" readOnly className="form-control" id="staticEmail" value="Enter email" />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="inputPassword" value="Enter password"/>
            </div>
          </div>
          {!isSignup && <div className="mb-3 row">
            <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputName" value="Enter name"/>
            </div>
          </div>}
          {!isSignup && <div className="mb-3 row">
            <label htmlFor="inputPhoneNumber" className="col-sm-2 col-form-label">Phone Number</label>
            <div className="col-sm-10">
              <input type="tel" className="form-control" id="inputPhoneNumber" value="Enter phone number"/>
            </div>
          </div>}
          <button type="submit" className="btn btn-light">
            {isSignup ? 'Sign-in' : 'Sign-up'}
          </button>
          <p>{isSignup ? "Don't have an account?" : "Already have an account?"} <Link type="button" className="btn btn-light" onClick={() => { SetIsSignup(!isSignup) }}>
            {isSignup ? 'Sign-up' : "Sign-in"}
          </Link></p>
        </form>

      </div>
    </div>
  );
}
