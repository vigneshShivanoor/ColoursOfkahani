import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import StarRating from '../atoms/StarRating';

interface Review {
  id: number;
  productName: string;
  customerName: string;
  date: string;
  rating: number;
  title: string;
  productImage: string;
}

interface ReviewCarouselProps {
  reviews: Review[];
}

const ReviewCarousel = ({ reviews }: ReviewCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const visibleReviews = [
    reviews[(currentIndex - 1 + reviews.length) % reviews.length],
    reviews[currentIndex],
    reviews[(currentIndex + 1) % reviews.length],
  ];

  return (
    <div className="relative">
      <button
        onClick={prevReview}
        className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-[#1a472a] hover:text-white transition-colors"
      >
        <ChevronLeft size={24} />
      </button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        {visibleReviews.map((review, idx) => (
          <div
            key={`${review.id}-${idx}`}
            className={`bg-white p-6 rounded-lg shadow-md transition-all duration-300 ${
              idx === 1 
                ? 'md:scale-105 border-2 border-[#1a472a]/10' 
                : 'md:scale-95 md:opacity-50'
            }`}
          >
            <div className="flex items-start gap-4 mb-4">
              <img
                src={review.productImage}
                alt={review.productName}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div>
                <StarRating rating={review.rating} />
                <h3 className="font-medium text-[#1a472a] mt-2">{review.title}</h3>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-2">{review.productName}</p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>{review.customerName}</span>
              <span>•</span>
              <span>{review.date}</span>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={nextReview}
        className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-[#1a472a] hover:text-white transition-colors"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default ReviewCarousel;