//WeatherApp.js
import React, { useState } from 'react';

const WeatherApp = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key (6091fd35128a27fb8ba6c882ce8fdbe6)

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location},Tamil Nadu,India&appid=${apiKey}`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.log('Error fetching weather data:', error);
    }
  };

  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={handleLocationChange}
      />
      <button onClick={fetchWeatherData}>Get Weather</button>
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}</p>
          <p>Humidity: {weatherData.main.humidity}</p>
          <p>Wind Speed: {weatherData.wind.speed}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;

//App.js
import React from 'react';
import WeatherApp from './WeatherApp';

const App = () => {
  return (
    <div>
      <h1>WeatherApp Example</h1>
      <WeatherApp />
    </div>
  );
};

export default App;
