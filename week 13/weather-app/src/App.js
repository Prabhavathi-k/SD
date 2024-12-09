// src/App.js
import React from 'react';
import WeatherDisplay from './components/WeatherDisplay';
import { getCurrentWeather, getHistoricalWeather } from '../services/weatherService';

function App() {
  return (
    <div className="App">
      <WeatherDisplay />
    </div>
  );
}

export default App;
