import React, { useContext, useState } from "react";
import { authContext } from "../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Toast from "../Toast/Toast";
import "../../App.css"
import "./Auth.css"

export default function Auth() {
  const auth = useContext(authContext);

  const navigate = useNavigate();

  const [isSignup, SetIsSignup] = useState(false);
  const formData = {
    email: "",
    password: "",
    name: "",
    mobileNumber: "",
  };

  const [data, SetData] = useState(formData);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    console.log(name);
    console.log(value);
    SetData({ ...data, [name]: value });
  };

  const [showToastMessage, SetShowToastMessage] = useState(false)
  const [errorMessage, SetErrorMessage] = useState('')

  const handleClose = () => {
    SetShowToastMessage(false)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSignup) {
      const postData = {
        email: data.email,
        password: data.password,
      };

      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        url:
          process.env.REACT_APP_PROD_API_BASE_URL + `/v1/api/auth/user/sign-in`,
        data: postData,
      };

      try {
        const response = await axios(config);

        if (response && response.data.status === 200) {
          console.log(`User sign-in successfully`);
          SetShowToastMessage(true)
          SetErrorMessage(response.data.message)
          auth.login()
          navigate("/");
        } else {
          console.log(`User sign-in failed`);
        }
      } catch (error) {
        console.log(error);

        if (error.response.data.status !== 200) {
          SetShowToastMessage(true)
          SetErrorMessage(error.response.data.message)
        }
      }
    } else {
      const postData = {
        email: data.email,
        password: data.password,
        name: data.name,
        mobileNumber: data.mobileNumber,
      };

      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        url:
          process.env.REACT_APP_PROD_API_BASE_URL + `/v1/api/auth/user/sign-up`,
        data: postData,
      };
      console.log(config);

      try {
        const response = await axios(config);

        if (response && response.data.status === 200) {
          console.log(`User sign-up successfully`);
          SetShowToastMessage(true)
          SetErrorMessage(response.data.message)
          auth.login();
          navigate("/home");
        } else {
          console.log(`User sign-up failed`);
        }
      } catch (error) {
        if (error.response.data.status !== 200) {
          SetShowToastMessage(true)
          SetErrorMessage(error.response.data.message)
        }
      }
    }
  };

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="w-100 p-4 border rounded app-secondary-color auth-card" style={{ maxWidth: "500px" }}>
          <form onSubmit={handleSubmit}>
            <h2 className="mb-3">{isSignup ? "Sign In" : "Sing Up"}</h2>
            <div className="mb-3">
              <label htmlFor="staticEmail" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="staticEmail"
                name="email"
                value={data.email}
                onChange={handleOnChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                name="password"
                value={data.password}
                onChange={handleOnChange}
              />
            </div>
            {!isSignup && (
              <div className="mb-3">
                <label htmlFor="inputName" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  name="name"
                  value={data.name}
                  onChange={handleOnChange}
                />
              </div>
            )}
            {!isSignup && (
              <div className="mb-3">
                <label
                  htmlFor="inputPhoneNumber"
                  className="form-label"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="inputPhoneNumber"
                  name="mobileNumber"
                  value={data.mobileNumber}
                  onChange={handleOnChange}
                />
              </div>
            )}
            <button type="submit" className="btn app-button">
              {isSignup ? "Sign-in" : "Sign-up"}
            </button>
            <p>
              {isSignup ? "Don't have an account?" : "Already have an account?"}{" "}
              <Link
                type="button"
                className="btn app-button"
                onClick={() => {
                  SetIsSignup(!isSignup);
                }}
              >
                {isSignup ? "Sign-up" : "Sign-in"}
              </Link>
            </p>
          </form>
        </div>
      </div >
      {showToastMessage && <Toast errorMessage={errorMessage} onClose={handleClose} />
      }
    </>
  );
}
