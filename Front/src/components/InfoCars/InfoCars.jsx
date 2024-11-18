import React from 'react';
import './InfoCars.css';

const InfoCards = () => {
    return (
        <div className="info-cards-container">
            <div className="info-card" onClick={() => window.location.href = '/proyectos'}>
                <div className="icon-section">
                    <img src="/assets/proyectos-icon.png" alt="Proyectos" />
                </div>
                <div className="text-section">
                    <h3>Sección exclusiva de proyectos</h3>
                    <p>Una búsqueda ágil y sencilla por los proyectos disponibles en nuestro portal.</p>
                </div>
            </div>

            <div className="info-card" onClick={() => window.location.href = '/publica'}>
                <div className="icon-section">
                    <img src="/assets/publica-icon.png" alt="Publica" />
                </div>
                <div className="text-section">
                    <h3>¡Publica hoy!</h3>
                    <p>Accede a la información de los planes que pensamos para ti.</p>
                </div>
            </div>

            <div className="info-card" onClick={() => window.location.href = '/conoce'}>
                <div className="icon-section">
                    <img src="/assets/conoce-icon.png" alt="Conoce" />
                </div>
                <div className="text-section">
                    <h3>Conoce Adondevivir</h3>
                    <p>Todo lo que necesitas saber sobre nuestro portal ¡y mucho más!</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCards;
