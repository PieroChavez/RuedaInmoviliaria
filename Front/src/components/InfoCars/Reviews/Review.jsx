import React from 'react';
import './Review.css';

const Review = () => {
  return (
    <>
        <h2 className="review-title">Comentarios</h2>
        <div className="review-container">
      
      <div className="review-card">
        <div className="review-header">
          <h3>Juan Pérez</h3>
          <span>⭐⭐⭐⭐⭐</span>
        </div>
        <p className="review-text">
          Excelente curso, aprendí mucho y los profesores son muy profesionales. Recomiendo este curso a todos los que quieran mejorar sus habilidades.
        </p>
      </div>

      <div className="review-card">
        <div className="review-header">
          <h3>Ana López</h3>
          <span>⭐⭐⭐⭐</span>
        </div>
        <p className="review-text">
          El contenido del curso es muy bueno, aunque me gustaría que profundicen más en algunos temas. En general, una experiencia positiva.
        </p>
      </div>
    </div>
    
    </>

  );
};

export default Review;
