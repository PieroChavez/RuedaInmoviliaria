import React from "react";
import "./PropertyCards.css";

const PropertyCard = ({ image, price, maintenance, address, details, description, logo }) => {
  return (
    <div className="property-card">
      <div className="property-image">
        <img src={image} alt="Propiedad" />
      </div>
      <div className="property-info">
        <div className="property-header">
          <h3>{price}</h3>
          <p>{maintenance}</p>
        </div>
        <h4>{address}</h4>
        <p className="property-details">{details}</p>
        <p className="property-description">{description}</p>
        <div className="property-logo">
          <img src={logo} alt="Logo de la empresa" />
        </div>
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
