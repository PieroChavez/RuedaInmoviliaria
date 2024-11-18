// src/components/Properties.jsx
import React from 'react';
import './Properties.css';
import { assets } from '../../assets/assets';

// Placeholder de imagen en blanco

const properties = [
  { id: 1, title: 'Terreno en Laguna Azul', description: '500 m² - Vista a la laguna', price: '$15,000', image: assets },
  { id: 2, title: 'Lote en Tarapoto', description: '300 m² - Cerca al centro', price: '$10,000', image: assets },
  { id: 3, title: 'Terreno en Sauce', description: '800 m² - Zona tranquila', price: '$18,000', image: assets },
//  { id: 4, title: 'Lote en San Martín', description: '400 m² - Excelente ubicación', price: '$12,500', image: placeholderImage },
//  { id: 5, title: 'Terreno en Rioja', description: '600 m² - Clima agradable', price: '$20,000', image: placeholderImage },
//  { id: 6, title: 'Lote en Lamas', description: '350 m² - Vistas increíbles', price: '$9,500', image: placeholderImage },
];

const Properties = () => {
  return (
    <section className="properties-container">
      <h2>Nuestras Propiedades</h2>
      <div className="properties-list">
        {properties.map((property) => (
          <div key={property.id} className="property-card-container">
            <img src={assets.portada_uno_selva} alt={property.title} className="property-image" />
            <h3>{property.title}</h3>
            <p>{property.description}</p>
            <p className="property-price">{property.price}</p>
            <button className="property-button">Ver más detalles</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Properties;
