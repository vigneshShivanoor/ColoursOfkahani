import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  reviews?: number;
  size?: number;
}

const StarRating = ({ rating, reviews, size = 16 }: StarRatingProps) => (
  <div className="flex items-center gap-2">
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          size={size}
          className={`${
            index < rating ? 'fill-[#F5A623] text-[#F5A623]' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
    {reviews !== undefined && (
      <span className="text-sm text-gray-600">({reviews})</span>
    )}
  </div>
);

export default StarRating;