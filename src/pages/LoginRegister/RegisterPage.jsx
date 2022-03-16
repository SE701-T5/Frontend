import React, { useContext } from "react";
import "./LoginPage.css";
import AuthContext from "../../context/AuthProvider";
import RegisterForm from "./RegisterForm";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const navigate = useNavigate();

  const { userDetails, setUserDetails } = useContext(AuthContext);

  const Register = (details) => {
    console.log(details);
    console.log(userDetails);
    if (!userDetails.find((user) => user.email === details.email)) {
      if (details.password1 === details.password2) {
        console.log("Registered successfully!");
        console.log(userDetails);
        setUserDetails((preuserDetails) => [
          ...preuserDetails,
          {
            email: details.email,
            username: details.username,
            password: details.password1,
          },
        ]);
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

  return <>{<RegisterForm Register={Register} />}</>;
}
