import React from "react";
import { useNavigate } from "react-router-dom";

export default function CommunitiesPage() {
  let navigate = useNavigate();
  const routeChange = () => {
    navigate("/NewCommunity");
  };
  return (
    <div>
      <button onClick={routeChange}>Create a new Community</button>
    </div>
  );
}
