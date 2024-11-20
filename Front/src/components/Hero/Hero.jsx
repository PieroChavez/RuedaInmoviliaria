// src/components/Hero.jsx
import React from 'react';
import '../Hero/Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <h2 className='h2container'>Encuentra tu terreno ideal en Viña del Marañon</h2>
        <p>Ofrecemos las mejores ubicaciones y precios en la región.</p>
        <button className="hero-button">Ver más</button>
      </div>
    </section>
  );
};

export default Hero;
