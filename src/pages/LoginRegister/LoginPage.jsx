import React, { useContext } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthProvider";
import LoginForm from "./LoginForm";
import Homepage from "../Homepage";
export default function LoginPage() {
  const navigate = useNavigate();

  const { userDetails, login, authorized } = useContext(AuthContext);

  const LoginFormDetail = (details) => {
    const founduser = userDetails.find((user) => user.email === details.email);
    if (founduser) {
      if (details.password === founduser.password) {
        console.log("loged in");
        alert("Logged in!");
        login();
        navigate("/homepage");
      } else {
        console.log("Your password is wrong!");
        alert("Your password is wrong!");
      }
    } else {
      //console.log("No such account, Please register first!");
      alert("No such account, Please register first!");
    }
  };
  return (
    <>
      {authorized ? (
        <div>
          {" "}
          <Homepage />
        </div>
      ) : (
        <LoginForm LoginFormDetail={LoginFormDetail} />
      )}
    </>
  );
}
