import React from "react";

const Person = ({ person: { name, phoneNumber } }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{phoneNumber}</h2>
    </div>
  );
};

export default Person;
