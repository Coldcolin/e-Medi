import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductView from "../pages/Product/Product";
import Consult from "../pages/User/Consult";
import Product from "../pages/Pharmacy/Products";
import DoctorDetail from "../pages/Doctor/DetailDoctor";
import UserHeader from "../pages/User/UserHeader";

import Appointment from "../pages/User/Appointment";
import PharmSignUp from "../pages/Pharmacy/SignUp";
import SignUpDoc from "../pages/Doctor/SignUpDoc"
import Header from "../header/Header"
const AuthUser = () => {
  return (
    <div>
      {/* <Header /> */}
      <Routes>
       
        <Route path="/2" element={<SignUpDoc />} />
        <Route path="/3" element={<PharmSignUp />} />
      </Routes>
    </div>
  );
};

export default AuthUser;
