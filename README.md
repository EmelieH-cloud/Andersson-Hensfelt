


## React Context 

### **1. Vad är React Context?**

**React Context** kan liknas vid en stor låda som innehåller information som vi vill dela med flera delar av vår applikation 
(komponenter) utan att behöva skicka den genom props för varje komponent. Istället kan alla komponenter få tillgång till
denna låda. 

I React gör vi det så här:
1. Skapar en **context** där vi lägger den data vi vill dela.
2. Skapar en **provider** som gör datan tillgänglig för alla komponenter som vill hämta den. 
3. Använder en **hook** för att hämta den datan där vi behöver den.

### **2. Vad är `ThemeProvider`?**

**`ThemeProvider`** är som en **låda (provider)** som erbjuder information till alla komponenter som ligger inuti den.  
Den gör det möjligt för hela din app att ha tillgång till kontexten utan att behöva skicka det till varje komponent individuellt.

![image](https://github.com/user-attachments/assets/3799713d-fdd3-4d9b-9e15-fdcede8929e0)

Första delen:

![image](https://github.com/user-attachments/assets/96969f0e-5600-4168-acf5-df8a24930634)

Men man hade lika gärna kunnat skriva: 

![image](https://github.com/user-attachments/assets/dacaf3f4-4078-4fc8-b186-606098c84ee5)

![image](https://github.com/user-attachments/assets/db304f98-2bcf-4561-b36c-e8018817eab0)

## Destrukturering är som en genväg:
Istället för att skriva ut props.children varje gång, får vi children direkt.
Vi tar bort behovet av att skriva props hela tiden och gör koden enklare.

--- 
### **3. Vad är `children` i React?**

`children` är ett sätt i React att beskriva de komponenter som finns inuti en annan komponent. 

Exempel:
```tsx
<ThemeProvider>
    <SomeComponent />
    <AnotherComponent />
</ThemeProvider>
```

- `ThemeProvider` "wrappar" in de andra komponenterna (`SomeComponent` och `AnotherComponent`), vilket gör att dessa får tillgång till temat genom **React Context**.
- **`children`** används för att beskriva dessa "under-komponenter".

### Vad betyder ``` { children: ReactNode } ```
Efter att vi destrukturerat och tagit emot children, behöver vi tala om vilken typ children ska vara. Här är varför det behövs:

I React kan children vara många olika typer av innehåll:

- Text (t.ex. "Hello World")
- JSX-element (t.ex. <div>Content</div>)
- Andra komponenter (t.ex. <SomeComponent />)

Eftersom TypeScript är strikt med typer vill vi ange att children kan vara något av dessa typer. Här använder vi en typ som heter ReactNode,
 som representerar alla möjliga typer av innehåll i React.

## Sammanfattning

![image](https://github.com/user-attachments/assets/b29b8cd8-b196-4dbd-9bdb-38a1dda688cc)

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

![image](https://github.com/user-attachments/assets/6f048650-fd0b-4f3b-bbde-cc3c32476304)

