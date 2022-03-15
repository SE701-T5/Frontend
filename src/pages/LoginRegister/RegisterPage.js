import React, { useState, useContext } from "react";
import "./LoginPage.css";
import AuthContext from "../../context/AuthProvider";
import RegisterForm from "./RegisterForm";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState("");
  const { userDetails, setUserDetails } = useContext(AuthContext);
  /*testing array
  const Users = [
    {
      email: "admin@123",
      username: "admin",
      password: "12ABqwer",
    },
    { email: "aa@123", username: "scsf", password: "12ABqwer" },
  ];*/

  const [isSuccess, setIsSuccess] = useState(false);

  const Register = (details) => {
    console.log(userDetails);
    console.log(details);
    if (!userDetails.find((user) => user.email === details.email)) {
      if (details.password1 === details.password2) {
        console.log("Registered successfully!");
        console.log(userDetails);
        alert("Registered successfully! Please Log in!");
        navigate("/login");
      } else {
        console.log("Your password doesn't match!");
        alert("Your password doesn't match!");
      }
    } else {
      console.log("This email has been registered!");
      alert("This email has been registered!");
    }
  };

  return (
    <>
      {isSuccess ? (
        <div>
          <h1>Registered Successfully!</h1>
          <br />
          <a href="/login">
            <button id="login">Log in</button>
          </a>
        </div>
      ) : (
        <RegisterForm
          Register={Register}
          errors={errors}
          userDetails={userDetails}
        />
      )}
    </>
  );
}
