import React, { useState } from 'react';
import Typography from './components/Typography';
import Button from './components/Button';
import Input from './components/Input';
import RatingStars from './components/RatingStars';
import ReviewCard from './components/ReviewCard';
const App = () => {
  // State management for form and reviews
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    rating: 0
  });
  const [formError, setFormError] = useState({});

  // Sample reviews data
  const [reviews] = useState([
    {
      id: 1,
      title: "Great Product Experience",
      content: "This product exceeded my expectations in every way possible. The quality is outstanding.",
      rating: 5,
      userId: "John D.",
      createdAt: new Date().toISOString()
    },
    {
      id: 2,
      title: "Good but could be better",
      content: "While the product is generally good, there's room for improvement in some areas.",
      rating: 4,
      userId: "Sarah M.",
      createdAt: new Date().toISOString()
    }
  ]);

  // Handle rating change
  const handleRatingChange = (newRating) => {
    setFormData(prev => ({ ...prev, rating: newRating }));
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    
    if (!formData.title) errors.title = 'Title is required';
    if (!formData.content) errors.content = 'Review content is required';
    if (!formData.rating) errors.rating = 'Please select a rating';

    if (Object.keys(errors).length > 0) {
      setFormError(errors);
      return;
    }

    console.log('Submitting review:', formData);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      {/* Header Section */}
      <header style={{ marginBottom: '40px' }}>
        <Typography variant="h1">Product Reviews</Typography>
        <Typography variant="body">Share your experience with our product</Typography>
      </header>

      {/* Review Form Section */}
      <section style={{ marginBottom: '40px', padding: '20px', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
        <Typography variant="h2">Write a Review</Typography>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
          <div>
            <Typography variant="h3">Rating</Typography>
            <RatingStars 
              rating={formData.rating} 
              size="large" 
              onChange={handleRatingChange}
            />
            {formError.rating && (
              <Typography variant="small" className="error">
                {formError.rating}
              </Typography>
            )}
          </div>

          <Input
            label="Review Title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            error={formError.title}
            placeholder="Summarize your experience"
          />

          <Input
            label="Review Content"
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            error={formError.content}
            placeholder="Share the details of your experience"
            as="textarea"
            style={{ minHeight: '100px' }}
          />

          <div style={{ display: 'flex', gap: '10px' }}>
            <Button type="submit" variant="primary">Submit Review</Button>
            <Button 
              type="button" 
              variant="secondary"
              onClick={() => {
                setFormData({ title: '', content: '', rating: 0 });
                setFormError({});
              }}
            >
              Clear Form
            </Button>
          </div>
        </form>
      </section>

      {/* Reviews Display Section */}
      <section>
        <Typography variant="h2">Customer Reviews</Typography>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
          {reviews.map(review => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {reviews.length === 0 && (
          <Typography variant="body" style={{ textAlign: 'center', marginTop: '20px' }}>
            No reviews yet. Be the first to review this product!
          </Typography>
        )}
      </section>
    </div>
  );
};

export default App;