import { useState } from "react";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const appStyles = {
    backgroundColor: darkMode ? "#222" : "#f4f4f4",
    color: darkMode ? "#fff" : "#000",
    padding: "1rem",
    textAlign: "center",
    width: "300px",
    borderRadius: "8px",
    margin: "1rem auto",
  };

  return (
    <div style={appStyles}>
      <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default ThemeToggle;


