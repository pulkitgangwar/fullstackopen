import React from "react";

const Notification = ({ message }) => {
  return (
    <div
      style={{
        backgroundColor: "lightgreen",
        padding: "20px",
        border: "2px solid green",
        color: "white",
      }}
    >
      <h1>{message}</h1>
    </div>
  );
};

export default Notification;
