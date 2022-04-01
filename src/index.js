import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import { CommunitiesContextProvider } from "./hooks/useCommunities";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <CommunitiesContextProvider>
        <Router>
          <App />
        </Router>
      </CommunitiesContextProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
