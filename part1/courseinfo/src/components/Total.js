import React from "react";

const Total = ({ parts }) => {
  return (
    <p>Number of exercises {parts.reduce((a, b) => a + b.exerciseNumber, 0)}</p>
  );
};

export default Total;
