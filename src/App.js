import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ComponentsTesting from "./pages/componentsTesting/ComponentsTesting";
import Homepage from "./pages/Homepage";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
   <>
    <NavBar />
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/ComponentsTesting" element={<ComponentsTesting />} />
    </Routes>
   </>
  );
}

export default App;
