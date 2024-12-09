// src/services/weatherService.js
const API_KEY = '9bb746ee4cf7a262a59de48508f40a72';

export const getCurrentWeather = async (city) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${9bb746ee4cf7a262a59de48508f40a72}`);
  return response.json();
};

export const getHistoricalWeather = async (lat, lon, timestamp) => {
  const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${timestamp}&appid=${9bb746ee4cf7a262a59de48508f40a72}`);
  return response.json();
};
