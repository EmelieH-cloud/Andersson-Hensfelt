import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from './../context/ThemeContext'; // Importera ThemeProvider
import { LanguageProvider } from '../context/LanguageContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <LanguageProvider>
      <ThemeProvider>  
        <App />
      </ThemeProvider>
      </LanguageProvider>
    </HashRouter>
  </StrictMode>,
);
