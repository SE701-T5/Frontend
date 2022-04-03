import React, { useContext } from "react";
import "./LoginPage.css";
import AuthContext from "../../context/AuthProvider";
import RegisterForm from "./RegisterForm";
import { useNavigate } from "react-router-dom";
import { useMutation } from "../../hooks/useApi";
import { useToast, Box } from "@chakra-ui/react";

export default function RegisterPage() {
  const navigate = useNavigate();
  const toast = useToast();

  const userSignUp = useMutation("/users", {
    method: "post",
  });

  const Register = async (details) => {
    if (details.password1 === details.password2) {
      const signUpDetails = {
        data: {
          username: details.username,
          displayName: details.username,
          email: details.email,
          plaintextPassword: details.password1,
        },
      };
      try {
        await userSignUp(signUpDetails);

        toast({
          position: "bottom-left",
          render: () => (
            <Box color="white" p={9} bg="#19467bf7" borderRadius={9}>
              We've created your account for you
            </Box>
          ),
        });
        navigate("/login");
      } catch (error) {
        toast({
          position: "bottom-left",
          render: () => (
            <Box color="white" p={9} bg="#19467bf7" borderRadius={9}>
              Failed to sign up. This email may already be in use.
            </Box>
          ),
        });
      }
    } else {
      toast({
        position: "bottom-left",
        render: () => (
          <Box color="white" p={9} bg="#19467bf7" borderRadius={9}>
            Your password doesn't match
          </Box>
        ),
      });
    }
  };

  return <>{<RegisterForm Register={Register} />}</>;
}
