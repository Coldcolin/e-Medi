import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Doctor';
import AllSpecialist from './Components/AllSpecialist';
import Pharm from './Components/Pharm';
import PharmDetailPage from './Components/PharmDetailPage';
import DoctoDetailPage from './Components/DoctoDetailPage';
import AppointmentPage from './Components/AppointmentPage';

const App = () =>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/detailpage' element={<DoctoDetailPage/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/drugs' element={<AllSpecialist/>}/>
        <Route path='/pharm' element={<Pharm/>}/>
        <Route path='/pharmdet' element={<PharmDetailPage/>}/>
        <Route path='/appointment' element={<AppointmentPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;