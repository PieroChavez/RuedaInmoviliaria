import React from 'react';
import './proyectos.css';

const Proyectos = () => {
  const terrenos = [
    {
      id: 1,
      nombre: 'Terreno La Colina',
      ubicacion: 'Jaén - Centro',
      precio: 'S/150,000',
      tamano: '200 m²',
      imagen: 'https://via.placeholder.com/300', // Reemplaza con una URL real
    },
    {
      id: 2,
      nombre: 'Lote Residencial Vista Alegre',
      ubicacion: 'Jaén - San Camilo',
      precio: 'S/120,000',
      tamano: '180 m²',
      imagen: 'https://via.placeholder.com/300', // Reemplaza con una URL real
    },
    {
      id: 3,
      nombre: 'Terreno Campestre Los Pinos',
      ubicacion: 'Jaén - Bellavista',
      precio: 'S/90,000',
      tamano: '250 m²',
      imagen: 'https://via.placeholder.com/300', // Reemplaza con una URL real
    },
    {
      id: 4,
      nombre: 'Lote Urbanizado Los Sauces',
      ubicacion: 'Jaén - San Ignacio',
      precio: 'S/180,000',
      tamano: '300 m²',
      imagen: 'https://via.placeholder.com/300', // Reemplaza con una URL real
    },
  ];

  return (
    <div className="proyectos-container">
      <header className="proyectos-header">
        <h1>Proyectos en Jaén, Cajamarca</h1>
        <p>Descubre los terrenos ideales para tus sueños en la ciudad de Jaén.</p>
      </header>

      <section className="proyectos-list">
        {terrenos.map((terreno) => (
          <div key={terreno.id} className="proyecto-card">
            <img src={terreno.imagen} alt={terreno.nombre} className="proyecto-img" />
            <div className="proyecto-details">
              <h3>{terreno.nombre}</h3>
              <p><b>Ubicación:</b> {terreno.ubicacion}</p>
              <p><b>Precio:</b> {terreno.precio}</p>
              <p><b>Tamaño:</b> {terreno.tamano}</p>
              <button className="btn-detalle">Ver Detalles</button>
            </div>
          </div>
        ))}
      </section>

      <footer className="proyectos-footer">
        <h2>¿Interesado en alguno de nuestros terrenos?</h2>
        <p>Contáctanos para más información y agenda una visita guiada.</p>
        <button className="btn-contacto">Contáctanos Ahora</button>
      </footer>
    </div>
  );
};

export default Proyectos;