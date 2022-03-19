import React from "react";

const Person = ({ person: { name, number } }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{number}</h2>
    </div>
  );
};

export default Person;
