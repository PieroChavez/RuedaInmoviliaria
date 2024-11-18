// src/components/HeroCarousel.jsx
import React, { useEffect, useState } from 'react';
import './Header.css';
import { assets } from '../../assets/assets';

const images = [
  assets.portada_uno,
  assets.logo,
  assets.search_icon,
];

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambiar la imagen automáticamente cada 0.8 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-carousel">
      <div
        className="carousel-image"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      ></div>
      <div className="carousel-caption">
        <h1>Rueda Company SAC</h1>
        <p>Encuentra tu terreno ideal en Tarapoto</p>
        <button className="cta-button">Explorar Propiedades</button>
      </div>
    </div>
  );
};

export default Header;
