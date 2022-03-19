import React from "react";

const Button = ({ onButtonClick, children }) => {
  return <button onClick={onButtonClick}>{children}</button>;
};

export default Button;
