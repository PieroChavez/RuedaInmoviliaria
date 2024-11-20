// src/pages/ContactPage.jsx
import React from 'react';
import './ContactoPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1>Contacto</h1>

      <div className="dashboard">
        <div className="mission">
          <h2>Misión</h2>
          <p>
            Nuestra misión es ofrecer el mejor servicio inmobiliario, ayudando a nuestros clientes a encontrar
            propiedades ideales que se ajusten a sus necesidades y expectativas, con profesionalismo y ética.
          </p>
        </div>

        <div className="vision">
          <h2>Visión</h2>
          <p>
            Ser la inmobiliaria líder en el mercado, reconocida por nuestra transparencia, compromiso y satisfacción
            del cliente, contribuyendo al crecimiento del sector inmobiliario de la región.
          </p>
        </div>

        <div className="contact-form">
          <h2>Contáctanos</h2>
          <form>
            <div className="form-group">
              <label>Nombre</label>
              <input type="text" placeholder="Ingresa tu nombre" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Ingresa tu email" />
            </div>
            <div className="form-group">
              <label>Mensaje</label>
              <textarea placeholder="Escribe tu mensaje"></textarea>
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
