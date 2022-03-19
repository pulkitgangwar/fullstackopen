import React, { useEffect, useState } from "react";
import axios from "axios";

const SingleCountry = ({ country }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [weather, setWeather] = useState(null);
  console.log(country);
  useEffect(() => {
    const getWeather = async () => {
      try {
        const response =
          await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${country.latlng[0]}&lon=${country.latlng[1]}&appid=${process.env.REACT_APP_API_KEY}
        `);

        console.log(response.data);
        setError("");
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getWeather();
  }, []);

  const renderWeather = () => {};

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital.map((cap) => cap).join(",")}</p>

      <h2>Languages</h2>
      {Object.values(country.languages).map((lang) => (
        <li key={lang}>{lang}</li>
      ))}

      <img src={country.flags.png} alt={`${country.name.common} flag`} />

      <div>
        {loading ? <h1>Loading weather..</h1> : null}
        {!loading && error ? <h1>{error}</h1> : null}
      </div>
    </div>
  );
};

const Countries = ({ countries }) => {
  const [currentCountry, setCurrentCountry] = useState(null);

  return (
    <div>
      {currentCountry ? <SingleCountry country={currentCountry} /> : null}
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

const Result = ({ countries }) => {
  if (countries.length > 10) {
    return (
      <div>
        <p>Too many matches, specify another filter</p>
      </div>
    );
  } else if (countries.length === 1) {
    const country = countries[0];

    return <SingleCountry country={country} />;
  }

  return <Countries countries={countries} />;
};

const App = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");

        setCountries(response.data);
        setError("");
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getCountries();
  }, []);

  const handleCountryChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e) => {
    if (!search) {
      return;
    }

    const searchedCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(search)
    );

    setResult(searchedCountries);
  };

  if (loading) {
    return <h1>Loading ...</h1>;
  }

  if (!loading && error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={handleCountryChange}
        onKeyUp={handleSearch}
        placeholder="Search a country"
      />

      {result.length ? <Result countries={result} /> : null}
    </div>
  );
};

export default App;
