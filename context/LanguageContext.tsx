import React, { createContext, useContext, useState, ReactNode } from "react";

// 1. Skapa typen för language
type Language = "Svenska" | "English";

// 2. skapa interface för LanguageContext
interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
}

// 3. Skapa kontexten 
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 4. Skapa providern, alltså en komponent som förser children med kontexten. 
export const LanguageProvider = ({ children }: { children: ReactNode }) => {

// 5. Skapa state-variabel för valt språk
  const [language, setLanguage] = useState<Language>("Svenska");

 // 6. Skapa setLanguage() som uppdaterar state 
  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "Svenska" ? "English" : "Svenska"));
  };

  return (
    // skicka ner state-variablerna nedåt i komponentträdet 
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Skapa en hook som returnerar kontexten 
export const useLanguage = (): LanguageContextType => 
{
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
