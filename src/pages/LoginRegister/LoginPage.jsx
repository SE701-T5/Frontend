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
