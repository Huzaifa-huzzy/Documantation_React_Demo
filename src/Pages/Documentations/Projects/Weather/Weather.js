import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Weather.css';

export default function WeatherProject() {
  const [city, setCity] = useState('Karachi');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const apiKey = 'ce413f14860b4205953205934240311';


  const fetchWeatherData = async (selectedCity) => {
    try {
      const response = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${selectedCity}`
      );
      setWeather({
        temperature: response.data.current.temp_c,
        description: response.data.current.condition.text,
        humidity: response.data.current.humidity,
        icon: response.data.current.condition.icon,
      });
      setError(null);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError("Could not fetch weather data. Please try again.");
      setWeather(null);
    }
  };


  useEffect(() => {
    fetchWeatherData(city);
  }, [city]);


  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="weather-project">
      <h2>Weather in Pakistan</h2>
      <select value={city} onChange={handleCityChange}>
        <option value="Karachi">Karachi</option>
        <option value="Lahore">Lahore</option>
        <option value="Peshawar">Peshawar</option>
        <option value="Islamabad">Islamabad</option>
      </select>

      {error ? (
        <p className="error">{error}</p>
      ) : weather ? (
        <div className="weather-info">
          <h3>{city}</h3>
          <img src={weather.icon} alt={weather.description} />
          <p>Temperature: {weather.temperature}°C</p>
          <p>Weather: {weather.description}</p>
          <p>Humidity: {weather.humidity}%</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}
