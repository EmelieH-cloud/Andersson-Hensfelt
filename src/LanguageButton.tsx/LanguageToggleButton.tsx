import React from 'react'
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext'

const LanguageToggleButton = () => {

 // destrukturera language och toggleLanguage() från LanguageContext: 
   const {language, toggleLanguage} = useLanguage();
   // destrukturera theme från ThemeContext:
   const {theme} = useTheme();



  return (
    <a style={{ textDecoration: 'none' }} onClick={toggleLanguage} className='global-a light-text'>
    {language === "Svenska" ? "Svenska" : "English"}
    </a>
  )
}

export default LanguageToggleButton