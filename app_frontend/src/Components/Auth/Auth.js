import React, { useContext, useState } from "react";
import { authContext } from "../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Auth() {
  const auth = useContext(authContext);

  const navigate = useNavigate();

  const [isSignup, SetIsSignup] = useState(false);
  const formData = {
    email: "Enter your email",
    password: "Enter your password",
    name: "Enter your name",
    mobileNumber: "Enter your phone number",
  };

  const [data, SetData] = useState(formData);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    console.log(name);
    console.log(value);
    SetData({ ...data, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

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

      if (response.status !== 200) {
        console.log(`User sign-up successfully`);
      } else {
        console.log(`User sign-up failed`);
      }
    } catch (error) {}
    auth.login();
    navigate("/home");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="w-50 p-4 border rounded">
        <form onSubmit={handleSubmit}>
          <div className="mb-3 row">
            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="staticEmail"
                name="email"
                value={data.email}
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                name="password"
                value={data.password}
                onChange={handleOnChange}
              />
            </div>
          </div>
          {!isSignup && (
            <div className="mb-3 row">
              <label htmlFor="inputName" className="col-sm-2 col-form-label">
                Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  name="name"
                  value={data.name}
                  onChange={handleOnChange}
                />
              </div>
            </div>
          )}
          {!isSignup && (
            <div className="mb-3 row">
              <label
                htmlFor="inputPhoneNumber"
                className="col-sm-2 col-form-label"
              >
                Phone Number
              </label>
              <div className="col-sm-10">
                <input
                  type="tel"
                  className="form-control"
                  id="inputPhoneNumber"
                  name="mobileNumber"
                  value={data.mobileNumber}
                  onChange={handleOnChange}
                />
              </div>
            </div>
          )}
          <button type="submit" className="btn btn-light">
            {isSignup ? "Sign-in" : "Sign-up"}
          </button>
          <p>
            {isSignup ? "Don't have an account?" : "Already have an account?"}{" "}
            <Link
              type="button"
              className="btn btn-light"
              onClick={() => {
                SetIsSignup(!isSignup);
              }}
            >
              {isSignup ? "Sign-up" : "Sign-in"}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
