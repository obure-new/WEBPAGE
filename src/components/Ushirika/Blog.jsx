import React, { useState, useEffect } from 'react';
import { User, ArrowRight } from 'lucide-react';

const InsuranceBlogLayout = () => {
  const [loadingStates, setLoadingStates] = useState({
    religious: true,
    business: true,
    brokers: true,
    fraud: true
  });

  // Simulate different loading times for each section
  useEffect(() => {
    const timeouts = [
      setTimeout(() => setLoadingStates(prev => ({ ...prev, religious: false })), 2000),
      setTimeout(() => setLoadingStates(prev => ({ ...prev, business: false })), 3000),
      setTimeout(() => setLoadingStates(prev => ({ ...prev, brokers: false })), 4000),
      setTimeout(() => setLoadingStates(prev => ({ ...prev, fraud: false })), 5000)
    ];

    return () => timeouts.forEach(clearTimeout);
  }, []);

  const sections = [
    {
      key: 'religious',
      title: 'THE ROLE OF RELIGIOUS INSTITUTIONS IN CONVINCING KENYANS TO TAKE UP INSURANCE PRODUCTS',
      bgImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      loading: loadingStates.religious
    },
    {
      key: 'business',
      title: 'PROTECTING SMALL BUSINESSES FROM UNEXPECTED LOSSES',
      bgImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
      loading: loadingStates.business
    },
    {
      key: 'brokers',
      title: 'HOW BROKERS AND AGENTS MAKE INSURANCE SIMPLE AND ACCESSIBLE',
      bgImage: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
      loading: loadingStates.brokers
    },
    {
      key: 'fraud',
      title: 'TIPS ON HOW TO AVOID INSURANCE FRAUD AND SCAMS',
      bgImage: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=300&fit=crop',
      loading: loadingStates.fraud
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div 
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1559526324-593bc073d938?w=1200&h=800&fit=crop")'
        }}
      >
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            {/* Author Info */}
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-gray-600" />
              </div>
              <span className="text-white text-sm font-medium">By Joy-Wanjiru In Blogs</span>
            </div>

            {/* Main Title */}
            <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight max-w-4xl mb-8">
              HOW BROKERS AND AGENTS MAKE
              <br />
              INSURANCE SIMPLE AND ACCESSIBLE
            </h1>

            {/* Read Article Button */}
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 rounded-full flex items-center space-x-2 transition-all duration-300 transform hover:scale-105">
              <span>Read Article</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            {/* Bottom Cards Section */}
            <div className="absolute bottom-0 left-0 right-0 px-6 pb-8">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {sections.map((section, index) => (
                    <div 
                      key={section.key}
                      className="relative h-64 rounded-lg overflow-hidden group cursor-pointer transform transition-all duration-300 hover:scale-105"
                    >
                      {/* Background Image */}
                      <div 
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url("${section.bgImage}")` }}
                      >
                        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                      </div>

                      {/* Content */}
                      <div className="relative h-full p-6 flex flex-col justify-end">
                        <h3 className="text-white text-sm font-semibold leading-tight mb-4">
                          {section.title}
                        </h3>

                        {/* Loading Bar */}
                        <div className="w-full bg-gray-600 rounded-full h-1 overflow-hidden">
                          <div 
                            className={`h-full transition-all duration-1000 ease-out ${
                              section.loading 
                                ? 'bg-yellow-500 w-0 animate-pulse' 
                                : 'bg-yellow-500 w-full'
                            }`}
                            style={{
                              width: section.loading ? '30%' : '100%',
                              transition: 'width 2s ease-out'
                            }}
                          ></div>
                        </div>

                        {/* Loading Text */}
                        <div className="mt-2 text-xs text-gray-300">
                          {section.loading ? 'Loading...' : 'Ready to read'}
                        </div>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-yellow-500 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsuranceBlogLayout;