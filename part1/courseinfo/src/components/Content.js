import React from "react";
import Part from "./Part";

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <Part key={`Content ${part.id}`} part={part} />
      ))}
    </>
  );
};

export default Content;
