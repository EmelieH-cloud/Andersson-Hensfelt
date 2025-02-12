
import {createContext, useContext, useState, ReactNode} from "react";



// Skapa en typ för "Theme"
// Notera att i typescript används endast en '|' istället för två '|| (logical OR)'
type Theme = "light" | "dark";

// Skapa ett interface för "ThemeContext"
interface ThemeContextType 
{
    // Typ som innehåller det nuvarande temat 
    theme: Theme;
    // funktion för att byta tema 
    toggleTheme: () => void; 
}
// Skapa kontexten, typen kan antingen vara ThemeContextType eller undefined
const ThemeContext = createContext<ThemeContextType  | undefined>(undefined);
