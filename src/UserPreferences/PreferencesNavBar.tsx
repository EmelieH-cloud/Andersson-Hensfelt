import React from 'react'
import LanguageToggleButton from '../LanguageButton.tsx/LanguageToggleButton';
import ThemeToggleButton from '../ThemeButton/ThemeToggleButton';

const PreferencesNavBar = () => {
  return (
    <div className='preferences-container'>
        <LanguageToggleButton/>
        <ThemeToggleButton/>
    </div>
  )
}

export default PreferencesNavBar