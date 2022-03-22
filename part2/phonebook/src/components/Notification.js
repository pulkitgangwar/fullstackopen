import React from "react";

const Notification = ({ message, type = "message" }) => {
  return (
    <div
      style={{
        backgroundColor: type === "message" ? `lightgreen` : `red`,
        padding: "20px",
        border:
          type === "message" ? `2px solid green` : `2px solid lightred`,
        color: "white",
      }}
    >
      <h1>{message}</h1>
    </div>
  );
};

export default Notification;
