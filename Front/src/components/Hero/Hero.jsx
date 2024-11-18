// src/components/Hero.jsx
import React from 'react';
import '../Hero/Hero.css'
import SearchBar from '../Navbar/Search/SearchBar';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h2>Encuentra tu terreno ideal en Tarapoto</h2>
        <p>Ofrecemos las mejores ubicaciones y precios en la región.</p>
       
      </div>
    </section>
  );
};

export default Hero;
