// src/components/RatingStars.jsx
import React, { useState } from 'react';
import './DesignSystem.css';

const RatingStars = ({ rating, size = 'medium', onChange }) => {
  const [hoveredRating, setHoveredRating] = useState(0);

  const getSizeClass = () => {
    switch (size) {
      case 'small': return 'stars-small';
      case 'large': return 'stars-large';
      default: return 'stars-medium';
    }
  };

  return (
    <div className={`rating-stars ${getSizeClass()}`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`star ${star <= (hoveredRating || rating) ? 'star-filled' : 'star-empty'}`}
          viewBox="0 0 20 20"
          onMouseEnter={() => setHoveredRating(star)}
          onMouseLeave={() => setHoveredRating(0)}
          onClick={() => onChange?.(star)}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

export default RatingStars;