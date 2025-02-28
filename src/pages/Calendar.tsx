import React from 'react';
import { Star } from 'lucide-react';

interface CalendarProduct {
  id: number;
  title: string;
  image: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  badge: {
    type: 'sale' | 'stickers';
    text?: string;
  };
}

const calendars: CalendarProduct[] = [
  {
    id: 1,
    title: "A Year In Full Bloom 2025 Calendar",
    image: "https://images.unsplash.com/photo-1606103836293-0a063ee20566?auto=format&fit=crop&q=80",
    price: 499,
    originalPrice: 599,
    rating: 5,
    reviews: 60,
    badge: { type: 'sale' }
  },
  {
    id: 2,
    title: "Calm and Cozy Desk Calendar 2025",
    image: "https://images.unsplash.com/photo-1606103836293-0a063ee20566?auto=format&fit=crop&q=80",
    price: 499,
    originalPrice: 599,
    rating: 5,
    reviews: 10,
    badge: { type: 'stickers', text: '140+ FREE Stickers' }
  }
];

const StarRating = ({ rating, reviews }: { rating: number; reviews: number }) => (
  <div className="flex items-center gap-2">
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
    <span className="text-sm text-gray-600">({reviews})</span>
  </div>
);

const Calendar = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Add padding to account for fixed navbar + announcement bar */}
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Page Header */}
            <div className="text-center">
              <h1 className="text-5xl font-serif text-[#1a472a] mb-4">Calendar 2025</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Stay organized in style with our beautifully designed calendars. Perfect for planning your year ahead.
              </p>
            </div>

            {/* Filters and Sort */}
            <div className="flex justify-end items-center border-b border-gray-200 pb-6">
              <div className="flex items-center gap-4">
                <span className="text-gray-600">{calendars.length} products</span>
                <select className="border rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1a472a]">
                  <option>Best Selling</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                </select>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
              {calendars.map((calendar) => (
                <div
                  key={calendar.id}
                  className="group flex flex-col md:flex-row gap-8 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  {/* Image Container */}
                  <div className="relative w-full md:w-2/5">
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <img
                        src={calendar.image}
                        alt={calendar.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 flex flex-col gap-2">
                        <span className="bg-[#ff6b35] text-white px-4 py-1 rounded-full text-sm font-medium animate-bounce">
                          Sale
                        </span>
                        {calendar.badge.type === 'stickers' && (
                          <span className="bg-white/90 backdrop-blur-sm text-[#1a472a] px-4 py-1 rounded-full text-sm font-medium">
                            {calendar.badge.text}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="flex-1 p-6 flex flex-col justify-center">
                    <h2 className="text-2xl font-serif text-[#1a472a] mb-3">{calendar.title}</h2>
                    <StarRating rating={calendar.rating} reviews={calendar.reviews} />
                    <p className="mt-4 text-gray-600">
                      Beautiful and functional calendar featuring hand-drawn illustrations and plenty of space for your daily notes and reminders.
                    </p>
                    <div className="mt-6 flex items-center gap-3">
                      <span className="text-2xl font-semibold text-[#1a472a]">
                        ₹{calendar.price}.00
                      </span>
                      <span className="text-gray-500 line-through">₹{calendar.originalPrice}.00</span>
                    </div>
                    <button className="mt-6 w-full bg-[#1a472a] text-white py-3 rounded-full hover:bg-[#1a472a]/90 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;