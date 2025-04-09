const ErrorScreen = ({ error }) => (
  <div className="text-center mt-8">
    <img
      src="/weatherapp/WeatherIcons.gif"
      alt="error"
      className="w-72 rounded-xl mx-auto mt-4"
    />

    <h2 className="mt-4 text-red-500 font-semibold text-xl">{error}</h2>
    <h3 className="text-gray-500 mt-2">
      Please enter a valid city name. <br />
      Make sure the spelling is correct.
    </h3>
  </div>
);

export default ErrorScreen;
