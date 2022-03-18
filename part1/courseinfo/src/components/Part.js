import React from "react";

const Part = ({ part }) => {
  return (
    <p>
      {part.partTitle} {part.exerciseNumber}
    </p>
  );
};

export default Part;
