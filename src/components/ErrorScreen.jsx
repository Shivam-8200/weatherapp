const ErrorScreen = ({ error }) => (
    <div className="error-screen">
      <img
        src="/WeatherIcons.gif"
        alt="error"
        style={{ maxWidth: "280px", borderRadius: "12px", marginTop: "1rem" }}
      />
      <h2 style={{ marginTop: "1rem", color: "red" }}>{error}</h2>
      <h3 style={{ color: "#888" }}>
        Please enter a valid city name. <br />
        Make sure the spelling is correct.
      </h3>
    </div>
  );
  
  export default ErrorScreen;
  