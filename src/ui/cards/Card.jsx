import React from 'react';
import './card.css';

const Card = ({ title, description, liveDemoLink, sourceCodeLink, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title}  className='card_img'/>
      <div className="card__content">
        <p className="card__title">{title}</p>
        <p className="card__description">{description}</p>
        <button className="card__button" onClick={() => window.open(liveDemoLink, "_blank")}>Live Demo</button>
        <button className="card__button secondary" onClick={() => window.open(sourceCodeLink, "_blank")}>Código Fuente</button>
      </div>
    </div>
  );
};

export default Card;
