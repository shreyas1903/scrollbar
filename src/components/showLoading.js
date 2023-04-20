import React from "react";

const Show = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 10,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgb(255, 255, 255)",
        zIndex: 9999,
      }}
    >
      <h1>Loading...</h1>
    </div>
  );
};

export default Show;
