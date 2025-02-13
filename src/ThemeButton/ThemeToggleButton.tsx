import React, { useEffect } from 'react';
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from '../../context/LanguageContext';

const ThemeToggleButton = () => {

  // Denna rad använder destrukturering för att hämta två värden (theme och toggleTheme) direkt från context-objektet
  const { theme, toggleTheme } = useTheme();

  // Hämta på liknande sätt värdet på theme för att veta vilket språk det ska vara på theme-knappen.
  const {language} = useLanguage();

  useEffect(() => {
    // Uppdatera body-klassen när temat ändras
    if (theme === "darkmode") 
    {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
    } 

    
    else
     {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
    }
  }, [theme]); // körs varje gång värdet på 'theme' ändras, det vill säga varje gång man trycker på knappen som ändrar temat.  

  return (
    <button onClick={toggleTheme}>
     {language === "Svenska" ?
      (theme === "lightmode" ? "Ljust läge" : "Mörkt läge") : (theme === "lightmode" ? "Lightmode" : "Darkmode")}
   
 
    </button>
  );
};

export default ThemeToggleButton;
