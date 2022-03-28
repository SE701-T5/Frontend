import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import { useMutation } from "../../hooks/useApi";

export default function ForgotPasswordPage() {
  
  const id = localStorage.getItem('id');
  const email = localStorage.getItem('email');

  const createRestPassword = useMutation('/api/v1/users/', {
    method: 'patch',
    pathParams: { id: id ?? '' },
  })

  async function handleResetPassword(email) {
    await createRestPassword({
      body: {
        email: 'admin@123',
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
      <form action="/login">
        <p>
          <label id="reset_pass_lbl">Email address</label>
          <br />
          <input
            className="EmailInput"
            id='userEmail'
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
            onClick = { () => {
              const email = document.getElementsByClassName('userEmail').value
              handleResetPassword(email);
            }}>
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
