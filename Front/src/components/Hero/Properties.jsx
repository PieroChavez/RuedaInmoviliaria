import React from 'react';
import './Properties.css';
import nueve from '../../assets/rueda/nueve.jpg'; // Importa correctamente las imágenes
import diez from '../../assets/marañon/DJI_0579.jpg'; 
import once from '../../assets/marañon/DSC00618.jpg'; 


const properties = [
  { id: 1, image: nueve, title: 'Terreno en Laguna Azul', description: '500 m² - Vista a la laguna', price: 'S/ 15,000' },
  { id: 2, image: diez, title: 'Viña del Marañon', description: '420 m² - Cerca al centro', price: 'S/ 72,240.00' },
  { id: 3, image: once, title: 'Terreno en Jaen', description: '420 m² - Zona tranquila', price: 'S/ 68,040.00' },

  		

];

const Properties = () => {
  return (
    <section className="properties-container">
      <h2>Nuestras Propiedades</h2>
      <div className="properties-list">
        {properties.map((property) => (
          <div key={property.id} className="property-card-container">
            <img src={property.image} alt={property.title} className="property-image" />
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
