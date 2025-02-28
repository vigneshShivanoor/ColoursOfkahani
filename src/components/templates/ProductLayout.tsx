import React from 'react';
import Navbar from '../organisms/Navbar';
import Footer from '../organisms/Footer';

interface ProductLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

const ProductLayout = ({ children, title, description }: ProductLayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Page Header */}
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-serif text-[#1a472a] mb-4">{title}</h1>
              {description && (
                <p className="text-gray-600 max-w-2xl mx-auto">
                  {description}
                </p>
              )}
            </div>
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductLayout;