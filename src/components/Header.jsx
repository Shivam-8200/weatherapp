const Header = ({ darkMode, setDarkMode }) => (
    <button onClick={() => setDarkMode(!darkMode)} className="toggle-btn">
      {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
    </button>
  );
  
  export default Header;
  