import React, { useState} from "react";

import "./LoginPage.css";


export default function RegisterForm({ errors, Register }) {
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
  });

  const { username, email, password1, password2 } = userDetails;

  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Register(userDetails);
  };
  return (
    <>
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form onSubmit={handleSubmit}>
            <h2 className="h1 text-center mb-4">Create Account</h2>
            <div className="social-container">
              {/*<a href="#" className="social">
                <GoogleIcon />
              </a>
              <a href="#" className="social">
                <FacebookIcon />
              </a>*/}
            </div>

            <span> use your email for registration</span>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
            <input
              type="username"
              placeholder="Username"
              name="username"
              value={username}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              placeholder="Password"
              name="password1"
              value={password1}
              onChange={handleChange}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              value={password2}
              onChange={handleChange}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              required
            />
            <a href="/homepage">
              <button type="submit">Sign Up</button>
            </a>
          </form>
        </div>

        <div className="overlay-container-left">
          <div className="overlay-ll">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                Please login with your personal details and start journey with
                us
              </p>
              <a href="/login">
                <button className="ghost" id="login">
                  Log in
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
