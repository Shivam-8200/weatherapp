import { motion } from "framer-motion";

const Forecast = ({ forecast }) => (
  <motion.div
    className="forecast-container"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.2 }}
  >
    <h3>5-Day Forecast</h3>
    <div className="forecast-list">
      {forecast.map((day, idx) => (
        <motion.div
          key={idx}
          className="forecast-card"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: idx * 0.1 }}
        >
          <p>{new Date(day.dt_txt).toLocaleDateString()}</p>
          <img
            src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
            alt="icon"
          />
          <p>{day.main.temp}°C</p>
          <p>{day.weather[0].main}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default Forecast;
