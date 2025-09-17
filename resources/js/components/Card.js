import React from 'react';
import '../../sass/components/Card.scss';

const Card = ({ title, content }) => (
  <div className="card">
    <h3>{title}</h3>
    <p>{content}</p>
  </div>
);

export default Card;
