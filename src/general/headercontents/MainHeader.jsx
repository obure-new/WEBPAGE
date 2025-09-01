import React, { useState } from 'react';
import { ChevronDown, Twitter, Facebook, Linkedin, Youtube, Instagram, Menu, X } from 'lucide-react';

const Header = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFoundationDropdownOpen, setIsFoundationDropdownOpen] = useState(false);

  const navigationItems = [
    { name: 'CIC GROUP', href: '/cic-group' },
    { name: 'Home', href: '/home' },
    { name: 'About Us', href: '/about' },
    { name: 'Leadership', href: '/leadership' },
    { name: 'History', href: '/history' },
    { name: 'Investor Relations', href: '/investors' },
    { name: 'Sustainability', href: '/sustainability' },
  ];

  return (
    <>
      {/* Top Header */}
      <div className="bg-yellow-400 text-black py-2">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-sm">
          <div className="flex flex-wrap gap-4">
            <a href="/media-center">Media Center</a>
            <a href="/events">Events</a>
            <a href="/tenders">Tenders</a>
            <a href="/contact">Contact Us</a>
            <a href="/privacy">Data Privacy Statement</a>
          </div>
          <div className="flex space-x-3">
                          {/* Twitter/X */}
                          <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-red-700 hover:text-white transition-all duration-200 shadow-sm border border-gray-300">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                          </a>
          
                          <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-red-700 hover:text-white transition-all duration-200 shadow-sm border border-gray-300">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                          </a>
                          <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-red-700 hover:text-white transition-all duration-200 shadow-sm border border-gray-300">
                            <Linkedin className="w-4 h-4" />
                          </a>
                          <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-red-700 hover:text-white transition-all duration-200 shadow-sm border border-gray-300">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                          </a>
                          <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-red-700 hover:text-white transition-all duration-200 shadow-sm border border-gray-300">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                          </a>
                        </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
              <div className="flex-shrink-0 flex items-center m-0 p-0">
                <img src="https://cdn.brandfetch.io/idlMz2AeCB/w/554/h/448/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1751871656810" alt="Logo" className="h-10 w-auto m-0 p-0" />
              </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(item.name);
                }}
                className={`hover:text-red-600 ${
                  currentPage === item.name ? 'text-red-600 font-semibold border-b-2 border-red-600 pb-1' : 'text-gray-700'
                }`}
              >
                {item.name}
              </a>
            ))}

            {/* CIC Foundation Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsFoundationDropdownOpen(true)}
                onMouseLeave={() => setIsFoundationDropdownOpen(false)}
                className="flex items-center text-gray-700 hover:text-red-600"
              >
                CIC Foundation
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {isFoundationDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white shadow-lg rounded-md py-2 border z-50">
                  <a
                    href="/corporate-social-responsibility"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage('Corporate Social Responsibility');
                      setIsFoundationDropdownOpen(false);
                    }}
                    className="block px-4 py-3 hover:bg-gray-100"
                  >
                    Corporate Social Responsibility
                  </a>
                  <a
                    href="/stakeholder-engagement"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage('Stakeholder Engagement');
                      setIsFoundationDropdownOpen(false);
                    }}
                    className="block px-4 py-3 hover:bg-gray-100"
                  >
                    Stakeholder Engagement
                  </a>
                </div>
              )}
            </div>

            <a href="/subsidiaries" className="bg-red-600 text-white px-6 py-2 rounded">Subsidiaries</a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(item.name);
                  setIsMenuOpen(false);
                }}
                className="block py-2 hover:text-red-600"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
