/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";

import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";


import ContactPage from "./pages/Contacto/ContactoPage";
import Agente from "./pages/Agente/Agente";
import Proyectos from "./pages/Cart/Proyectos";


const App = () => {

  const[showLogin, setShowLogin] = useState(false)


  return (
    <>
               {showLogin? <LoginPopup setShowLogin= {setShowLogin}/>:<></>}
    <Navbar setShowLogin= {setShowLogin}/>  

 
              
              
     
      <div className="app">   
        
        
          <Routes>
          <Route path="/" element={<Home />} />

           <Route path="/agente" element={<Agente/>} />

          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/proyectos" element={<Proyectos/>} />
        </Routes>
      </div>
      
      
      <Footer />
    </>
  );
};

export default App;