import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface MagneticBookmark {
  id: number;
  name: string;
  description: string;
  mainImage: string;
  hoverImage: string;
  price: number;
}

interface PurchaseNotification {
  name: string;
  location: string;
  product: string;
}

const magneticBookmarks: MagneticBookmark[] = [
  {
    id: 1,
    name: "Fun & Flair Set",
    description: "Set of 10 Magnetic Bookmarks",
    mainImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80",
    hoverImage: "https://images.unsplash.com/photo-1544716279-e514665533f0?auto=format&fit=crop&q=80",
    price: 499
  },
  {
    id: 2,
    name: "Botanical Dreams",
    description: "Set of 8 Floral Magnetic Bookmarks",
    mainImage: "https://images.unsplash.com/photo-1606103836293-0a063ee20566?auto=format&fit=crop&q=80",
    hoverImage: "https://images.unsplash.com/photo-1606103836937-9129941c0722?auto=format&fit=crop&q=80",
    price: 399
  },
  {
    id: 3,
    name: "Literary Quotes",
    description: "Set of 6 Book Quote Magnetic Bookmarks",
    mainImage: "https://images.unsplash.com/photo-1544716278-e513176f20b5?auto=format&fit=crop&q=80",
    hoverImage: "https://images.unsplash.com/photo-1544716280-5c9f6a12d2b3?auto=format&fit=crop&q=80",
    price: 299
  },
  {
    id: 4,
    name: "Celestial Collection",
    description: "Set of 8 Galaxy Themed Magnetic Bookmarks",
    mainImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80",
    hoverImage: "https://images.unsplash.com/photo-1623578134934-c24fb0bf2c0d?auto=format&fit=crop&q=80",
    price: 449
  }
];

const locations = [
  "Mumbai, IN",
  "Delhi, IN",
  "Bangalore, IN",
  "Hyderabad, IN",
  "Chennai, IN",
  "Kolkata, IN",
  "Pune, IN",
  "Ahmedabad, IN"
];

const names = [
  "Priya",
  "Rahul",
  "Neha",
  "Amit",
  "Sneha",
  "Raj",
  "Pooja",
  "Vikram"
];

const MagneticBookmarks = () => {
  const [notification, setNotification] = useState<PurchaseNotification | null>(null);

  useEffect(() => {
    const generateNotification = () => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomLocation = locations[Math.floor(Math.random() * locations.length)];
      const randomProduct = magneticBookmarks[Math.floor(Math.random() * magneticBookmarks.length)];

      setNotification({
        name: randomName,
        location: randomLocation,
        product: randomProduct.name
      });

      setTimeout(() => setNotification(null), 5000);
    };

    const interval = setInterval(generateNotification, 15000);
    generateNotification(); // Show first notification immediately

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Page Header */}
            <div className="text-center">
              <h1 className="text-5xl font-serif text-[#1a472a] mb-4">Magnetic Bookmarks</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Keep your place in style with our magnetic bookmarks. Perfect for readers who love a touch of whimsy.
              </p>
            </div>

            {/* Filters and Sort */}
            <div className="flex justify-end items-center border-b border-gray-200 pb-6">
              <div className="flex items-center gap-4">
                <span className="text-gray-600">{magneticBookmarks.length} products</span>
                <div className="relative">
                  <select className="appearance-none border rounded-lg pl-4 pr-10 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1a472a] bg-white">
                    <option>Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest First</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-8">
              {magneticBookmarks.map((bookmark) => (
                <div
                  key={bookmark.id}
                  className="group relative bg-white rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={bookmark.mainImage}
                      alt={bookmark.name}
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                    />
                    <img
                      src={bookmark.hoverImage}
                      alt={`${bookmark.name} alternate view`}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </div>

                  <div className="p-4 text-center">
                    <h3 className="font-medium text-[#1a472a]">{bookmark.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{bookmark.description}</p>
                    <div className="mt-2 text-[#1a472a] font-semibold">₹{bookmark.price}</div>
                  </div>

                  <button className="absolute inset-0 bg-black/0 group-hover:bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="bg-white text-[#1a472a] px-6 py-2 rounded-full font-medium hover:bg-[#1a472a] hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0">
                      Add to Cart
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Purchase Notification */}
      {notification && (
        <div className="fixed bottom-4 left-4 bg-white rounded-lg shadow-lg p-4 animate-slide-up">
          <p className="text-sm text-gray-800">
            <span className="font-medium">{notification.name}</span> from{' '}
            <span className="font-medium">{notification.location}</span> just purchased{' '}
            <span className="font-medium">{notification.product}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default MagneticBookmarks;