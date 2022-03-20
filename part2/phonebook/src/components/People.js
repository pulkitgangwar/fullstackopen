import React from "react";
import Person from "./Person";

const People = ({ persons, onDelete }) => {
  return (
    <>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <Person key={person.id} person={person} onDelete={onDelete} />
      ))}
    </>
  );
};

export default People;
