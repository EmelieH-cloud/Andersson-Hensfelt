import React from 'react'
import Landingpage from './pages/landingpage';
import { Route, Routes } from 'react-router-dom';
import './themes.css'
import './global-styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() 
{

  return (
    <>
     <Routes>
      <Route path="/" element={<Landingpage/>} />
     </Routes>
    </>
  )
}

export default App
