import React, { useState } from "react";
import "./LoginPage.css";

export default function RegisterForm({ Register }) {
  const [Details, setDetails] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
  });

  const { username, email, password1, password2 } = Details;

  const handleChange = (e) => {
    setDetails({
      ...Details,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Register(Details);
  };
  return (
    <>
      <div className="LoginRegister_container" id="LoginRegister_container">
        <div className="LoginRegisterForm_container sign-up-container">
          <form className="LoginRegisterForm_form" onSubmit={handleSubmit}>
            <h2 className="h1 text-center mb-4">Create Account</h2>

            <span className="LoginRegisterForm_span">
              {" "}
              use your email for registration
            </span>
            <input
              className="LoginRegisterForm_input"
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
            <input
              className="LoginRegisterForm_input"
              type="username"
              placeholder="Username"
              name="username"
              value={username}
              onChange={handleChange}
              required
            />
            <input
              className="LoginRegisterForm_input"
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
              className="LoginRegisterForm_input"
              type="password"
              placeholder="Confirm Password"
              name="password2"
              value={password2}
              onChange={handleChange}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              required
            />
            <a className="LoginRegisterForm_a" href="/homepage">
              <button className="LoginRegisterForm_button" type="submit">
                Sign Up
              </button>
            </a>
          </form>
        </div>

        <div className="LoginRegisterForm_overlay-container-left">
          <div className="LoginRegisterForm_overlay-ll">
            <div className="LoginRegisterForm_overlay-panel LoginRegisterForm_overlay-left">
              <h1 className="LoginRegisterForm_h1">Welcome Back!</h1>
              <p className="LoginRegisterForm_p">
                Please login with your personal details and start journey with
                us
              </p>
              <a className="LoginRegisterForm_a" href="/login">
                <button className="LoginRegisterForm_button ghost" id="login">
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
