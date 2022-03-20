import React from "react";
import Country from "./Country";
import Countries from "./Countries";

const Result = ({ countries }) => {
  if (countries.length > 10) {
    return (
      <div>
        <p>Too many matches, specify another filter</p>
      </div>
    );
  } else if (countries.length === 1) {
    const country = countries[0];

    return <Country country={country} />;
  }

  return <Countries countries={countries} />;
};

export default Result;
