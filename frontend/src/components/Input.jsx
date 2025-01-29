// src/components/Input.jsx
import React from 'react';
import './DesignSystem.css';

const Input = ({ label, type = 'text', error, ...props }) => {
  return (
    <div className="input-container">
      {label && (
        <label className="input-label">
          {label}
        </label>
      )}
      <input
        type={type}
        className={`input-field ${error ? 'input-error' : ''}`}
        {...props}
      />
      {error && (
        <p className="error-message">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;