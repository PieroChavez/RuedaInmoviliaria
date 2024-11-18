/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";

import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";


import Hero from "./components/Hero/Hero";
import VideoPortada from "./components/InfoCars/Videos/VideoPortada/VideoPortada";

const App = () => {

  const[showLogin, setShowLogin] = useState(false)


  return (
    <>
   
    {showLogin? <LoginPopup setShowLogin= {setShowLogin}/>:<></>}
    <Navbar setShowLogin= {setShowLogin}/>
    
  
    <Hero/> 
      <div className="app">   
        
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />

          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      
      
      <Footer />
    </>
  );
};

export default App;
