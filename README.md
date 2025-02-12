


## React Context 

### **1. Vad är React Context?**

**React Context** kan liknas vid en stor låda som innehåller information som vi vill dela med flera delar av vår applikation 
(komponenter) utan att behöva skicka den genom props för varje komponent. Istället kan alla komponenter få tillgång till
denna låda. 

I React gör vi det så här:
1. Skapar en **context** där vi lägger den data vi vill dela.
2. Skapar en **provider** som gör datan tillgänglig för alla komponenter som vill hämta den. 
3. Använder en **hook** för att hämta den datan där vi behöver den.

Sammanfattning:
- Contexten **lagrar data**.
- Providern **delar ut data** 
- Hooken används för att **hämta data**

### **2. Vad är `ThemeProvider`?**

**`ThemeProvider`** är som en **låda (provider)** som erbjuder information till alla komponenter som ligger inuti den.  
Den gör det möjligt för hela din app att ha tillgång till kontexten utan att behöva skicka det till varje komponent individuellt.

### **Så här fungerar `ThemeProvider`**:
```tsx
// ThemeProvider är en komponent som hanterar och delar context, (exempelvis temat) i hela appen
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>(() => {
        return (localStorage.getItem("theme") as Theme) || "light";
    });

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light"; // Byt tema
        setTheme(newTheme); // Uppdatera state
        localStorage.setItem("theme", newTheme); // Spara i localStorage
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
```
---

### **3. Vad är `children` i React?**

`children` är ett sätt i React att beskriva de komponenter som finns inuti en annan komponent. I vårt fall när vi använder `ThemeProvider`, betyder det alla de komponenter som ligger inom denna provider och vill använda temat.

Exempel:
```tsx
<ThemeProvider>
    <SomeComponent />
    <AnotherComponent />
</ThemeProvider>
```

- `ThemeProvider` "wrappar" in de andra komponenterna (`SomeComponent` och `AnotherComponent`), vilket gör att dessa får tillgång till temat genom **React Context**.
- **`children`** används för att beskriva dessa "under-komponenter".

---

### **4. Varför behöver vi Types i TypeScript?**

TypeScript hjälper oss att skriva mer robust kod genom att lägga till **typer** som säkerställer att vi inte gör fel. I det här fallet, genom att skapa en **typ för `Theme`**, vet vi att temat bara kan vara `"light"` eller `"dark"`. 

Utan TypeScript skulle vi kunna skriva:
```tsx
const [theme, setTheme] = useState("light");
```

Men det här ger oss inga garantier om vad `theme` kan vara. I TypeScript kan vi säga:
```tsx
type Theme = "light" | "dark"; // Vi säkerställer att theme bara kan vara "light" eller "dark"
const [theme, setTheme] = useState<Theme>("light");
```

Detta gör det lättare att hitta fel och ger oss en tydlig förståelse för vilka värden variablerna kan ha. **`"light" | "dark"`** kallas en **"Union Type"** och betyder att `theme` kan vara antingen `"light"` eller `"dark"`.

---

### **5. Hur använder vi allt tillsammans?**

Här är hela flödet i appen:

1. **`ThemeProvider`** skapar en **central plats** (Context) för att hantera temat.
2. **`children`** gör att alla komponenter **inuti ThemeProvider** får tillgång till temat.
3. **`useState` och `toggleTheme`** låter oss lagra och byta mellan temana ("light" och "dark").
4. **`useContext`** används för att hämta temat i en annan komponent via vår custom hook `useTheme`.

### **Exempel:**

```tsx
import { createContext, useContext, useState, ReactNode } from "react";

// Skapa en typ för temat
type Theme = "light" | "dark";

// Skapa ett interface för ThemeContext
interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

// Skapa en context för temat
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Skapa en provider som gör temat tillgängligt för hela appen
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>("light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Skapa en custom hook för att få åtkomst till temat
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("useTheme måste användas inom ThemeProvider");
    return context;
};
```

