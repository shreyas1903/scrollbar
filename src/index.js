import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import detailed from "./detailed";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/detailed" element={<Detailed />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
