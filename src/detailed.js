import React from "react";
import App from "./App";
import { useLocation } from "react-router-dom";

const Detailed = ({ index }) => {
  const location = useLocation();
  const { index } = location.state;

  return (
    <div className="App">
      <h1> welcome to {index + 1} page</h1>
    </div>
  );
};

export default Detailed;
