import React from 'react';
import './StepsCards.css';
import { assets } from '../../../assets/assets';

const StepsCards = () => { 
    return (
        <div className="steps-container">
            <h2>TE ACOMPAÑAMOS EN CADA PASO</h2>
            <div className="steps-cards">
                <div className="step-card">
                    <div className="icon-section">
                        <img src={assets.search_icon} alt="Búsqueda" />
                    </div>
                    <div className="text-section">
                        <h3>Búsqueda clara y rápida</h3>
                        <p>Pensamos nuestros filtros y mapas para simplificar tu experiencia en nuestro portal.</p>
                    </div>
                </div>

                <div className="step-card">
                    <div className="icon-section">
                        <img src={assets.bag_icon} alt="Sección" />
                    </div>
                    <div className="text-section">
                        <h3>Tienes tu propia sección</h3>
                        <p>Accede de forma fácil y segura a los avisos contactados, favoritos, las notas que creaste y más.</p>
                    </div>
                </div>

                <div className="step-card">
                    <div className="icon-section">
                        <img src={assets.pacari} alt="Anunciantes" />
                    </div>
                    <div className="text-section">
                        <h3>Variedad de anunciantes</h3>
                        <p>Inmobiliarias y dueños directos de todo el país ofrecen las mejores opciones de inmuebles para ti.</p>
                    </div>
                </div>

                <div className="step-card">
                    <div className="icon-section">
                        <img src={assets.logout_icon} alt="Adondevivir" />
                    </div>
                    <div className="text-section">
                        <h3>¡Somos Rueda Company!</h3>
                        <p>14 años en el mercado y 1.3 millones de avisos publicados nos respaldan en la búsqueda de tu hogar.</p>
                    </div>












                </div>
            </div>
        </div>
    );
};

export default StepsCards;








    