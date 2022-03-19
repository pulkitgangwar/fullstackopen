import React from "react";
import Person from "./Person";

const People = ({ persons }) => {
  return (
    <>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <Person key={person.id} person={person} />
      ))}
    </>
  );
};

export default People;
