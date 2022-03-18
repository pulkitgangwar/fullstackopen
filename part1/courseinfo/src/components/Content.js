import React from "react";
import Part from "./Part";

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part, index) => (
        <Part key={`Content ${index}`} part={part} />
      ))}
    </>
  );
};

export default Content;
