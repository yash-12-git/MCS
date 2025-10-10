'use client';
import Image from 'next/image';
import { Star } from 'lucide-react';
import {
  ReviewsSection,
  ReviewsTitle,
  ReviewsContainer,
  ReviewCard,
  ReviewerInfo,
  Rating,
  ReviewText,
} from './styles';

const reviews = [
  {
    name: 'Amit Sharma',
    rating: 5,
    text: 'The fabric quality is exceptional! I ordered suit and it exceeded expectations.',
  },
  {
    name: 'Priya Mehta',
    rating: 4,
    text: 'Loved the colors and texture. Great service and fast delivery.',
  },
  {
    name: 'Rahul Verma',
    rating: 5,
    text: 'One of the best places for premium fabrics. Highly recommended!',
  },
  {
    name: 'Sneha Kapoor',
    rating: 5,
    text: 'Beautiful fabric designs! The customer support was very responsive.',
  },
];

const CustomerReviews = () => {
  return (
    <ReviewsSection>
      <ReviewsTitle>What Our Customers Say</ReviewsTitle>
      <ReviewsContainer>
        {reviews.map((review, idx) => (
          <ReviewCard key={idx}>
            <ReviewerInfo>
                <p>{review.name}</p>
            </ReviewerInfo>
            <Rating>
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star key={i} size={18} fill="#FFB400" stroke="#FFB400" />
              ))}
            </Rating>
            <ReviewText>{review.text}</ReviewText>
          </ReviewCard>
        ))}
      </ReviewsContainer>
    </ReviewsSection>
  );
};

export default CustomerReviews;
