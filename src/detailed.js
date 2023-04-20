import React from "react";
import App from "./App";
import { useLocation, useNavigate } from "react-router-dom";

const Detailed = () => {
  const location = useLocation();
  const { data, id } = location.state;
  console.log(id);
  const navigate = useNavigate();

  const goback = () => {
    navigate(-1);
  };
  return (
    <div className="App" key={id}>
      <h1> welcome to {id} page</h1>
      <h4>Name : {data.name}</h4>
      <h4>Username : {data.username}</h4>
      <h3>Id: {id} </h3>
      <h4>address : {data.address.city}</h4>
      <h4>Street : {data.address.street}</h4>
      <h4>Zipcode : {data.address.zipcode}</h4>
      {/* <h4>name : {data.name}</h4> */}
      {/* <h1> {location.state.body} </h1> */}
      <button type="button" onClick={goback}>
        Go back
      </button>
    </div>
  );
};

export default Detailed;
