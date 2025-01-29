// src/components/ReviewCard.jsx
import React from 'react';
import './DesignSystem.css';
import RatingStars from './RatingStars';
import Typography from './Typography';

const ReviewCard = ({ review }) => {
  return (
    <div className="review-card">
      <div className="review-header">
        <Typography variant="h3">{review.title}</Typography>
        <RatingStars rating={review.rating} size="small" />
      </div>
      <Typography variant="body" className="review-content">
        {review.content}
      </Typography>
      <div className="review-footer">
        <span>By {review.userId}</span>
        <span>{new Date(review.createdAt).toLocaleDateString()}</span>
      </div>
    </div>
  );
};

export default ReviewCard;