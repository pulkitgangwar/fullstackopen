import React, { useEffect, useState } from "react";
import axios from "axios";
import Result from "./components/Result";

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
