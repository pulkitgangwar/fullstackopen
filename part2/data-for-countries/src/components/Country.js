import React, { useEffect, useState } from "react";
import axios from "axios";

const Country = ({ country }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    const getWeather = async () => {
      try {
        const response =
          await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${country.latlng[0]}&lon=${country.latlng[1]}&appid=${process.env.REACT_APP_API_KEY}
        `);

        setWeather({
          temperature: response.data.main.temp,
          weather: response.data.weather[0].main,
          icon: response.data.weather[0].icon,
          wind: response.data.wind.speed,
        });
        setError("");
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getWeather();
  }, [country.latlng]);

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
        {loading ? (
          <h1>Loading weather..</h1>
        ) : !loading && error ? (
          <h1>{error}</h1>
        ) : (
          <div>
            <h2>Weather in {country.name.common}</h2>
            <p>Temperature: {weather.temperature}</p>
            <img
              src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
              alt={`${country.name.common} weather icon`}
            />
            <p>Wind: {weather.wind} m/s</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Country;
