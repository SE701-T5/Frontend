import { Routes, Route } from "react-router-dom";
import "./App.css";
import ComponentsTesting from "./pages/componentsTesting/ComponentsTesting";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/ComponentsTesting" element={<ComponentsTesting />} />
    </Routes>
  );
}

export default App;
