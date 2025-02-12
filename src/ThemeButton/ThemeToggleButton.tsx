import React from 'react'
import {useTheme} from "../../context/ThemeContext";

const ThemeToggleButton = () => {

    // useTheme returnerar hela kontexten, använd destrukturering
    // för att plocka ut theme och och toggleTheme direkt. 
    const {theme, toggleTheme} = useTheme();

  return (
    <button onClick={toggleTheme}>
    {theme === "light" ? "Switch to Dark" : "Switch to Light"} {/* Texten på knappen */}
    </button>
  )
}

export default ThemeToggleButton