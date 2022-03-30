import React, { useContext } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthProvider";
import LoginForm from "./LoginForm";
import Homepage from "../Homepage";
import { useMutation } from "../../hooks/useApi";
import { Box, useToast } from "@chakra-ui/react";
export default function LoginPage() {
  const navigate = useNavigate();
  const toast = useToast();
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
      toast({
        position: "bottom-left",
        render: () => (
          <Box color="white" p={9} bg="#19467bf7" borderRadius={9}>
            Failed to sign in
          </Box>
        ),
      });
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
