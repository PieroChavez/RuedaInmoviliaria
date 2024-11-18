import 'bootstrap/dist/css/bootstrap.min.css';
import './HeroCarousel.css'

// src/components/HeroCarousel.jsx
import React, { useEffect, useState } from 'react';


const images = [




  
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para cambiar automáticamente las imágenes cada 0.8 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-carousel">
      <img src={images[currentIndex]} alt="Portada de Rueda Company SAC" className="carousel-image" />
      <div className="carousel-caption">
        <h1>Rueda Company SAC</h1>
        <p>Encuentra tu terreno ideal en Tarapoto</p>
        <button className="cta-button">Explorar Propiedades</button>
      </div>
    </div>
  );
};

export default HeroCarousel;
