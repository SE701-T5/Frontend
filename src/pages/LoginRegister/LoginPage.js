import React, { useState, useContext } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import AuthContext from "../../context/AuthProvider";

export default function LoginPage() {
  const navigate = useNavigate();
  const [errors] = useState("");
  /*testing array
  const adminUser = {
    email: "admin@123",
    username: "admin",
    password: "12ABqwer",
  };*/
  const { userDetails } = useContext(AuthContext);

  const [isSuccess] = useState(false);

  const Login = (details) => {
    console.log(details);
    const founduser = userDetails.find((user) => user.email === details.email);
    if (founduser) {
      console.log(founduser);
      if (details.password === founduser.password1) {
        console.log("loged in");
        alert("Logged in!");
        navigate("/homepage");
      } else {
        console.log("Your password is wrong!");
        alert("Your password is wrong!");
      }
    } else {
      console.log("No such account, Please register first!");
      alert("No such account, Please register first!");
    }
  };
  return (
    <>
      {isSuccess ? (
        <div> Welcome</div>
      ) : (
        <LoginForm Login={Login} errors={errors} />
      )}
    </>
  );
}
