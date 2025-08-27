import { Linkedin } from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200">
      {/* Yellow top stripe */}
      <div className="h-1 bg-yellow-400"></div>
      
      <div className="px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            
            {/* Logo Section */}
            <div className="lg:col-span-1">
              <div className="mb-8">
                {/* CIC Logo image */}
                <div className="flex flex-col items-start">
                  <img src="https://cdn.brandfetch.io/idqET1HYHr/w/322/h/270/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1753222672607" alt="CIC Logo" className="h-16 w-auto mb-2" />
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
              <h3 className="text-black font-semibold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-gray-700 hover:text-red-700 transition-colors">Claims</a></li>
                <li><a href="#" className="text-gray-700 hover:text-red-700 transition-colors">Staff mail</a></li>
                <li><a href="#" className="text-gray-700 hover:text-red-700 transition-colors">Blogs</a></li>
                <li><a href="#" className="text-gray-700 hover:text-red-700 transition-colors">Careers</a></li>
              </ul>
            </div>

            {/* Useful Links */}
            <div className="lg:col-span-1">
              <h3 className="text-black font-semibold text-lg mb-6">Useful Links</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-gray-700 hover:text-red-700 transition-colors">Data Privacy Statement</a></li>
                <li><a href="#" className="text-gray-700 hover:text-red-700 transition-colors">Terms Of Use</a></li>
                <li><a href="#" className="text-gray-700 hover:text-red-700 transition-colors">M-bima</a></li>
                <li><a href="#" className="text-gray-700 hover:text-red-700 transition-colors">Capital Markets Authority</a></li>
                <li><a href="#" className="text-gray-700 hover:text-red-700 transition-colors">Insurance Regulatory Authority</a></li>
                <li><a href="#" className="text-gray-700 hover:text-red-700 transition-colors">Nairobi Securities Exchange</a></li>
                <li><a href="#" className="text-gray-700 hover:text-red-700 transition-colors">Whistleblowing</a></li>
                <li><a href="#" className="text-gray-700 hover:text-red-700 transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-700 hover:text-red-700 transition-colors">Service Charter</a></li>
                <li><a href="#" className="text-gray-700 hover:text-red-700 transition-colors">Understand Insurance</a></li>
                <li><a href="#" className="text-gray-700 hover:text-red-700 transition-colors">Key Partners</a></li>
              </ul>
            </div>

            {/* The Company */}
            <div className="lg:col-span-1">
              <h3 className="text-black font-semibold text-lg mb-6">The Company</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-gray-700 hover:text-red-700 transition-colors">CIC General Insurance</a></li>
                <li><a href="#" className="text-gray-700 hover:text-red-700 transition-colors">CIC Life Assurance</a></li>
                <li><a href="#" className="text-gray-700 hover:text-red-700 transition-colors">CIC Asset Management</a></li>
                <li><a href="#" className="text-gray-700 hover:text-red-700 transition-colors">CIC Diaspora</a></li>
              </ul>
            </div>

            {/* Locate Us */}
            <div className="lg:col-span-1">
              <h3 className="text-black font-semibold text-lg mb-6">Locate Us</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-gray-700 hover:text-red-700 transition-colors">Head Office</a></li>
                <li><a href="#" className="text-gray-700 hover:text-red-700 transition-colors">Our Branches</a></li>
                <li><a href="#" className="text-gray-700 hover:text-red-700 transition-colors">CIC Approved Garages</a></li>
                <li><a href="#" className="text-gray-700 hover:text-red-700 transition-colors">Afya Bora Panel</a></li>
                <li><a href="#" className="text-gray-700 hover:text-red-700 transition-colors">Corporate Provider Panel</a></li>
                <li><a href="#" className="text-gray-700 hover:text-red-700 transition-colors">Coopcare Provider Panel</a></li>
                <li><a href="#" className="text-gray-700 hover:text-red-700 transition-colors">Additional Providers</a></li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-12 pt-8 border-t border-gray-300">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              
              {/* Copyright */}
              <div className="text-gray-600 text-sm">
                © 2025 CIC Group
              </div>

              {/* Social Media Icons */}
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;