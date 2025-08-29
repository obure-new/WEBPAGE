import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Phone, Menu, X } from 'lucide-react';

const Header = ({ onScheduleVisit }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  // Function to handle smooth scrolling to sections
  const handleSectionNavigation = (sectionId) => {
    // If we're not on the about page, navigate there first
    if (location.pathname !== '/about') {
      navigate('/about');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    } else {
      // If already on about page, scroll directly
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    closeDropdown();
  };

  // Function to handle Ujima Park navigation within Ushirika Gardens page
  const handleUjimaNavigation = () => {
    // Navigate to Ushirika Gardens page first
    if (location.pathname !== '/ushirika-gardens') {
      navigate('/ushirika-gardens');
      // Wait for navigation to complete, then scroll to Ujima section
      setTimeout(() => {
        const element = document.getElementById('ujima-park');
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    } else {
      // If already on Ushirika Gardens page, scroll directly to Ujima section
      const element = document.getElementById('ujima-park');
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    closeDropdown();
  };

  // Function to handle Resources navigation with tab parameter
  const handleResourcesNavigation = (tab = 'downloads') => {
    navigate(`/resources?tab=${tab}`);
    closeDropdown();
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

  // Handle hash navigation on page load
  useEffect(() => {
    if (location.pathname === '/about' && location.hash) {
      const sectionId = location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
    // Handle Ujima Park hash navigation
    if (location.pathname === '/ushirika-gardens' && location.hash === '#ujima-park') {
      setTimeout(() => {
        const element = document.getElementById('ujima-park');
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  }, [location]);

  // Function to check if a route is active
  const isActiveRoute = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-20 h-12 rounded-lg flex items-center justify-center bg-white">
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
          <Link 
            to="/" 
            className={`transition-colors font-semibold ${
              isActiveRoute('/') 
                ? 'text-red-600 border-b-2 border-red-600 pb-1' 
                : 'text-gray-700 hover:text-red-600'
            }`}
          >
            Home
          </Link>

          {/* Ushirika Gardens Dropdown - Updated */}
          <div className="relative dropdown-container">
            <Link
              to="/ushirika-gardens"
              className={`transition-colors flex items-center space-x-1 ${
                isActiveRoute('/ushirika-gardens') || isActiveRoute('/uzuri-pines')
                  ? 'text-red-600 border-b-2 border-red-600 pb-1'
                  : 'text-gray-700 hover:text-red-600'
              }`}
              onMouseEnter={() => setActiveDropdown('ushirika')}
            >
              <span>Ushirika Gardens</span>
              <svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                onClick={(e) => {
                  e.preventDefault();
                  handleDropdownToggle('ushirika');
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            {activeDropdown === 'ushirika' && (
              <div
                className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded-lg border z-50"
                onMouseLeave={closeDropdown}
              >
                <button
                  onClick={handleUjimaNavigation}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors"
                >
                  Ujima Park
                </button>
                <Link
                  to="/uzuri-pines"
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors"
                >
                  Uzuri Pines
                </Link>
              </div>
            )}
          </div>

          {/* About Us Dropdown - Updated with smooth scrolling */}
          <div className="relative dropdown-container">
            <Link
              to="/about"
              className={`transition-colors flex items-center space-x-1 ${
                isActiveRoute('/about')
                  ? 'text-red-600 border-b-2 border-red-600 pb-1'
                  : 'text-gray-700 hover:text-red-600'
              }`}
              onMouseEnter={() => setActiveDropdown('about')}
            >
              <span>About Us</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            {activeDropdown === 'about' && (
              <div
                className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded-lg border z-50"
                onMouseLeave={closeDropdown}
              >
                <button
                  onClick={() => handleSectionNavigation('who-we-are')}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors"
                >
                  Who Are We
                </button>
                <button
                  onClick={() => handleSectionNavigation('why-choose-us')}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors"
                >
                  Why Choose Us
                </button>
                <button
                  onClick={() => handleSectionNavigation('partners')}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors"
                >
                  Meet Our Partners
                </button>
              </div>
            )}
          </div>

          {/* Jenga Dropdown */}
          <div className="relative dropdown-container">
            <button
              className={`transition-colors flex items-center space-x-1 ${
                isActiveRoute('/jenga')
                  ? 'text-red-600 border-b-2 border-red-600 pb-1'
                  : 'text-gray-700 hover:text-red-600'
              }`}
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
            <Link
              to="/resources"
              className={`transition-colors flex items-center space-x-1 ${
                isActiveRoute('/resources')
                  ? 'text-red-600 border-b-2 border-red-600 pb-1'
                  : 'text-gray-700 hover:text-red-600'
              }`}
              onMouseEnter={() => setActiveDropdown('resources')}
            >
              <span>Resources</span>
              <svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                onClick={(e) => {
                  e.preventDefault();
                  handleDropdownToggle('resources');
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            {activeDropdown === 'resources' && (
              <div
                className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded-lg border z-50"
                onMouseLeave={closeDropdown}
              >
                <button
                  onClick={() => handleResourcesNavigation('downloads')}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors"
                >
                  Downloads
                </button>
                <button
                  onClick={() => handleResourcesNavigation('videos')}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors"
                >
                  Videos
                </button>
                <button
                  onClick={() => handleResourcesNavigation('gallery')}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors"
                >
                  Gallery
                </button>
              </div>
            )}
          </div>

          <Link 
            to="/news" 
            className={`transition-colors ${
              isActiveRoute('/news')
                ? 'text-red-600 border-b-2 border-red-600 pb-1'
                : 'text-gray-700 hover:text-red-600'
            }`}
          >
            News
          </Link>
          <Link 
            to="/contact" 
            className={`transition-colors ${
              isActiveRoute('/contact')
                ? 'text-red-600 border-b-2 border-red-600 pb-1'
                : 'text-gray-700 hover:text-red-600'
            }`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Call to Action - Desktop */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-red-600">
            <Phone className="w-4 h-4" />
            <span className="font-semibold">0717 100 100</span>
          </div>
          <button
            onClick={onScheduleVisit}
            className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-[#a51d2d] hover:text-white transition-colors"
          >
            Schedule a visit
          </button>
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
            
            {/* Mobile Ushirika Gardens Dropdown - Updated */}
            <div className="space-y-2">
              <Link to="/ushirika-gardens" className="block text-gray-700 font-semibold hover:text-red-600">
                Ushirika Gardens
              </Link>
              <div className="pl-4 space-y-2">
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleUjimaNavigation();
                  }}
                  className="block w-full text-left text-gray-600 hover:text-red-600"
                >
                  Ujima Park
                </button>
                <Link 
                  to="/uzuri-pines" 
                  className="block text-gray-600 hover:text-red-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Uzuri Pines
                </Link>
              </div>
            </div>
            
            {/* Mobile About Us - Updated with smooth scrolling */}
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-700 font-semibold hover:text-red-600">
                About Us
              </Link>
              <div className="pl-4 space-y-2">
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleSectionNavigation('who-we-are');
                  }}
                  className="block w-full text-left text-gray-600 hover:text-red-600"
                >
                  Who Are We
                </button>
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleSectionNavigation('why-choose-us');
                  }}
                  className="block w-full text-left text-gray-600 hover:text-red-600"
                >
                  Why Choose Us
                </button>
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleSectionNavigation('partners');
                  }}
                  className="block w-full text-left text-gray-600 hover:text-red-600"
                >
                  Meet Our Partners
                </button>
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
              <Link to="/resources" className="block text-gray-700 font-semibold hover:text-red-600">
                Resources
              </Link>
              <div className="pl-4 space-y-2">
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleResourcesNavigation('downloads');
                  }}
                  className="block w-full text-left text-gray-600 hover:text-red-600"
                >
                  Downloads
                </button>
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleResourcesNavigation('videos');
                  }}
                  className="block w-full text-left text-gray-600 hover:text-red-600"
                >
                  Videos
                </button>
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleResourcesNavigation('gallery');
                  }}
                  className="block w-full text-left text-gray-600 hover:text-red-600"
                >
                  Gallery
                </button>
              </div>
            </div>
            
            <Link to="/news" className="block text-gray-700 hover:text-red-600">
              News
            </Link>
            <Link to="/contact-us" className="block text-gray-700 hover:text-red-600">
              Contact Us
            </Link>
            
            <div className="pt-4 border-t">
              <div className="flex items-center space-x-2 text-red-600 mb-4">
                <Phone className="w-4 h-4" />
                <span className="font-semibold">0717 100 100</span>
              </div>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  onScheduleVisit && onScheduleVisit();
                }}
                className="block w-full bg-yellow-400 text-gray-900 px-6 py-2 rounded-lg font-semibold text-center hover:bg-[#a51d2d] transition-colors"
              >
                Schedule a visit
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;