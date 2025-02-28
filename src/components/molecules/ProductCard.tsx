import React from 'react';
import Button from '../atoms/Button';

interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  image: string;
  hoverImage?: string;
  status?: 'sold_out';
  rating?: number;
  reviews?: number;
}

const ProductCard = ({
  name,
  description,
  price,
  image,
  hoverImage,
  status,
  rating,
  reviews
}: ProductCardProps) => {
  return (
    <div className="group relative bg-white rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            hoverImage ? 'group-hover:opacity-0' : ''
          }`}
        />
        {hoverImage && (
          <img
            src={hoverImage}
            alt={`${name} alternate view`}
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        )}
        {status === 'sold_out' && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full border border-white/30">
              Sold Out
            </span>
          </div>
        )}
      </div>

      <div className="p-4 text-center">
        <h3 className="font-medium text-[#1a472a] text-lg">{name}</h3>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{description}</p>
        <div className="mt-2 text-[#1a472a] font-semibold">₹{price}</div>
      </div>

      {!status && (
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <Button 
            variant="primary"
            className="transform translate-y-4 group-hover:translate-y-0"
          >
            Add to Cart
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;