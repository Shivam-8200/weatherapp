import { motion } from "framer-motion";

const WeatherCard = ({ weather }) => (
  <motion.div
    className="weather-card bg-white/10 backdrop-blur-md rounded-xl p-6 text-center shadow-lg text-white w-full max-w-md mx-auto"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="text-2xl font-bold mb-4">{weather.name}</h2>

    <img
      src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
      alt="weather-icon"
      className="mx-auto w-20 h-20"
    />

    <p className="mt-4 text-lg">🌡️ Temperature: {weather.main.temp}°C</p>
    <p className="text-lg">🌥️ Condition: {weather.weather[0].description}</p>
    <p className="text-lg">💧 Humidity: {weather.main.humidity}%</p>
    <p className="text-lg">🌬️ Wind: {weather.wind.speed} km/h</p>
  </motion.div>
);

export default WeatherCard;
