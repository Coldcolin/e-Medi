import React from 'react'
import Hero from "../hero/Hero"
import Service from "../pages/Services"
import About from "../pages/About"
import Docs from "../pages/Doctor/Doctor";
import {AlikeComp, AlikeComp2} from "../pages/AlikeComp"
import Footer from "./Footer"
import Header from "../header/Header"

const Home = () => {
  return (
    <div style={{ fontFamily: "poppins" }}>
      <Header/>
      <Hero />
      <Service />
      <About />
      <Docs />
      <AlikeComp />
      <AlikeComp2 />
      <Footer/>
      {/* <Auth/> */}
    </div>
  );
}

export default Home