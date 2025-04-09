import { useState, useEffect } from "react";
import { getWeatherData } from "./utils/weatherService";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import WeatherCard from "./components/WeatherCard";
import Forecast from "./components/Forecast";
import ErrorScreen from "./components/ErrorScreen";
import Loader from "./components/Loader";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [searchHistory, setSearchHistory] = useState(() => {
    const stored = localStorage.getItem("weather-search-history");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("weather-search-history", JSON.stringify(searchHistory));
  }, [searchHistory]);

  const getWeather = async (selectedCity = city) => {
    if (!selectedCity.trim()) return;
    setLoading(true);
    setError("");
    try {
      const { weatherData, forecastData } = await getWeatherData(selectedCity);
      setWeather(weatherData);
      setForecast(forecastData);

      if (!searchHistory.includes(selectedCity)) {
        setSearchHistory([selectedCity, ...searchHistory.slice(0, 4)]);
      }
    } catch {
      setError("City not found! Please try again.");
      setWeather(null);
      setForecast([]);
    } finally {
      setLoading(false);
    }
  };

  const clearHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem("weather-search-history");
  };

  return (
    <div className="app-container">
      <h1 className="text-4xl font-bold text-white text-center mt-6 mb-4 drop-shadow-md">
  🌦️ Weather App
</h1>

      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <SearchBox
        city={city}
        setCity={setCity}
        getWeather={getWeather}
        weather={weather}
        searchHistory={searchHistory}
        clearHistory={clearHistory}
      />

      {loading && <Loader />}
      {error && <ErrorScreen error={error} />}
      {weather && !error && <WeatherCard weather={weather} />}
      {forecast.length > 0 && !error && <Forecast forecast={forecast} />}
    </div>
  );
}

export default App;
