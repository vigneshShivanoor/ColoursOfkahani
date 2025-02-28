import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SliderProduct {
  id: number;
  name: string;
  price: number;
  mainImage: string;
  hoverImage: string;
  status?: 'sold_out';
  description: string;
}

const products: SliderProduct[] = [
  {
    id: 1,
    name: "Frida Kahlo Sticker",
    price: 59,
    mainImage: "https://www.redwolf.in/image/cache/catalog/stickers/batman-emblem-sticker-india-600x800.jpg?m=1728905919",
    hoverImage: "https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?auto=format&fit=crop&q=80",
    description: "At the end of the day, we can endure much more than we think we can."
  },
  {
    id: 2,
    name: "Magnetic Bookmarks (Set of 6)",
    price: 499,
    mainImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80",
    hoverImage: "https://images.unsplash.com/photo-1544716279-e514665533f0?auto=format&fit=crop&q=80",
    description: "Read more scroll less • Just one more chapter • My weekend is all booked"
  },
  {
    id: 3,
    name: "Botanical Bliss Weekly Planner",
    price: 259,
    mainImage: "https://images.unsplash.com/photo-1606103836293-0a063ee20566?auto=format&fit=crop&q=80",
    hoverImage: "https://images.unsplash.com/photo-1606103836937-9129941c0722?auto=format&fit=crop&q=80",
    description: "Minimal planner with gratitude journaling section"
  },
  {
    id: 4,
    name: "Trust The Process Notebook",
    price: 239,
    mainImage: "https://images.unsplash.com/photo-1544716278-e513176f20b5?auto=format&fit=crop&q=80",
    hoverImage: "https://images.unsplash.com/photo-1544716280-5c9f6a12d2b3?auto=format&fit=crop&q=80",
    description: "Floral-themed notebook with bold typography",
    status: 'sold_out'
  },
  {
    id: 5,
    name: "Sunflower Fine Art Print",
    price: 199,
    mainImage: "https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/y/9/z/medium-czonesunflower11545-sunflower-photo-paper-print-poster-original-imagjykphufbn2zr.jpeg?q=20&crop=false",
    hoverImage: "https://images.unsplash.com/photo-1623578134763-2a21433eb0c5?auto=format&fit=crop&q=80",
    description: "Scenic sunflower illustration with sky background"
  }
];

const ProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const visibleProducts = [
    products[(currentIndex - 1 + products.length) % products.length],
    products[currentIndex],
    products[(currentIndex + 1) % products.length],
  ];

  return (
    <div className="w-full bg-[#f5e6d3] relative overflow-hidden">
      <div className="absolute inset-0 -mx-[100vw] bg-[#f5e6d3] z-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10">
        <h2 className="text-2xl sm:text-3xl font-serif text-[#1a472a] text-center mb-8 sm:mb-12">
          Featured Products
        </h2>
        
        <div className="relative">
          <button 
            onClick={prevSlide}
            className="absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-[#1a472a] hover:text-white transition-colors"
            aria-label="Previous product"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {visibleProducts.map((product, idx) => (
              <div 
                key={`${product.id}-${idx}`}
                className={`bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 ${
                  idx === 1 
                    ? 'md:scale-105 border-2 border-[#1a472a]/10' 
                    : 'md:scale-95 md:opacity-50 hidden md:block'
                }`}
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                  <img
                    src={product.mainImage}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                    loading="lazy"
                  />
                  <img
                    src={product.hoverImage}
                    alt={`${product.name} alternate view`}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    loading="lazy"
                  />
                  {product.status === 'sold_out' && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full border border-white/30">
                        Sold Out
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6 text-center bg-white">
                  <h3 className="font-serif text-xl text-[#1a472a] mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                  <div className="text-[#1a472a] font-semibold text-lg">₹{product.price}.00</div>
                  {!product.status && (
                    <button className="mt-4 w-full bg-[#1a472a] text-white py-2 rounded-full hover:bg-[#1a472a]/90 transition-colors">
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={nextSlide}
            className="absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-[#1a472a] hover:text-white transition-colors"
            aria-label="Next product"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;