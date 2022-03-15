import React from "react";
import { createContext, useState } from "react";


const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState([
    {
      email: "admin@123",
      username: "admin",
      password1: "12ABqwer",
      password2: "12ABqwer",
    },
    {
      email: "aa@123",
      username: "scsf",
      password1: "12ABqwer",
      password2: "12ABqwer",
    },
  ]);
  /*
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedUsers) setUserDetails(storedUsers);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(setUserDetails));
  }, [userDetails]);
  */
  return (
    <AuthContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
