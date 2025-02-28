import React, { useState, useEffect } from 'react';
import { Search, User, ShoppingBag } from 'lucide-react';
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

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 bg-white z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-md' : ''
      } ${isVisible ? 'translate-y-8' : '-translate-y-full'}`}
    >
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 mr-8">
            <h1 className="text-2xl font-serif text-[#1a472a] font-semibold hover:opacity-80 transition-opacity whitespace-nowrap">
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
                  className={`text-gray-700 hover:text-[#1a472a] px-2 py-2 text-sm font-medium transition-colors whitespace-nowrap ${
                    location.pathname === item.path ? 'text-[#1a472a] font-semibold' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
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
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-current transform transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`w-full h-0.5 bg-current transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`w-full h-0.5 bg-current transform transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`xl:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
          <div className="py-4 space-y-2 border-t border-gray-100">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-4 py-2 text-base font-medium text-gray-700 hover:text-[#1a472a] hover:bg-gray-50 ${
                  location.pathname === item.path ? 'text-[#1a472a] font-semibold bg-gray-50' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
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