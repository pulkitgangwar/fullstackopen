import React,{useState} from "react";
import Country from './Country';

const Countries = ({ countries }) => {
  const [currentCountry, setCurrentCountry] = useState(null);

  return (
    <div>
      {currentCountry ? <Country country={currentCountry} /> : null}
      {countries.map((country) => (
        <div key={country.name.common}>
          <p>{country.name.common}</p>
          <button
            onClick={() => {
              setCurrentCountry(country);
            }}
          >
            show
          </button>
        </div>
      ))}
    </div>
  );
};

export default Countries;
