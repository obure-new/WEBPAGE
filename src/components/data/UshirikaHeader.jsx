import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, Menu, X } from 'lucide-react';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <header className="bg-white shadow-sm relative z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-20 h-20 rounded-lg flex items-center justify-center bg-white">
            <Link to="/">
              <img
                src="https://ushirikagardens.cic.co.ke/wp-content/uploads/2023/10/ushirika-logo_cropped-1.png"
                alt="Ushirika Gardens Logo"
                className="w-16 h-16 object-contain"
              />
            </Link>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-red-600 transition-colors font-semibold">
            Home
          </Link>

          {/* Ushirika Gardens Dropdown */}
          <div className="relative dropdown-container">
            <button
              className="text-gray-700 hover:text-red-600 transition-colors flex items-center space-x-1"
              onClick={() => handleDropdownToggle('ushirika')}
              onMouseEnter={() => setActiveDropdown('ushirika')}
            >
              <span>Ushirika Gardens</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === 'ushirika' && (
              <div
                className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded-lg border z-50"
                onMouseLeave={closeDropdown}
              >
                <Link
                  to="/ushirika/ujima-park"
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors"
                >
                  Ujima Park
                </Link>
                <Link
                  to="/ushirika/uzuri-pines"
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors"
                >
                  Uzuri Pines
                </Link>
              </div>
            )}
          </div>

          {/* About Us Dropdown */}
          <div className="relative dropdown-container">
            <button
              className="text-gray-700 hover:text-red-600 transition-colors flex items-center space-x-1"
              onClick={() => handleDropdownToggle('about')}
              onMouseEnter={() => setActiveDropdown('about')}
            >
              <span>About Us</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === 'about' && (
              <div
                className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded-lg border z-50"
                onMouseLeave={closeDropdown}
              >
                <Link
                  to="/about/who-we-are"
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors"
                >
                  Who Are We
                </Link>
                <Link
                  to="/about/why-choose-us"
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors"
                >
                  Why Choose Us
                </Link>
                <Link
                  to="/about/partners"
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors"
                >
                  Meet Our Partners
                </Link>
              </div>
            )}
          </div>

          {/* Jenga Dropdown */}
          <div className="relative dropdown-container">
            <button
              className="text-gray-700 hover:text-red-600 transition-colors flex items-center space-x-1"
              onClick={() => handleDropdownToggle('jenga')}
              onMouseEnter={() => setActiveDropdown('jenga')}
            >
              <span>Jenga</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === 'jenga' && (
              <div
                className="absolute top-full left-0 mt-1 w-56 bg-white shadow-lg rounded-lg border z-50"
                onMouseLeave={closeDropdown}
              >
                <Link
                  to="/jenga/scalable-designs"
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors"
                >
                  Scalable House Designs
                </Link>
                <Link
                  to="/jenga/building-regulations"
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors"
                >
                  Building Regulations
                </Link>
              </div>
            )}
          </div>

          {/* Resources Dropdown */}
          <div className="relative dropdown-container">
            <button
              className="text-gray-700 hover:text-red-600 transition-colors flex items-center space-x-1"
              onClick={() => handleDropdownToggle('resources')}
              onMouseEnter={() => setActiveDropdown('resources')}
            >
              <span>Resources</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === 'resources' && (
              <div
                className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded-lg border z-50"
                onMouseLeave={closeDropdown}
              >
                <Link
                  to="/resources/downloads"
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors"
                >
                  Downloads
                </Link>
                <Link
                  to="/resources/videos"
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors"
                >
                  Videos
                </Link>
                <Link
                  to="/resources/gallery"
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors"
                >
                  Gallery
                </Link>
              </div>
            )}
          </div>

          <Link to="/news" className="text-gray-700 hover:text-red-600 transition-colors">
            News
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-red-600 transition-colors">
            Contact Us
          </Link>
        </nav>

        {/* Call to Action - Desktop */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-red-600">
            <Phone className="w-4 h-4" />
            <span className="font-semibold">0717 100 100</span>
          </div>
          <Link
            to="/schedule-visit"
            className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
          >
            Schedule a visit
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t">
          <nav className="px-4 py-4 space-y-4">
            <Link to="/" className="block text-gray-700 hover:text-red-600 font-semibold">
              Home
            </Link>
            
            {/* Mobile Dropdowns */}
            <div className="space-y-2">
              <span className="block text-gray-700 font-semibold">Ushirika Gardens</span>
              <div className="pl-4 space-y-2">
                <Link to="/ushirika/ujima-park" className="block text-gray-600 hover:text-red-600">
                  Ujima Park
                </Link>
                <Link to="/ushirika/uzuri-pines" className="block text-gray-600 hover:text-red-600">
                  Uzuri Pines
                </Link>
              </div>
            </div>
            
            <div className="space-y-2">
              <span className="block text-gray-700 font-semibold">About Us</span>
              <div className="pl-4 space-y-2">
                <Link to="/about/who-we-are" className="block text-gray-600 hover:text-red-600">
                  Who Are We
                </Link>
                <Link to="/about/why-choose-us" className="block text-gray-600 hover:text-red-600">
                  Why Choose Us
                </Link>
                <Link to="/about/partners" className="block text-gray-600 hover:text-red-600">
                  Meet Our Partners
                </Link>
              </div>
            </div>
            
            <div className="space-y-2">
              <span className="block text-gray-700 font-semibold">Jenga</span>
              <div className="pl-4 space-y-2">
                <Link to="/jenga/scalable-designs" className="block text-gray-600 hover:text-red-600">
                  Scalable House Designs
                </Link>
                <Link to="/jenga/building-regulations" className="block text-gray-600 hover:text-red-600">
                  Building Regulations
                </Link>
              </div>
            </div>
            
            <div className="space-y-2">
              <span className="block text-gray-700 font-semibold">Resources</span>
              <div className="pl-4 space-y-2">
                <Link to="/resources/downloads" className="block text-gray-600 hover:text-red-600">
                  Downloads
                </Link>
                <Link to="/resources/videos" className="block text-gray-600 hover:text-red-600">
                  Videos
                </Link>
                <Link to="/resources/gallery" className="block text-gray-600 hover:text-red-600">
                  Gallery
                </Link>
              </div>
            </div>
            
            <Link to="/news" className="block text-gray-700 hover:text-red-600">
              News
            </Link>
            <Link to="/contact" className="block text-gray-700 hover:text-red-600">
              Contact Us
            </Link>
            
            <div className="pt-4 border-t">
              <div className="flex items-center space-x-2 text-red-600 mb-4">
                <Phone className="w-4 h-4" />
                <span className="font-semibold">0717 100 100</span>
              </div>
              <Link
                to="/schedule-visit"
                className="block w-full bg-yellow-400 text-gray-900 px-6 py-2 rounded-lg font-semibold text-center"
              >
                Schedule a visit
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;