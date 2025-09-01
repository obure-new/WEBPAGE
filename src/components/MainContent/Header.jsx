import { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ChevronDown, Menu, X, Twitter, Instagram, Linkedin, Youtube, Globe, Briefcase, Phone, Mail, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const hoverTimeoutRef = useRef(null);
  const location = useLocation();

  const primaryNavItems = [
    { name: 'CIC GROUP', href: '/cic-group' },
    { name: 'INSURANCE PRODUCTS', href: '#', hasDropdown: true },
    { name: 'BLOGS', href: '/blog' },
    { name: 'EVENTS', href: '/events' },
    { name: 'CAREER', href: '/career' },
    { name: 'CONTACT US', href: '/homecontactus' },
    { name: 'COMPLAINTS', href: '/complaints' },
    { name: 'USHIRIKA GARDENS', href: '/ushirika-gardens' },
  ];

  const secondaryNavItems = [
    { name: 'Home', href: '/' },
    { name: 'Pharmacy', href: '/pharmacy' },
    { name: 'Individual Solutions', href: '/individual', hasDropdown: true },
    { name: 'Business Solutions', href: '/business', hasDropdown: true },
    { name: 'Corporate Solutions', href: '/corporate', hasDropdown: true },
    { name: 'Cooperative Solutions', href: '/cooperative', hasDropdown: true },
    { name: 'Claims', href: '/claims' },
    { name: 'Self-Service', href: '#', hasDropdown: true },
  ];

  const handleDropdownMouseEnter = (dropdownName) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setActiveDropdown(dropdownName);
  };

  const handleDropdownMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const clearHoverTimeout = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  return (
    <div>
      <header className="w-full">
        {/* Primary Navigation */}
        <div className="bg-white shadow-sm border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center m-0 p-0">
                <img src="https://cdn.brandfetch.io/idlMz2AeCB/w/554/h/448/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1751871656810" alt="Logo" className="h-10 w-auto m-0 p-0" />
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex flex-1 justify-center space-x-4">
                {primaryNavItems.map((item) => (
                  <div 
                    key={item.name} 
                    className="relative group"
                    onMouseEnter={() => {
                      if (item.hasDropdown) {
                        handleDropdownMouseEnter(item.name);
                      }
                    }}
                    onMouseLeave={() => {
                      if (item.hasDropdown) {
                        handleDropdownMouseLeave();
                      }
                    }}
                  >
                    {item.href && item.href !== '#' ? (
                      <Link
                        to={item.href}
                        className="text-gray-700 hover:text-[#a51d2d] px-2 py-1 text-sm font-medium transition-colors duration-200 flex items-center"
                      >
                        {item.name}
                        {item.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                      </Link>
                    ) : (
                      <button className="text-gray-700 hover:text-[#a51d2d] px-2 py-1 text-sm font-medium transition-colors duration-200 flex items-center">
                        {item.name}
                        {item.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                      </button>
                    )}

                    {/* Insurance Products Dropdown */}
                    {item.name === 'INSURANCE PRODUCTS' && activeDropdown === 'INSURANCE PRODUCTS' && (
                      <div 
                        className="absolute left-1/2 transform -translate-x-1/2 top-full mt-0 w-[300px] bg-white rounded-2xl shadow-xl border border-gray-200 z-[100]"
                        onMouseEnter={() => {
                          clearHoverTimeout();
                          handleDropdownMouseEnter('INSURANCE PRODUCTS');
                        }}
                        onMouseLeave={handleDropdownMouseLeave}
                      >
                        <div className="p-6">
                          <ul className="space-y-3">
                            <li>
                              <Link 
                                to="/generalinsurance" 
                                className="text-[#a51d2d] font-medium cursor-pointer hover:underline transition-all duration-150 block py-1"
                                onClick={() => setActiveDropdown(null)}
                              >
                                General Insurance
                              </Link>
                            </li>
                            <li>
                              <Link 
                                to="/lifeinsurance" 
                                className="text-[#a51d2d] font-medium cursor-pointer hover:underline transition-all duration-150 block py-1"
                                onClick={() => setActiveDropdown(null)}
                              >
                                Life Insurance
                              </Link>
                            </li>
                            <li>
                              <Link 
                                to="/assetmanagement" 
                                className="text-[#a51d2d] font-medium cursor-pointer hover:underline transition-all duration-150 block py-1"
                                onClick={() => setActiveDropdown(null)}
                              >
                                Asset Management
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Right Side */}
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
        <div className="bg-yellow-500 mt-[64px]">
          <div className="max-w-14xl mx-auto px-4 sm:px-4 lg:px-4">
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
              <nav className="hidden lg:flex items-center space-x-1">
                {secondaryNavItems.map((item) => (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => {
                      if (item.hasDropdown) {
                        handleDropdownMouseEnter(item.name);
                      }
                    }}
                    onMouseLeave={() => {
                      if (item.hasDropdown) {
                        handleDropdownMouseLeave();
                      }
                    }}
                  >
                    {(item.name === 'Individual Solutions' || item.name === 'Business Solutions' || item.name === 'Corporate Solutions' || item.name === 'Cooperative Solutions' || item.name === 'Claims') ? (
                      <Link
                        to={item.href}
                        className={`px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center ${
                          location.pathname === item.href
                            ? 'text-white bg-black bg-opacity-20 rounded'
                            : 'text-gray-800 hover:text-white hover:bg-black hover:bg-opacity-10 rounded'
                        }`}
                        onClick={() => setActiveDropdown(null)}
                      >
                        {item.name}
                      </Link>
                    ) : item.hasDropdown || item.href === '#' ? (
                      <button
                        className={`px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center ${
                          location.pathname === item.href
                            ? 'text-white bg-black bg-opacity-20 rounded'
                            : 'text-gray-800 hover:text-white hover:bg-black hover:bg-opacity-10 rounded'
                        }`}
                      >
                        {item.name}
                      </button>
                    ) : (
                      <Link
                        to={item.href}
                        className={`px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center ${
                          location.pathname === item.href
                            ? 'text-white bg-black bg-opacity-20 rounded'
                            : 'text-gray-800 hover:text-white hover:bg-black hover:bg-opacity-10 rounded'
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}

                    {/* Individual Solutions Dropdown */}
                    {item.name === 'Individual Solutions' && activeDropdown === 'Individual Solutions' && (
                      <div 
                        className="absolute left-1/2 transform -translate-x-1/2 top-full mt-0 w-[600px] bg-white rounded-2xl shadow-xl border border-gray-200 z-[100]"
                        onMouseEnter={() => {
                          clearHoverTimeout();
                          handleDropdownMouseEnter('Individual Solutions');
                        }}
                        onMouseLeave={handleDropdownMouseLeave}
                      >
                        <div className="flex">
                          {/* Left side */}
                          <div className="w-1/2 p-6 flex flex-col items-center justify-center">
                            <div className="bg-[#f7f7f7] rounded-xl p-6 flex flex-col items-center w-full">
                              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-3">
                                <div className="text-[#a51d2d] text-lg">💝</div>
                              </div>
                              <div className="text-lg font-semibold text-gray-900 mb-2 text-center">Protect who and what you value</div>
                              <div className="text-gray-700 text-sm text-center mb-4 leading-relaxed">
                                Protect & grow what you have. We are here to help you plan a better future.
                              </div>
                              <div className="text-[#a51d2d] text-sm font-medium mb-3 text-center">
                                Need personal assistance? <Link to="/contact" className="underline hover:no-underline">Contact Us</Link>
                              </div>
                              <div className="flex space-x-4">
                                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-600 transition-colors">
                                  <MessageCircle className="h-4 w-4 text-white" />
                                </div>
                                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                                  <Phone className="h-4 w-4 text-white" />
                                </div>
                                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors">
                                  <Mail className="h-4 w-4 text-white" />
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Right side */}
                          <div className="w-1/2 p-6">
                            <ul className="space-y-2">
                              {[
                                'Easy Bima',
                                'Motor Private Insurance',
                                'Motor Commercial Insurance',
                                'Home Insurance',
                                'Seniors Mediplan',
                                'Money Market Fund',
                                'Personal Accident',
                                'Academia',
                                'Jipange Plus',
                                'Haba Haba na CIC',
                                'Smart Saver',
                                'Professional Indemnity'
                              ].map((product) => {
                                const hash = product.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                                return (
                                  <li key={product}>
                                    <Link
                                      to={`/individual#${hash}`}
                                      className="text-[#a51d2d] font-medium cursor-pointer hover:underline transition-all duration-150 block"
                                      onClick={() => setActiveDropdown(null)}
                                    >
                                      {product}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Corporate Solutions Dropdown */}
                    {item.name === 'Corporate Solutions' && activeDropdown === 'Corporate Solutions' && (
                      <div 
                        className="absolute left-1/2 transform -translate-x-1/2 top-full mt-0 w-[600px] bg-white rounded-2xl shadow-xl border border-gray-200 z-[100]"
                        onMouseEnter={() => {
                          clearHoverTimeout();
                          handleDropdownMouseEnter('Corporate Solutions');
                        }}
                        onMouseLeave={handleDropdownMouseLeave}
                      >
                        <div className="flex">
                          {/* Left side */}
                          <div className="w-1/2 p-6 flex flex-col items-center justify-center">
                            <div className="bg-[#f7f7f7] rounded-xl p-6 flex flex-col items-center w-full">
                              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-3">
                                <div className="text-[#a51d2d] text-lg">🏢</div>
                              </div>
                              <div className="text-lg font-semibold text-gray-900 mb-2 text-center">The support you need to keep going</div>
                              <div className="text-gray-700 text-sm text-center mb-4 leading-relaxed">
                                You have worked hard to get here, we are here to make sure that you keep going.
                              </div>
                              <div className="text-[#a51d2d] text-sm font-medium mb-3 text-center">
                                Need personal assistance? <Link to="/contact" className="underline hover:no-underline">Contact Us</Link>
                              </div>
                              <div className="flex space-x-4">
                                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-600 transition-colors">
                                  <MessageCircle className="h-4 w-4 text-white" />
                                </div>
                                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                                  <Phone className="h-4 w-4 text-white" />
                                </div>
                                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors">
                                  <Mail className="h-4 w-4 text-white" />
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Right side */}
                          <div className="w-1/2 p-6">
                            <ul className="space-y-2">
                              {[
                                'Afya Bora',
                                'Motor Commercial Insurance',
                                'Motor Private',
                                'WIBA',
                                'Personal Accident',
                                'Corporate Medisure',
                                'Money Market Fund',
                                'Income Draw Down',
                                'Fire Insurance',
                                'Jipange Plus',
                                'Property Insurance'
                              ].map((product) => (
                                <li key={product}>
                                  <Link to="#" className="text-[#a51d2d] font-medium cursor-pointer hover:underline transition-all duration-150 block">
                                    {product}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Cooperative Solutions Dropdown */}
                    {item.name === 'Cooperative Solutions' && activeDropdown === 'Cooperative Solutions' && (
                      <div 
                        className="absolute left-1/2 transform -translate-x-1/2 top-full mt-0 w-[600px] bg-white rounded-2xl shadow-xl border border-gray-200 z-[100]"
                        onMouseEnter={() => {
                          clearHoverTimeout();
                          handleDropdownMouseEnter('Cooperative Solutions');
                        }}
                        onMouseLeave={handleDropdownMouseLeave}
                      >
                        <div className="flex">
                          {/* Left side */}
                          <div className="w-1/2 p-6 flex flex-col items-center justify-center">
                            <div className="bg-[#f7f7f7] rounded-xl p-6 flex flex-col items-center w-full">
                              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-3">
                                <div className="text-[#a51d2d] text-lg">🤝</div>
                              </div>
                              <div className="text-lg font-semibold text-gray-900 mb-2 text-center">Walking with you</div>
                              <div className="text-gray-700 text-sm text-center mb-4 leading-relaxed">
                                Let us pull together. In the direction of your success.
                              </div>
                              <div className="text-[#a51d2d] text-sm font-medium mb-3 text-center">
                                Need personal assistance? <Link to="/contact" className="underline hover:no-underline">Contact Us</Link>
                              </div>
                              <div className="flex space-x-4">
                                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-600 transition-colors">
                                  <MessageCircle className="h-4 w-4 text-white" />
                                </div>
                                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                                  <Phone className="h-4 w-4 text-white" />
                                </div>
                                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors">
                                  <Mail className="h-4 w-4 text-white" />
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Right side */}
                          <div className="w-1/2 p-6">
                            <ul className="space-y-2">
                              {[
                                'Motor Commercial Insurance',
                                'Money Market Fund',
                                'Loan Guard',
                                'Board Endowment',
                                'Employee Group Life',
                                'WIBA',
                                'Group Credit Life',
                                'Fire Industrial',
                                'CoopCare Health Insurance',
                                'CIC Umbrella Retirement Benefits Scheme'
                              ].map((product) => (
                                <li key={product}>
                                  <Link to="#" className="text-[#a51d2d] font-medium cursor-pointer hover:underline transition-all duration-150 block">
                                    {product}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Business Solutions Dropdown */}
                    {item.name === 'Business Solutions' && activeDropdown === 'Business Solutions' && (
                      <div 
                        className="absolute left-1/2 transform -translate-x-1/2 top-full mt-0 w-[600px] bg-white rounded-2xl shadow-xl border border-gray-200 z-[100]"
                        onMouseEnter={() => {
                          clearHoverTimeout();
                          handleDropdownMouseEnter('Business Solutions');
                        }}
                        onMouseLeave={handleDropdownMouseLeave}
                      >
                        <div className="flex">
                          {/* Left side */}
                          <div className="w-1/2 p-6 flex flex-col items-center justify-center">
                            <div className="bg-[#f7f7f7] rounded-xl p-6 flex flex-col items-center w-full">
                              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-3">
                                <Briefcase className="h-6 w-6 text-[#a51d2d]" />
                              </div>
                              <div className="text-lg font-semibold text-gray-900 mb-2 text-center">Protect your business</div>
                              <div className="text-gray-700 text-sm text-center mb-4 leading-relaxed">
                                We take care of your business, so that you can take care of business.
                              </div>
                              <div className="text-[#a51d2d] text-sm font-medium mb-3 text-center">
                                Need personal assistance? <Link to="/contact" className="underline hover:no-underline">Contact Us</Link>
                              </div>
                              <div className="flex space-x-4">
                                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-600 transition-colors">
                                  <MessageCircle className="h-4 w-4 text-white" />
                                </div>
                                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                                  <Phone className="h-4 w-4 text-white" />
                                </div>
                                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors">
                                  <Mail className="h-4 w-4 text-white" />
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Right side */}
                          <div className="w-1/2 p-6">
                            <ul className="space-y-2">
                              {[
                                'Easy Bima',
                                'Motor Commercial Insurance',
                                'Motor Private',
                                'WIBA',
                                'Personal Accident',
                                'SME Medipack',
                                'Money Market Fund',
                                'Fire Insurance',
                                'Income Draw Down',
                                'Jipange Plus',
                                'Property Insurance'
                              ].map((product) => (
                                <li key={product}>
                                  <Link to="#" className="text-[#a51d2d] font-medium cursor-pointer hover:underline transition-all duration-150 block">
                                    {product}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Self-Service Dropdown */}
                    {item.name === 'Self-Service' && activeDropdown === 'Self-Service' && (
                      <div 
                        className="absolute left-1/2 transform -translate-x-1/2 top-full mt-0 w-[400px] bg-white rounded-2xl shadow-xl border border-gray-200 z-[100]"
                        onMouseEnter={() => {
                          clearHoverTimeout();
                          handleDropdownMouseEnter('Self-Service');
                        }}
                        onMouseLeave={handleDropdownMouseLeave}
                      >
                        <div className="p-6">
                          <ul className="space-y-2">
                            {[
                              'Online Portal',
                              'Mobile App',
                              'Policy Management',
                              'Claims Submission',
                              'Premium Payment'
                            ].map((service) => (
                              <li key={service}>
                                <Link to="#" className="text-[#a51d2d] font-medium cursor-pointer hover:underline transition-all duration-150 block">
                                  {service}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
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

        {/* Mobile Menu - Red Sidebar */}
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 top-16"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Sidebar */}
            <div className="lg:hidden fixed top-16 left-0 bottom-0 z-50 w-80 bg-[#a51d2d] text-white overflow-y-auto">
              <div className="p-6">
                {/* Primary Nav Items */}
                <div className="space-y-4 mb-6">
                  {primaryNavItems.map((item) => (
                    <div key={item.name}>
                      {item.href && item.href !== '#' ? (
                        <Link
                          to={item.href}
                          className="text-white hover:text-yellow-200 block py-2 text-lg font-medium transition-colors relative group"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></div>
                        </Link>
                      ) : (
                        <button className="text-white hover:text-yellow-200 block py-2 text-lg font-medium w-full text-left transition-colors relative group">
                          {item.name}
                          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></div>
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                {/* Secondary Nav Items */}
                <div className="space-y-2">
                  {secondaryNavItems.map((item) => (
                    <div key={item.name} className="border-b border-red-400 border-opacity-30 pb-2">
                      {item.hasDropdown ? (
                        <div>
                          <button 
                            className="text-white font-semibold text-base py-2 w-full text-left flex items-center justify-between relative group"
                            onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                          >
                            {item.name}
                            <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></div>
                          </button>
                          
                          {/* Dropdown Content */}
                          {activeDropdown === item.name && (
                            <div className="mt-2 pl-4 space-y-2">
                              {item.name === 'Individual Solutions' && (
                                <div>
                                  <div className="text-yellow-200 text-sm mb-3 leading-relaxed">
                                    Protect & grow what you have. We are here to help you plan a better future.
                                  </div>
                                  {[
                                    'Easy Bima',
                                    'Motor Private Insurance',
                                    'Motor Commercial Insurance',
                                    'Home Insurance',
                                    'Seniors Mediplan',
                                    'Money Market Fund',
                                    'Personal Accident',
                                    'Academia',
                                    'Jipange Plus',
                                    'Haba Haba na CIC',
                                    'Smart Saver',
                                    'Professional Indemnity'
                                  ].map((product) => {
                                    const hash = product.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                                    return (
                                      <Link
                                        key={product}
                                        to={`/individual#${hash}`}
                                        className="block text-white text-sm py-1 hover:text-yellow-200 transition-colors relative group"
                                        onClick={() => setIsMenuOpen(false)}
                                      >
                                        {product}
                                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></div>
                                      </Link>
                                    );
                                  })}
                                </div>
                              )}
                              
                              {item.name === 'Business Solutions' && (
                                <div>
                                  <div className="text-yellow-200 text-sm mb-3 leading-relaxed">
                                    We take care of your business, so that you can take care of business.
                                  </div>
                                  {[
                                    'Easy Bima',
                                    'Motor Commercial Insurance',
                                    'Motor Private',
                                    'WIBA',
                                    'Personal Accident',
                                    'SME Medipack',
                                    'Money Market Fund',
                                    'Fire Insurance',
                                    'Income Draw Down',
                                    'Jipange Plus',
                                    'Property Insurance'
                                  ].map((product) => (
                                    <Link
                                      key={product}
                                      to="#"
                                      className="block text-white text-sm py-1 hover:text-yellow-200 transition-colors relative group"
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      {product}
                                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></div>
                                    </Link>
                                  ))}
                                </div>
                              )}

                              {item.name === 'Corporate Solutions' && (
                                <div>
                                  <div className="text-yellow-200 text-sm mb-3 leading-relaxed">
                                    You have worked hard to get here, we are here to make sure that you keep going.
                                  </div>
                                  {[
                                    'Afya Bora',
                                    'Motor Commercial Insurance',
                                    'Motor Private',
                                    'WIBA',
                                    'Personal Accident',
                                    'Corporate Medisure',
                                    'Money Market Fund',
                                    'Income Draw Down',
                                    'Fire Insurance',
                                    'Jipange Plus',
                                    'Property Insurance'
                                  ].map((product) => (
                                    <Link
                                      key={product}
                                      to="#"
                                      className="block text-white text-sm py-1 hover:text-yellow-200 transition-colors relative group"
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      {product}
                                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></div>
                                    </Link>
                                  ))}
                                </div>
                              )}

                              {item.name === 'Cooperative Solutions' && (
                                <div>
                                  <div className="text-yellow-200 text-sm mb-3 leading-relaxed">
                                    Let us pull together. In the direction of your success.
                                  </div>
                                  {[
                                    'Motor Commercial Insurance',
                                    'Money Market Fund',
                                    'Loan Guard',
                                    'Board Endowment',
                                    'Employee Group Life',
                                    'WIBA',
                                    'Group Credit Life',
                                    'Fire Industrial',
                                    'CoopCare Health Insurance',
                                    'CIC Umbrella Retirement Benefits Scheme'
                                  ].map((product) => (
                                    <Link
                                      key={product}
                                      to="#"
                                      className="block text-white text-sm py-1 hover:text-yellow-200 transition-colors relative group"
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      {product}
                                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></div>
                                    </Link>
                                  ))}
                                </div>
                              )}

                              {item.name === 'Self-Service' && (
                                <div>
                                  <div className="text-yellow-200 text-sm mb-3 leading-relaxed">
                                    Quick and easy self-service options for your convenience.
                                  </div>
                                  {[
                                    'Online Portal',
                                    'Mobile App',
                                    'Policy Management',
                                    'Claims Submission',
                                    'Premium Payment'
                                  ].map((service) => (
                                    <Link
                                      key={service}
                                      to="#"
                                      className="block text-white text-sm py-1 hover:text-yellow-200 transition-colors relative group"
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      {service}
                                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></div>
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      ) : item.href === '#' ? (
                        <button className={`text-white font-semibold text-base py-2 w-full text-left relative group ${
                          location.pathname === item.href ? 'text-yellow-200' : 'hover:text-yellow-200'
                        } transition-colors`}>
                          {item.name}
                          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></div>
                        </button>
                      ) : (
                        <Link 
                          to={item.href} 
                          className={`text-white font-semibold text-base py-2 block w-full text-left relative group ${
                            location.pathname === item.href ? 'text-yellow-200' : 'hover:text-yellow-200'
                          } transition-colors`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></div>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </header>
    </div>
  );
};

export default Header;