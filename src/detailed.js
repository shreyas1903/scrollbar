import React from "react";
import App from "./App";
import { useLocation, useNavigate } from "react-router-dom";

const Detailed = () => {
  const location = useLocation();
  console.log(location.state);
  const navigate = useNavigate();

  const goback = () => {
    navigate(-1);
  };
  return (
    <div className="App">
      <h1> welcome to {location.state.index} page</h1>
      <button type="button" onClick={goback}>
        Go back
      </button>
    </div>
  );
};

export default Detailed;
