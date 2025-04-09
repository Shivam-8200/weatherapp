import axios from "axios";

const API_KEY = "e0c2dc3b9329e0c3b06c5dd849807c6d";

export const getWeatherData = async (city) => {
  const weatherResponse = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );

  const forecastResponse = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
  );

  const dailyForecast = forecastResponse.data.list.filter((_, idx) => idx % 8 === 0);

  return {
    weatherData: weatherResponse.data,
    forecastData: dailyForecast,
  };
};
