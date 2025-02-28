import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[600px]">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1606103836293-0a063ee20566?auto=format&fit=crop&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-white text-center">
        <h2 className="text-6xl font-serif mb-4">Notepads</h2>
        <p className="text-xl mb-8">For all your plans and ideas</p>
        <button className="bg-[#ff6b35] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#ff8255] transition-colors">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Hero;