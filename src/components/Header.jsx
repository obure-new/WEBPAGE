import { useState } from 'react';
import { Search, ChevronDown, Menu, X, Twitter, Instagram, Linkedin, Youtube, Globe } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const primaryNavItems = [
    { name: 'CIC GROUP', href: '#' },
    { name: 'INSURANCE PRODUCTS', href: '#', hasDropdown: true },
    { name: 'LEADERSHIP', href: '#' },
    { name: 'EVENTS', href: '#' },
    { name: 'CAREER', href: '#' },
    { name: 'CONTACT US', href: '#' },
    { name: 'COMPLAINTS', href: '#' },
    { name: 'USHIRIKA GARDENS', href: '#' },
  ];

  const secondaryNavItems = [
    { name: 'Home', href: '#', active: true },
    { name: 'Pharmacy', href: '#' },
    { name: 'Individual Solutions', href: '#' },
    { name: 'Business Solutions', href: '#' },
    { name: 'Corporate Solutions', href: '#' },
    { name: 'Cooperative Solutions', href: '#' },
    { name: 'Claims', href: '#' },
    { name: 'Self-Service', href: '#', hasDropdown: true },
  ];

  return (
    <header className="w-full">
      {/* Primary Navigation */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo  */}
            <div className="flex-shrink-0 flex items-center m-0 p-0">
              <img src="https://cdn.brandfetch.io/idlMz2AeCB/w/554/h/448/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1751871656810" alt="Logo" className="h-10 w-auto m-0 p-0" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex flex-1 justify-center space-x-4">
              {primaryNavItems.map((item) => (
                <div key={item.name} className="relative group">
                  <button className="text-gray-700 hover:text-red-600 px-2 py-1 text-sm font-medium transition-colors duration-200 flex items-center">
                    {item.name}
                    {item.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                  </button>
                </div>
              ))}
            </nav>

            {/* Right */}
            <div className="flex items-center space-x-4">
              {/* Social Icons */}
              <div className="hidden md:flex items-center space-x-5">
                <Twitter className="h-5 w-5 text-black-500 hover:text-[#a51d2d] transition-colors cursor-pointer mr-[4px]" />
                <Instagram className="h-5 w-5 text-black-500 hover:text-[#a51d2d] transition-colors cursor-pointer mr-[4px]" />
                <Linkedin className="h-5 w-5 text-black-500 hover:text-[#a51d2d] transition-colors cursor-pointer mr-[4px]" />
                <Youtube className="h-5 w-5 text-black-500 hover:text-[#a51d2d] transition-colors cursor-pointer" />
              </div>
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-md text-black-400 hover:text-black-500 hover:bg-gray-100"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Navigation */}
      <div className="bg-yellow-500">
        <div className="max-w-15xl mx-auto px-4 sm:px-4 lg:px-4">
          <div className="flex items-center justify-between h-12">
            {/* Search */}
            <div className="flex items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-600" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-8 pr-4 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Secondary Nav Items */}
            <nav className="hidden lg:flex items-center space-x-4">
              {secondaryNavItems.map((item) => (
                <div key={item.name} className="relative group">
                  <button className={`px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center ${
                    item.active 
                      ? 'text-white bg-black bg-opacity-20 rounded' 
                      : 'text-gray-800 hover:text-white hover:bg-black hover:bg-opacity-10 rounded'
                  }`}>
                    {item.name}
                    {item.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                  </button>
                </div>
              ))}
            </nav>

            {/* Country Selector */}
            <div className="hidden md:flex items-center space-x-2">
              <select className="bg-transparent text-[#a51d2d] text-sm font-medium focus:outline-none cursor-pointer">
                <option>KE</option>
                <option>SS</option>
                <option>UG</option>
                <option>MW</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            {primaryNavItems.map((item) => (
              <button key={item.name} className="text-gray-700 hover:text-red-600 block px-3 py-2 text-base font-medium w-full text-left">
                {item.name}
              </button>
            ))}
            <div className="border-t border-gray-200 pt-3">
              {secondaryNavItems.map((item) => (
                <button key={item.name} className={`block px-3 py-2 text-base font-medium w-full text-left ${
                  item.active ? 'text-red-600 bg-red-50' : 'text-gray-700 hover:text-red-600'
                }`}>
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;