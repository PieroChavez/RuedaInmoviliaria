import React from 'react';
import './agente.css';
import arnulfo from '../../assets/rueda/arnulfo.jpg';

const Agente = () => {

  const items = [
   
    { name: 'Tarapoto', image: arnulfo },
    //{ name: 'Al Equipo ', image: veintiseis },
    //{ name: 'Marañon', image:  DJI_0491_HDR },
    //{ name: 'Jaen', image: DJI_0437 },

    // { name: 'BUTTERFLY', image: DSC00928 },
  
    // { name: 'EAGLE', image: DJI_0551 },
    // { name: 'KINGFISHER', image: DSC00450},
    // { name: 'PARROT', image: DSC00314 },
    // { name: 'HERON', image: DSC00383 },
    // { name: 'BUTTERFLY', image: DSC00500 },
  ];
  return (
    <div className="agente-container">
      <div className="agente-header">
        <h1>Conoce a tu Agente Inmobiliario</h1>
        <p>¡La persona ideal para ayudarte a encontrar el hogar de tus sueños!</p>
      </div>

      <div className="agente-profile">
        <div className="agente-image">
          <img 
            src={arnulfo} // Reemplaza con la URL de la imagen del agente
            alt="Agente Inmobiliario"
          />
        </div>
        <div className="agente-details">
          <h2>ARNULFO DELGADO</h2>
          <p className="agente-title">Agente Inmobiliario Experto</p>
          <p className="agente-description">
            Con más de 10 años de experiencia en el mercado inmobiliario, Juan Pérez es conocido por su profesionalismo,
            carisma y compromiso con sus clientes. Su objetivo es garantizar que encuentres la propiedad ideal que se
            ajuste a tus necesidades y sueños.
          </p>
          <ul className="agente-highlights">
            <li>✔ Experto en compra, venta y alquiler de propiedades.</li>
            <li>✔ Más de 500 transacciones exitosas.</li>
            <li>✔ Asesoramiento personalizado y atención al detalle.</li>
          </ul>
          <button className="contact-btn">Contáctame</button>
        </div>
      </div>

      <div className="agente-testimonials">
        <h2>Lo que dicen nuestros clientes</h2>
        <div className="testimonial-list">
          <div className="testimonial">
            <p>
              <i>"Juan me ayudó a encontrar mi primera casa, y no podría estar más feliz con el resultado. Su paciencia
              y conocimiento son incomparables."</i>
            </p>
            <span>- María Gómez</span>
          </div>
          <div className="testimonial">
            <p>
              <i>"La atención al detalle y la dedicación de Juan hicieron todo el proceso de venta muy sencillo. ¡Altamente
              recomendado!"</i>
            </p>
            <span>- Carlos Fernández</span>
          </div>
        </div>
      </div>

      <div className="agente-footer">
        <h3>¿Listo para comenzar tu viaje inmobiliario?</h3>
        <button className="cta-btn">Reserva una Consulta</button>
      </div>
    </div>
  );
};

export default Agente;