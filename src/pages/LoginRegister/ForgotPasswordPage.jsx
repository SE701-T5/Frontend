import React from "react";
import { Link } from "react-router-dom";

import "../../App.css";

export default function ForgotPasswordPage() {
  return (
    <div className="text-center m-5-auto ">
      <h2>Reset your password</h2>
      <h5>
        Enter your email address and we will send you a link to reset your
        password
      </h5>
      <form action="/login">
        <p>
          <label id="reset_pass_lbl">Email address</label>
          <br />
          <input
            className="LoginRegisterForm_input"
            type="email"
            name="email"
            required
          />
        </p>
        <p>
          <button
            className="LoginRegisterForm_button"
            id="sub_btn"
            type="submit"
          >
            Send password reset email
          </button>
        </p>
      </form>
      <footer>
        <p className="LoginRegisterForm_p">
          First time? <Link to="/register">Create an account</Link>.
        </p>
      </footer>
    </div>
  );
}
