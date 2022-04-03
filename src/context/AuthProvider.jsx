import React from "react";
import { createContext, useState, useEffect } from "react";
const LOCAL_STORAGE_KEY = "userDetails";

const AuthContext = createContext({
  login: () => {},
  logout: () => {},
  authorized: false,
});
export const AuthProvider = ({ children }) => {
  const [authorized, setAuthorized] = useState(false);

  const login = () => {
    setAuthorized(true);
  };

  const logout = () => {
    setAuthorized(false);
  };

  useEffect(() => {
    const { email, authToken } = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY) ?? "{}"
    );
    if (email && authToken) {
      setAuthorized(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, authorized }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
