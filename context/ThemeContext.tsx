import React, { createContext, useContext, useState, ReactNode } from "react";

/*
Denna kod hanterar applikationens tema (ljus eller mörk) med hjälp av React Context.

ThemeProvider:
ThemeProvider är en komponent som fungerar som en provider för vårt tema. Den håller reda på
det aktuella temat (antingen "light" eller "dark") genom en useState-hook. Den innehåller
också en funktion (toggleTheme) som byter mellan dessa två teman.

useTheme:
useTheme är en custom hook som gör det enkelt att konsumera (läsa) kontexten. 
Den hämtar kontexten via Reacts useContext-hook och kastar ett fel om
den används utanför en ThemeProvider.
*/

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {

  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => 
{
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
