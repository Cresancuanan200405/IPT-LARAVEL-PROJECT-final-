import React from 'react';
import '../../sass/components/Button.scss';

const Button = ({ children, onClick }) => (
  <button className="btn" onClick={onClick}>
    {children}
  </button>
);

export default Button;
