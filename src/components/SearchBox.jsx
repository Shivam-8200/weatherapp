const SearchBox = ({
  city,
  setCity,
  getWeather,
  weather,
  searchHistory,
  clearHistory,
}) => {
    <h1 className="text-4xl font-bold text-white text-center mt-6 mb-4 drop-shadow-md">
  🌦️ Weather App
</h1>

  return (
<div className="w-full max-w-2xl mx-auto mt-6 p-6 bg-white/10 backdrop-blur-lg rounded-xl shadow-xl border border-white/10">
<div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && getWeather()}
          className="w-full sm:w-80 px-4 py-2 text-lg border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-white bg-gray-800 placeholder-gray-400"
        />
        <button
          onClick={() => getWeather()}
          className="bg-white text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-5 py-2 rounded-md transition"
        >
          Search
        </button>
        {weather && (
          <button
            onClick={() => getWeather(weather.name)}
            className="bg-green-600 text-white font-semibold px-5 py-2 rounded-md hover:bg-green-700 transition"
          >
            🔄 Refresh
          </button>
        )}
      </div>

      {searchHistory.length > 0 && (
        <div className="text-center mt-4">
          <h3 className="text-lg font-semibold mb-3">Recent Searches:</h3>
          <div className="flex flex-wrap justify-center gap-2 mb-2">
            {searchHistory.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCity(item);
                  getWeather(item);
                }}
                className="bg-blue-600 text-white px-4 py-1.5 rounded-md hover:bg-blue-700 transition"
              >
                {item}
              </button>
            ))}
          </div>
          <button
            onClick={clearHistory}
            className="text-sm font-semibold text-red-500 hover:underline"
          >
            Clear Search History
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchBox;
