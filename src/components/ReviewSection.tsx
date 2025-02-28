import React, { useState } from 'react';
import { Star, Check, ChevronLeft, ChevronRight } from 'lucide-react';

interface Review {
  id: number;
  productName: string;
  customerName: string;
  date: string;
  rating: number;
  title: string;
  productImage: string;
}

const reviews: Review[] = [
  {
    id: 1,
    productName: "A Year In Full Bloom 2025 Calendar",
    customerName: "Kakali Baishya",
    date: "02/17/2025",
    rating: 5,
    title: "Beautiful and Functional",
    productImage: "https://images.unsplash.com/photo-1606103836293-0a063ee20566?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    productName: "Magnetic Bookmarks Set",
    customerName: "Priya Sharma",
    date: "02/15/2025",
    rating: 5,
    title: "Perfect for my Books",
    productImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    productName: "Trust The Process Notebook",
    customerName: "Anita Desai",
    date: "02/14/2025",
    rating: 5,
    title: "Excellent Quality",
    productImage: "https://images.unsplash.com/photo-1544716278-e513176f20b5?auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    productName: "Sunflower Art Print",
    customerName: "Meera Patel",
    date: "02/12/2025",
    rating: 5,
    title: "Beautiful Colors",
    productImage: "https://images.unsplash.com/photo-1623578134763-2a21433eb0c5?auto=format&fit=crop&q=80"
  }
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, index) => (
      <Star
        key={index}
        size={16}
        className={`${
          index < rating ? 'fill-[#F5A623] text-[#F5A623]' : 'text-gray-300'
        }`}
      />
    ))}
  </div>
);

const ReviewSection = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

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
    <section className="w-full bg-white py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-serif text-[#1a472a] mb-4">Reasons to trust us</h2>
          <div className="flex items-center justify-center gap-2">
            <StarRating rating={5} />
            <span className="text-gray-600">from 865 reviews</span>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="relative mb-12 sm:mb-20">
          <button
            onClick={prevReview}
            className="absolute -left-3 sm:-left-4 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-[#1a472a] hover:text-white transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {visibleReviews.map((review, idx) => (
              <div
                key={`${review.id}-${idx}`}
                className={`bg-white p-4 sm:p-6 rounded-lg shadow-md transition-all duration-300 ${
                  idx === 1 
                    ? 'md:scale-105 border-2 border-[#1a472a]/10' 
                    : 'md:scale-95 md:opacity-50 hidden md:block'
                }`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={review.productImage}
                    alt={review.productName}
                    className="w-16 h-16 object-cover rounded-lg"
                    loading="lazy"
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
            className="absolute -right-3 sm:-right-4 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-[#1a472a] hover:text-white transition-colors"
            aria-label="Next review"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Aggregate Rating */}
        <div className="flex justify-center items-center gap-4 sm:gap-8 mb-12 sm:mb-20">
          <div className="flex items-center gap-4">
            <div className="bg-[#1a472a]/5 p-3 rounded-full">
              <Check className="w-6 h-6 text-[#1a472a]" />
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#1a472a]">4.9</div>
              <StarRating rating={5} />
              <p className="text-sm text-gray-600 mt-1">
                out of 5 stars based on 865 reviews
              </p>
            </div>
          </div>
        </div>

        {/* Email Subscription */}
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-xl sm:text-2xl font-serif text-[#1a472a] mb-4">Virtual Snail Mail!</h3>
          <p className="text-gray-600 mb-6">
            Be the first to know about new launches, secret discounts and more!
            Don't worry, we don't spam :)
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-4 py-2 border-2 border-[#1a472a]/20 rounded-full focus:outline-none focus:border-[#1a472a] transition-colors"
            />
            <button className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection