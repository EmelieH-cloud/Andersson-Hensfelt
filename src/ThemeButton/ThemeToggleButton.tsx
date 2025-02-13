import React, { useEffect } from 'react';
import { useTheme } from "../../context/ThemeContext";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    // Uppdatera body-klassen när temat ändras
    if (theme === "dark") 
    {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
    } else
     {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
    }
  }, [theme]); // körs varje gång 'theme' ändras

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? "Switch to Dark" : "Switch to Light"}
    </button>
  );
};

export default ThemeToggleButton;
