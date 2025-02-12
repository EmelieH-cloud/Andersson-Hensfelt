import React from 'react'
import Landingpage from './pages/landingpage';
import { Route, Routes } from 'react-router-dom';

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
