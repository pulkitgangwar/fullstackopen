import React from "react";

const Person = ({ person: { name, number, id }, onDelete }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{number}</h2>
      <button
        onClick={() => {
          onDelete(id);
        }}
      >
        delete record
      </button>
    </div>
  );
};

export default Person;
