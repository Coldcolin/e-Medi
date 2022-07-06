import React from 'react'
import { Routes, Route} from "react-router-dom"
import Detail from "../pages/Pharmacy/DetailAdmin"
import PharmacyDashboard from '../pages/Pharmacy/PharmacyDashboard'
import DoctorDetail from "../pages/Doctor/DetailDoctor"

const Auth = () => {
  return (
    <div>
      <PharmacyDashboard />
      <Routes>
        <Route path="/" element={<Detail />} />
        <Route path="/doc" element={<DoctorDetail />} />
      </Routes>
    </div>
  );
}

export default Auth