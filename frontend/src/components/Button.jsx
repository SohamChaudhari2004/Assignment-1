// src/components/Button.jsx
import React from 'react';
import './DesignSystem.css';

const Button = ({ variant = 'primary', children, onClick, disabled = false, type = 'button' }) => {
  return (
    <button
      className={`button button-${variant}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;