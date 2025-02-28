import React, { useState, useEffect } from 'react';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { name: '2025 Calendar', path: '/calendar-2025' },
  { name: 'Magnetic Bookmarks', path: '/magnetic-bookmarks' },
  { name: 'Bookmarks', path: '/bookmarks' },
  { name: 'Glass Cans', path: '/glass-cans' },
  { name: 'Notepads', path: '/notepads' },
  { name: 'Stickers', path: '/stickers' },
  { name: 'Art Prints', path: '/art-prints' },
  { name: 'Gift Card', path: '/gift-card' },
  { name: 'Shop All', path: '/shop' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 0);
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 bg-white z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-md' : ''
      } ${isVisible ? 'translate-y-8' : '-translate-y-full'}`}
    >
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-xl sm:text-2xl font-serif text-[#1a472a] font-semibold hover:opacity-80 transition-opacity">
              Riya Designs
            </h1>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden xl:flex flex-1 justify-center">
            <div className="flex space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-gray-700 hover:text-[#1a472a] px-2 py-2 text-sm font-medium transition-colors ${
                    location.pathname === item.path ? 'text-[#1a472a] font-semibold' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button className="text-gray-700 hover:text-[#1a472a] transition-colors p-2">
              <Search size={20} />
            </button>
            <button className="text-gray-700 hover:text-[#1a472a] transition-colors p-2">
              <User size={20} />
            </button>
            <button className="text-gray-700 hover:text-[#1a472a] transition-colors p-2">
              <ShoppingBag size={20} />
            </button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden text-gray-700 hover:text-[#1a472a] transition-colors p-2"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`
            fixed inset-0 bg-white z-50 transition-transform duration-300 xl:hidden
            ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
          style={{ top: '5rem' }}
        >
          <div className="p-4 space-y-2 h-[calc(100vh-5rem)] overflow-y-auto">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-4 py-3 text-base font-medium rounded-lg ${
                  location.pathname === item.path 
                    ? 'text-[#1a472a] font-semibold bg-[#1a472a]/5' 
                    : 'text-gray-700 hover:text-[#1a472a] hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;