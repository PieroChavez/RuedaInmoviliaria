// src/pages/ContactPage.jsx
import React from 'react';
import './ContactoPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1>Contacto</h1>

      <div className="dashboard">




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
            <button className='contacto-contacto' type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
