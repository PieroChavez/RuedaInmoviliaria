import React from "react";
import "./PropertyCards.css";
import { assets } from "../../../assets/assets";

const PropertyCard = ({ image, price, maintenance, address, details, description, logo }) => {
  return (
    <div className="property-card">
      <div className="property-image-propperty">
        <img src={assets.portada_uno_selva} alt="Propiedad" />
      </div>
      <div className="property-info">
        <div className="property-header">
          <div className="property-logo">
          <img src={assets.logo} alt="Logo de la empresa" />
        </div>
          <h3>S/100.00</h3>
          <p>Casa de campo en la mas acogedora ciudad</p>
        </div>
        <h4>Ub. Rueda  company</h4>
        <p className="property-details">150 mtr2</p>
        
        <div className="property-buttons">
          <button className="btn call">📞</button>
          <button className="btn whatsapp">WhatsApp</button>
          <button className="btn contact">Contactar</button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
