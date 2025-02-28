import React, { useState } from 'react';
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  ArrowUp,
  CreditCard,
  Heart,
} from 'lucide-react';
import Button from '../atoms/Button';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateEmail(email)) {
      console.log('Subscribed:', email);
      setEmail('');
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F9F9F9] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stay Connected Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-serif text-[#1a472a] mb-4">Let's Keep in Touch!</h3>
          <p className="text-gray-600 mb-8">
            Get updates on new products, discounts, and more. We promise, no spam!
          </p>
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setIsEmailValid(true);
                  }}
                  placeholder="Enter your email"
                  className={`w-full px-4 py-2 rounded-full border-2 transition-colors ${
                    isEmailValid
                      ? 'border-[#1a472a]/20 focus:border-[#1a472a]'
                      : 'border-red-500 focus:border-red-500'
                  }`}
                />
                {!isEmailValid && (
                  <p className="text-red-500 text-sm mt-1">Please enter a valid email</p>
                )}
              </div>
              <Button type="submit" variant="primary">
                Subscribe
              </Button>
            </div>
          </form>
          <div className="flex justify-center gap-6 mt-8">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
              <button
                key={index}
                className="text-gray-600 hover:text-[#F5A623] transition-colors hover:scale-110"
              >
                <Icon size={24} />
              </button>
            ))}
          </div>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-gray-200">
          {[
            {
              title: 'Shop',
              items: ['New Arrivals', 'Best Sellers', 'Collections', 'Gift Cards']
            },
            {
              title: 'Support',
              items: ['FAQs', 'Shipping & Returns', 'Order Tracking', 'Contact Us']
            },
            {
              title: 'About Us',
              items: ['Our Story', 'Sustainability', 'Careers', 'Blog']
            },
            {
              title: 'Policies',
              items: ['Privacy Policy', 'Terms & Conditions', 'Refund Policy']
            }
          ].map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-[#1a472a] mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-[#1a472a] hover:underline transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="text-center">
            <h1 className="text-2xl font-serif text-[#1a472a] hover:scale-105 transition-transform inline-block cursor-pointer mb-4">
              Riya Designs
            </h1>
            <p className="text-gray-600 flex items-center justify-center gap-2 mb-4">
              Designed with <Heart size={16} className="text-red-500 fill-red-500" /> for dreamers &
              doers
            </p>
            <p className="text-sm text-gray-500 mb-6">© 2025 Riya Designs. All Rights Reserved.</p>
            <div className="flex justify-center gap-4">
              {Array(4)
                .fill(null)
                .map((_, index) => (
                  <CreditCard
                    key={index}
                    size={32}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  />
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-white p-3 rounded-full shadow-lg hover:bg-[#1a472a] hover:text-white transition-colors"
      >
        <ArrowUp size={24} />
      </button>
    </footer>
  );
};

export default Footer;