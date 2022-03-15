import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import "./LoginPage.css";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function LoginForm({ errors, Login }) {
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = userDetails;

  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Login(userDetails);

    /*
    if (email && password1) {
      axios
        .post(`${process.env.REACT_APP_API_URL}/login`, {
          username,
          email,
          password: password1,
        })
        .then((res) => {
          setUserDetails({
            ...userDetails,
            username: "",
            email: "",
            password1: "",
          });
        })
        .catch((err) => {
          setUserDetails({
            ...userDetails,
            username: "",
            email: "",
            password1: "",
          });
          setErrors(err.response);
        });
      navigate("/homepage");
    } else {
      setErrors("Please fill all fields");
      console.log(errors);
    }*/
  };
  return (
    <>
      <div className="container" id="container">
        <div className="form-container sign-in-container">
          <form onSubmit={handleSubmit}>
            <h2 className="h1 text-center mb-4">Log in</h2>
            <div className="social-container">
              {/*
              <a href="#" className="social">
                <GoogleIcon />
              </a>
              <a href="#" className="social">
                <FacebookIcon />
              </a>
              */}
            </div>

            <span>use your account</span>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleChange}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              required
            />

            <a href="/forgot-password" className="text-body">
              Forgot your password?
            </a>

            <button type="submit">Sign In</button>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>

              <p>Enter your personal details and start journey with us</p>
              <a href="/register">
                <button className="ghost" id="signUp">
                  Sign Up
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
