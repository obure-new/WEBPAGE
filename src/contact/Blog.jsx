import React, { useState, useEffect } from 'react';
import { User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const [loadingStates, setLoadingStates] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero + Bottom Cards Slides Data
  const slides = [
    {
      key: 'religious',
      title:
        'THE ROLE OF RELIGIOUS INSTITUTIONS IN CONVINCING KENYANS TO TAKE UP INSURANCE PRODUCTS',
      bgImage:
        'https://ke.cicinsurancegroup.com/wp-content/uploads/2021/10/Umbrella-Scheme-Segregated.jpg',
    },
    {
      key: 'business',
      title: 'PROTECTING SMALL BUSINESSES FROM UNEXPECTED LOSSES',
      bgImage:
        'https://media.licdn.com/dms/image/v2/D4D12AQGOgg1TvpVlsA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1681891674314?e=2147483647&v=beta&t=En9_snb41V1nsbzyQo7lW8x8pnsrP4Qn0cYyj1RPoiY',
    },
    {
      key: 'brokers',
      title: 'HOW BROKERS AND AGENTS MAKE INSURANCE SIMPLE AND ACCESSIBLE',
      bgImage:
        'https://ke.cicinsurancegroup.com/wp-content/uploads/2021/10/Group-Life-Combined-Solution-1.jpg',
    },
    {
      key: 'fraud',
      title: 'TIPS ON HOW TO AVOID INSURANCE FRAUD AND SCAMS',
      bgImage:
        'https://ke.cicinsurancegroup.com/wp-content/uploads/2021/09/invest-plan-min.png',
    },
  ];

  // Auto-slide every 6s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // animations for cards
  useEffect(() => {
    const delays = [6000, 12000, 18000, 24000];
    const timeouts = delays.map((delay, i) =>
      setTimeout(() => {
        setLoadingStates((prev) => ({
          ...prev,
          [slides[i].key]: false,
        }));
      }, delay)
    );
    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section  */}
      <div
        className="relative h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-between transition-all duration-1000"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url("${slides[currentSlide].bgImage}")`,
        }}
      >
        <div className="flex-1 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            {/* Author Info */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-gray-600" />
              </div>
              <span className="text-white text-xs sm:text-sm font-medium">
                By Joy-Wanjiru In Blogs
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-white text-2xl md:text-3xl font-bold leading-tight max-w-3xl mb-6">
              {slides[currentSlide].title}
            </h1>

            {/* Read Article Button */}
            <button className="bg-yellow-500 hover:bg-[#a51d2d] hover:text-white text-black font-semibold px-6 py-3 rounded-full flex items-center space-x-2 transition-all duration-300 transform hover:scale-105">
              <span>Read Article</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Bottom Cards Section  */}
        <div className="px-6 pb-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {slides.map((slide, index) => (
                <div
                  key={slide.key}
                  className="relative h-56 rounded-lg overflow-hidden group cursor-pointer transform transition-all duration-300 hover:scale-105"
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url("${slide.bgImage}")` }}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                  </div>

                  {/* Content */}
                  <div className="relative h-full p-4 flex flex-col justify-end">
                    <h3 className="text-white text-xs sm:text-sm font-semibold leading-tight mb-3">
                      {slide.title}
                    </h3>

                    {/* Loading Bar with staggered effect */}
                    <div className="w-full bg-gray-600 rounded-full h-1 overflow-hidden">
                      <div
                        className={`h-full transition-all duration-1000 ease-out ${
                          loadingStates[slide.key]
                            ? 'bg-yellow-500 w-0 animate-pulse'
                            : 'bg-yellow-500 w-full'
                        }`}
                        style={{
                          width: loadingStates[slide.key] ? '30%' : '100%',
                          transition: 'width 1.5s ease-out',
                          transitionDelay: `${index * 0.5}s`,
                        }}
                      ></div>
                    </div>

                    {/* Loading Text */}
                    <div className="mt-1 text-[10px] text-gray-300">
                      {loadingStates[slide.key] ? 'Loading...' : 'Ready to read'}
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
  );
};

export default Blog;
