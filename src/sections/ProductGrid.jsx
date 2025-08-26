import React, { useState, useEffect, useRef } from 'react';

const AnimatedCounter = ({ end, duration = 2000, suffix = '', prefix = '', decimals = 0 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          const increment = end / (duration / 16);
          let current = 0;
          
          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(current);
            }
          }, 16);
          
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <span ref={elementRef}>
      {prefix}{count.toFixed(decimals)}{suffix}
    </span>
  );
};

const ProductGrid = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const features = ['Experience and Expertise', 'Most Dynamic Insurer', 'Reliable Track Record'];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-200">
      {/* Section1 */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Bg Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url('https://www.ugandasafaristours.com/wp-content/uploads/2024/12/fairmontnorfolkhotel6.jpg')`
          }}
        >
          <div className="absolute inset-0 backdrop-blur-md" />
        </div>
        
        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              At CIC, we keep our word
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              The CIC Group has for more than five decades shouldered the risks of Kenyans by providing 
              flexible insurance and financial services built around their needs.
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16 mb-16 w-full max-w-6xl">
            {/* Products */}
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-white mb-2">
                <AnimatedCounter end={125} suffix="+" />
              </div>
              <div className="text-lg md:text-xl text-gray-300 font-medium">Products</div>
            </div>

            {/* GWP */}
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-white mb-2">
                Ksh <AnimatedCounter end={23.68} decimals={2} />
              </div>
              <div className="text-lg md:text-xl text-gray-300 font-medium">
                <span className="block">Bn</span>
                <span className="text-sm">GWP</span>
              </div>
            </div>

            {/* Total Assets */}
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-white mb-2">
                Ksh <AnimatedCounter end={46.70} decimals={2} />
              </div>
              <div className="text-lg md:text-xl text-gray-300 font-medium">
                <span className="block">Bn</span>
                <span className="text-sm">Total Assets</span>
              </div>
            </div>

            {/* Market Share */}
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-white mb-2">
                <AnimatedCounter end={8.10} decimals={2} suffix="%" />
              </div>
              <div className="text-lg md:text-xl text-gray-300 font-medium">Market Share</div>
            </div>
          </div>

          {/* Feature Carousel */}
          <div className="w-full max-w-4xl">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-white transition-all duration-500">
                {features[activeFeature]}
              </h2>
            </div>

            {/* Dots */}
            <div className="flex justify-center space-x-4">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeFeature 
                      ? 'bg-white scale-125' 
                      : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default ProductGrid;