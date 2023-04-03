import React, { useState } from "react";
import "./App.css";
import Card from "react-bootstrap/Card";
import Users from "./Users";
import "./index.css";

import Navbar from "./components/navbar";

function App() {
  return (
    <div>
      <section className="App">
        <Navbar />
        <div className="App">
          <div>ADD SOMETHING TO THE LIST</div>
          <input type="text" />
        </div>
        <div className="Card">
          <Users />;
        </div>
      </section>
    </div>
  );
}

export default App;
