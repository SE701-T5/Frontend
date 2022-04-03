import { Divider } from "@mui/material";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import { useMutation } from "../../hooks/useApi";

export default function ForgotPasswordPage() {
  const createRestPassword = useMutation('/users/', {
    method: 'patch',
  })

  const inputEl = useRef(null);

  async function handleResetPassword(email) {
    await createRestPassword({
      body: { 
         email,
      }
    });
  }

  return (
    <div className="text-center m-5-auto ">
      <h2>Reset your password</h2>
      <h5>
        Enter your email address and we will send you a link to reset your
        password
      </h5>
      <div>
        <p>
          <label id="reset_pass_lbl">Email address</label>
          <br />
          <input
            className="EmailInput"
            id='userEmail'
            type="email"
            name="email"
            ref={inputEl} 
            required
          />
        </p>
        <p>
          <button
            className="LoginRegisterForm_button"
            id="sub_btn"
            onClick = { () => {
              handleResetPassword(inputEl.current.value);
            }}>
            Send password reset email
          </button>
        </p>
      </div>
      <footer>
        <p className="LoginRegisterForm_p">
          First time? <Link to="/register">Create an account</Link>.
        </p>
      </footer>
    </div>
  );
}
