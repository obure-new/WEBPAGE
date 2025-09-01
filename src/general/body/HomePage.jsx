import React, { useState, useEffect } from 'react';
import { Package, DollarSign, Users } from 'lucide-react';

// Hero Slider
const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [countdown, setCountdown] = useState(5);

  const slides = [
    {
      country: "Kenya",
      backgroundImage: "url('https://images.pexels.com/photos/259447/pexels-photo-259447.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop')",
      products: 24,
      gwp: '67.50',
      totalAssets: '89',
      buttonText: "View Kenya Website"
    },
    {
      country: "Uganda",
      backgroundImage: "url('https://images.pexels.com/photos/3889855/pexels-photo-3889855.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop')",
      products: 19,
      gwp: '48.25',
      totalAssets: '52',
      buttonText: "View Uganda Website"
    },
    {
      country: "Malawi",
      backgroundImage: "url('https://images.pexels.com/photos/2363/nature-animal-photography-portrait.jpg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop')",
      products: 15,
      gwp: '32.40',
      totalAssets: '38',
      buttonText: "View Malawi Website"
    },
    {
      country: "South Sudan",
      backgroundImage: "url('https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop')",
      products: 12,
      gwp: '28.90',
      totalAssets: '31',
      buttonText: "View South Sudan Website"
    }
  ];

  const currentSlideData = slides[currentSlide];

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
          return 5;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div 
      className="relative h-screen bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: currentSlideData.backgroundImage }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center w-full">
          {/* Left Side - Country Flags */}
          <div className="flex flex-col gap-4 lg:w-20">
            {slides.map((slide, index) => (
              <img 
                key={index}
                src={
                  index === 0 ? "https://www.cicinsurancegroup.com/wp-content/uploads/2021/08/kenya.png" :
                  index === 1 ? "https://www.cicinsurancegroup.com/wp-content/uploads/2021/06/uganda.png" :
                  index === 2 ? "https://www.cicinsurancegroup.com/wp-content/uploads/2021/06/malawi.png" :
                  "https://www.cicinsurancegroup.com/wp-content/uploads/2021/06/SSudan.png"
                }
                alt={`${slide.country} Flag`}
                className={`w-12 h-8 rounded shadow-md object-cover transition-all duration-300 cursor-pointer ${
                  index === currentSlide 
                    ? 'ring-4 ring-yellow-400 ring-opacity-80 scale-110 shadow-lg' 
                    : 'opacity-70 hover:opacity-100 hover:scale-105'
                }`}
                onClick={() => {
                  setCurrentSlide(index);
                  setCountdown(5);
                }}
              />
            ))}
          </div>

          {/* Right Side - Content */}
          <div className="text-white text-right lg:pr-8">
            <h1 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight">
              MORE THAN FIVE DECADES
            </h1>
            <p className="text-xl lg:text-1xl mb-8 font-medium">
              HELPING PEOPLE ACHIEVE FINANCIAL SECURITY IN {currentSlideData.country.toUpperCase()}
            </p>
            <button className="bg-yellow-400 text-black px-8 py-3 rounded-full hover:bg-yellow-300 transition-colors font-semibold">
              {currentSlideData.buttonText}
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
          <div className="grid grid-cols-3 gap-8 text-white text-center">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Package className="w-8 h-8 mr-2 text-yellow-400" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold">{currentSlideData.products}</div>
              <div className="text-lg">Products</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <DollarSign className="w-8 h-8 mr-2 text-yellow-400" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold">
                {currentSlideData.country === 'Kenya' ? 'KSh' : 
                 currentSlideData.country === 'Uganda' ? 'UGX' : 
                 currentSlideData.country === 'Malawi' ? 'MWK' : 'SSP'}{currentSlideData.gwp}Bn
              </div>
              <div className="text-lg">GWP</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-8 h-8 mr-2 text-yellow-400" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold">
                {currentSlideData.country === 'Kenya' ? 'KSh' : 
                 currentSlideData.country === 'Uganda' ? 'UGX' : 
                 currentSlideData.country === 'Malawi' ? 'MWK' : 'SSP'}{currentSlideData.totalAssets}Bn
              </div>
              <div className="text-lg">Total Assets</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Commitment Section
const CommitmentSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-red-600 text-lg font-semibold mb-2 tracking-wide">CIC GROUP</h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">Our Commitment</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We are always aiming to exceed customer expectations and provide creative solutions to meet any kind of 
              demand. Keeping up with emerging trends and market needs.
            </p>
            <button className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors font-semibold">
              READ MORE
            </button>
          </div>
          <div className="relative">
            <img 
              src="https://www.cicinsurancegroup.com/wp-content/uploads/2021/06/Clip.jpg" 
              alt="Business professionals working together"
              className="w-full h-96 object-cover rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-red-600 to-transparent opacity-10 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Awards Section with Hover Effects
const AwardsSection = () => {
  const awards = [
    {
      title: "Think Business Insurance Awards:",
      subtitle: "CIC Life Assurance",
      description: "Winner Life Insurer of the year:",
      year: "2023",
      trophy: "https://www.cicinsurancegroup.com/wp-content/uploads/2024/03/Medical-Underwriting-of-the-year-Group-Medical-245x245.png"
    },
    {
      title: "Think Business Insurance Awards:",
      subtitle: "CIC Life Assurance", 
      description: "The Most Customer- Centric Underwriter – Life",
      year: "2023",
      trophy: "https://www.cicinsurancegroup.com/wp-content/uploads/2024/03/Medical-Underwriting-of-the-year-Group-Medical-245x245.png"
    },
    {
      title: "Think Business Insurance Awards:",
      subtitle: "CIC General Insurance",
      description: "Medical Underwriter Of The Year Group Medical",
      year: "2023",
      trophy: "https://www.cicinsurancegroup.com/wp-content/uploads/2024/03/Medical-Underwriting-of-the-year-Group-Medical-245x245.png"
    },
    {
      title: "Think Business Insurance awards:",
      subtitle: "CIC General Insurance",
      description: "Best Insurance In Product Innovation", 
      year: "2023",
      trophy: "https://www.cicinsurancegroup.com/wp-content/uploads/2024/03/Medical-Underwriting-of-the-year-Group-Medical-245x245.png"
    }
  ];

   return (
    <section className="py-20 bg-yellow-400 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-yellow-500"></div>
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-red-600 mb-16">Our Awards</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-500 hover:bg-gradient-to-br hover:from-red-50 hover:to-yellow-50 group cursor-pointer border-2 border-transparent hover:border-red-200"
            >
              <div className="mb-6 group-hover:animate-bounce">
                <div className="w-28 h-32 mx-auto bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden shadow-md group-hover:shadow-lg transition-shadow">
                  <img 
                    src={award.trophy} 
                    alt="Award Trophy" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                  />
                </div>
              </div>
              <h3 className="text-sm font-semibold text-gray-800 mb-3 group-hover:text-red-600 transition-colors duration-300">
                {award.title}
              </h3>
              <h4 className="text-sm font-medium text-gray-700 mb-3 group-hover:text-red-500 transition-colors duration-300">
                {award.subtitle}
              </h4>
              <p className="text-sm text-gray-600 mb-3 group-hover:text-gray-800 transition-colors duration-300 leading-relaxed">
                {award.description}
              </p>
              <p className="text-sm font-bold text-gray-800 group-hover:text-red-600 transition-colors duration-300">
                Year: {award.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Single full-page component
const HomePage = () => {
  return (
    <div>
      <HeroSlider />
      <CommitmentSection />
      <AwardsSection />
    </div>
  );
};

export default HomePage;