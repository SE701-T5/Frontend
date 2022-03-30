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

  const { userDetails, setUserDetails } = useContext(AuthContext);
  const userSignUp = useMutation("/users", {
    method: "post",
  });

  const Register = async (details) => {
    if (!userDetails.find((user) => user.email === details.email)) {
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
          const response = await userSignUp(signUpDetails);
          const data = await response.userData;
          if (data.status === 201) {
            setUserDetails((preuserDetails) => [
              ...preuserDetails,
              {
                email: details.email,
                username: details.username,
                password: details.password1,
              },
            ]);
            toast({
              position: "bottom-left",
              render: () => (
                <Box color="white" p={9} bg="#19467bf7" borderRadius={9}>
                  We've created your account for you
                </Box>
              ),
            });
          }
        } catch (error) {
          console.log("failed to sign up");
          toast({
            position: "bottom-left",
            render: () => (
              <Box color="white" p={9} bg="#19467bf7" borderRadius={9}>
                Failed to sign up
              </Box>
            ),
          });
        }
      } else {
        console.log("Your password doesn't match!");
        toast({
          position: "bottom-left",
          render: () => (
            <Box color="white" p={9} bg="#19467bf7" borderRadius={9}>
              Your password doesn't match
            </Box>
          ),
        });
      }
    } else {
      console.log("This email has been registered!");
      toast({
        position: "bottom-left",
        render: () => (
          <Box color="white" p={9} bg="#19467bf7" borderRadius={9}>
            This email has been registered
          </Box>
        ),
      });
    }
  };

  return <>{<RegisterForm Register={Register} />}</>;
}
