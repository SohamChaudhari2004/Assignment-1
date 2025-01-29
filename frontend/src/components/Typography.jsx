// src/components/Typography.jsx
import React from 'react';
import './DesignSystem.css';

const Typography = ({ variant, children, className = '' }) => {
  const getVariantClass = () => {
    switch (variant) {
      case 'h1': return 'typography-h1';
      case 'h2': return 'typography-h2';
      case 'h3': return 'typography-h3';
      case 'body': return 'typography-body';
      case 'small': return 'typography-small';
      default: return 'typography-body';
    }
  };

  return (
    <div className={`typography ${getVariantClass()} ${className}`}>
      {children}
    </div>
  );
};

export default Typography;