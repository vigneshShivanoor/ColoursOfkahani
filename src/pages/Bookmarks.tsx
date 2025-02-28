import React from 'react';
import { ChevronDown } from 'lucide-react';

interface Bookmark {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
}

const bookmarks: Bookmark[] = [
  {
    id: 1,
    name: "Sunflower Dreams",
    description: "Double-sided bookmark with golden sunflowers",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHcs6AmDmv86HRScqb8ZxSXvuzwXukUM5Bxg&s",
    price: 149
  },
  {
    id: 2,
    name: "Reading Nook",
    description: "Cozy reading corner illustration bookmark",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80",
    price: 149
  },
  {
    id: 3,
    name: "Botanical Garden",
    description: "Pressed flowers and leaves bookmark",
    image: "https://images.unsplash.com/photo-1606103836293-0a063ee20566?auto=format&fit=crop&q=80",
    price: 149
  },
  {
    id: 4,
    name: "Vintage Library",
    description: "Classic library scene bookmark",
    image: "https://images.unsplash.com/photo-1544716278-e513176f20b5?auto=format&fit=crop&q=80",
    price: 149
  }
];

const Bookmarks = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Page Header */}
            <div className="text-center">
              <h1 className="text-5xl font-serif text-[#1a472a] mb-4">Bookmarks</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Beautiful paper bookmarks featuring nature-inspired designs and illustrations.
              </p>
            </div>

            {/* Filters and Sort */}
            <div className="flex justify-end items-center border-b border-gray-200 pb-6">
              <div className="flex items-center gap-4">
                <span className="text-gray-600">{bookmarks.length} products</span>
                <div className="relative">
                  <select className="appearance-none border rounded-lg pl-4 pr-10 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1a472a] bg-white">
                    <option>Best Selling</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest First</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
              {bookmarks.map((bookmark) => (
                <div
                  key={bookmark.id}
                  className="flex flex-col md:flex-row gap-8 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative w-full md:w-2/5">
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <img
                        src={bookmark.image}
                        alt={bookmark.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  <div className="flex-1 p-6 flex flex-col justify-center">
                    <h2 className="text-2xl font-serif text-[#1a472a] mb-3">{bookmark.name}</h2>
                    <p className="text-gray-600">{bookmark.description}</p>
                    <div className="mt-6">
                      <span className="text-2xl font-semibold text-[#1a472a]">
                        ₹{bookmark.price}.00
                      </span>
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

export default Bookmarks;