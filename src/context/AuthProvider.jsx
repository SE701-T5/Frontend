import React from "react";
import { createContext, useState, useEffect } from "react";
const LOCAL_STORAGE_KEY = "authUsers";

const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
  const [authorized, setAuthorized] = useState(false);
  const [userDetails, setUserDetails] = useState([
    {
      email: "admin@123",
      username: "admin",
      password: "12ABqwer",
    },
    {
      email: "aa@123",
      username: "scsf",
      password: "12ABqwer",
    },
  ]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedUsers) setUserDetails(storedUsers);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userDetails));
  }, [userDetails]);
  const login = () => {
    setAuthorized(true);
  };
  const logout = () => {
    setAuthorized(false);
  };

  return (
    <AuthContext.Provider
      value={{ userDetails, setUserDetails, login, logout, authorized }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
