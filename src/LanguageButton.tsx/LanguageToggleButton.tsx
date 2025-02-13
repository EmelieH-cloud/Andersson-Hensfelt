import React from 'react'
import Button from 'react-bootstrap/Button';
import { useLanguage } from '../../context/LanguageContext'

const LanguageToggleButton = () => {

 // destrukturera language och toggleLanguage() från context 
   const {language, toggleLanguage} = useLanguage();


  return (
    <Button onClick={toggleLanguage}>
    {language === "Svenska" ? "Svenska" : "English"}
    </Button>
  )
}

export default LanguageToggleButton