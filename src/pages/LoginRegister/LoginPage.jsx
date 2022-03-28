import React, { useContext } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthProvider";
import LoginForm from "./LoginForm";
import Homepage from "../Homepage";
import { useMutation } from "../../hooks/useApi";
export default function LoginPage() {
  const navigate = useNavigate();
  const userLogin = useMutation("/users/login", {
    method: "post",
  });
  const { userDetails, login, authorized } = useContext(AuthContext);

  const LoginFormDetail = async (details) => {
    const loginDetails = {
      data: {
        email: details.email,
        plaintextPassword: details.password,
      },
    };
    try {
      const response = await userLogin(loginDetails);
      console.log(response);
      localStorage.setItem("id", response.userID);
      localStorage.setItem("email", details.email);
      localStorage.setItem("authToken", response.authToken);
      login();
      navigate("/homepage");
    } catch (error) {
      console.log("failed to login");
    }
    // const foundUser = userDetails.find((user) => user.email === details.email);
    // if (foundUser) {
    //   if (details.password === foundUser.password) {
    //     console.log("loged in");
    //     alert("Logged in!");
    //     login();
    //     navigate("/homepage");
    //   } else {
    //     console.log("Your password is wrong!");
    //     alert("Your password is wrong!");
    //   }
    // } else {
    //   //console.log("No such account, Please register first!");
    //   alert("No such account, Please register first!");
    // }
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
