import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";

export default function LoginForm({ LoginFormDetail }) {
  const [Details, setDetails] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { email, password } = Details;
  const navigate = useNavigate();
  const handleChange = (e) => {
    setDetails({
      ...Details,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    LoginFormDetail(Details);
  };
  return (
    <div className="LoginRegisterForm_body">
      <div className="LoginRegister_container " id="LoginRegister_container">
        <div className="LoginRegisterForm_container sign-in-container">
          <form className="LoginRegisterForm_form" onSubmit={handleSubmit}>
            <h2 className="LoginRegisterForm_h2">Log in</h2>

            <span className="LoginRegisterForm_span">use your account</span>
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
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleChange}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              required
            />

            <Link
              to="/forgot-password"
              className="LoginRegisterForm_a text-body"
            >
              Forgot your password?
            </Link>

            <button className="LoginRegisterForm_button" type="submit">
              Sign In
            </button>
          </form>
        </div>

        <div className="LoginRegisterForm_overlay-container">
          <div className="LoginRegisterForm_overlay">
            <div className="LoginRegisterForm_overlay-panel LoginRegisterForm_overlay-right">
              <h1 className="LoginRegisterForm_h1">Hello, Friend!</h1>

              <p className="LoginRegisterForm_p">
                Enter your personal details and start journey with us
              </p>
              <button
                className="LoginRegisterForm_button ghost"
                id="signUp"
                onClick={() => {
                  navigate("/register");
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
