
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Phone, Mail, MapPin, Home, Shield, Users, Zap, Trees, Building, Calendar, ExternalLink, Menu, X } from 'lucide-react';

const heroSlides = [
  {
    image:"https://ushirikagardens.cic.co.ke/wp-content/uploads/slider/cache/e1ca6bb26443c2d7e4008c82ae6771dc/Land.webp",
    title: "Land, Love and Legacy",
    subtitle: "Welcome to Ushirika Gardens",
    description: "A dream worth having"
  },
  {
    image:"https://ushirikagardens.cic.co.ke/wp-content/uploads/slider/cache/1d467f0c9d85e73c1a7ad7351e871dc8/Mama-1.jpg",
    title: "Secure a place for your family",
    subtitle: "Beyond Land is a pathway traquility",
    description: ""
  },
  {
    image:"https://ushirikagardens.cic.co.ke/wp-content/uploads/slider/cache/f0bcc56c2e3852c88172c1a3d43d166e/House.jpg",
    title: "Build Your Future",
    subtitle: "Premium Gated Community Living",
    description: "Where modern comfort meets natural serenity"
    
  }
];

const ujimaSlides = [
  {
    title: "Gentle Slope & Elevated Plots",
    description: "Perfect for modern family homes with stunning valley views. These plots offer the ideal foundation for your dream residence.",
    features: ["Valley Views", "Easy Construction", "Premium Location"],
    price: "KES 9 Million",
    image: "https://ushirikagardens.cic.co.ke/wp-content/uploads/slider/cache/18256c9ac146e0342400810e5614ed02/downslope-praire.webp"
  },
  {
    title: "Waterway Plots - Premium Selection",
    description: "Exclusive waterfront living with natural water features. These premium plots offer tranquility and a unique lifestyle experience.",
    features: ["Waterfront Access", "Natural Beauty", "Exclusive Living"],
    price: "KES 11 Million",
    image: "https://ushirikagardens.cic.co.ke/wp-content/uploads/slider/cache/2f31c1c7b253358d75f0d11c4dbb3cf2/UG-Schematic.webp"
  }
];

const plotTypes = [
  {
    type: "Gentle slope plots",
    price: "KES 9 Million",
    icon: Home
  },
  {
    type: "Elevated plots", 
    price: "KES 9 Million",
    icon: Home
  },
  {
    type: "Waterway plots",
    price: "KES 11 Million", 
    icon: Home
  }
];

const amenities = [
  { icon: Shield, title: "Central manned gate with security systems", description: "24/7 security for peace of mind" },
  { icon: Building, title: "Boundary walling for privacy", description: "Complete perimeter security" },
  { icon: MapPin, title: "Internal circulation roads in cabro standard", description: "Well-maintained internal roads" },
  { icon: Zap, title: "Efficient drainage and footpaths", description: "Modern infrastructure design" },
  { icon: Trees, title: "Common area landscaping for serenity", description: "Beautiful green spaces" },
  { icon: Building, title: "Commercial access for convenience", description: "Easy access to amenities" },
  { icon: Users, title: "Recreational spaces for leisure", description: "Family-friendly environment" },
  { icon: Home, title: "Reliable power and water supply", description: "Essential utilities guaranteed" }
];

const newsItems = [
  {
    image: "https://ushirikagardens.cic.co.ke/wp-content/uploads/2016/03/patrick-nyaga-cic-768x432.webp",
    title: "CIC Insurance to subdivide 200 acre land for easy sale",
    excerpt: "CIC Insurance Group #ticker:CIC will subdivide its 200-acre land in Kiambu County into plots and sell...",
    readTime: "3 min read"
  },
  {
    image: "https://ushirikagardens.cic.co.ke/wp-content/uploads/2016/03/shutterstock_1017132592-2-768x465.webp", 
    title: "Gated Community Living",
    excerpt: "Living in a gated community in Kenya offers more than just a secure living environment—it also fosters a strong sense of community...",
    readTime: "5 min read"
  },
  {
    image: "https://ushirikagardens.cic.co.ke/wp-content/uploads/2016/03/Nairobi_Skyline-768x484.webp",
    title: "Hass Consult Land Index Q3 '23",
    excerpt: "Land prices in satellite towns grow at almost 7 times the rate of land in Nairobi...",
    readTime: "4 min read"
  }
];

const UshirikaGardens = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentUjimaSlide, setCurrentUjimaSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [buttonPressed, setButtonPressed] = useState({ explore: false, learn: false, view: false });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentUjimaSlide((prev) => (prev + 1) % ujimaSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const nextUjimaSlide = () => {
    setCurrentUjimaSlide((prev) => (prev + 1) % ujimaSlides.length);
  };

  const prevUjimaSlide = () => {
    setCurrentUjimaSlide((prev) => (prev - 1 + ujimaSlides.length) % ujimaSlides.length);
  };

  const handleButtonClick = (buttonType) => {
    setButtonPressed(prev => ({ ...prev, [buttonType]: true }));
    setTimeout(() => {
      setButtonPressed(prev => ({ ...prev, [buttonType]: false }));
    }, 200);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* HS */}
      <section
  id="home"
  className="relative h-[70vh] lg:h-[80vh] overflow-hidden"
  style={{
    backgroundImage: `url(${heroSlides[currentSlide].image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Dark coor overlay  */}
  <div className="absolute inset-0 bg-black/40 z-0"></div>

  <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
    <div className="max-w-2xl text-white">
      <h2 className="text-4xl lg:text-6xl font-bold mb-4 leading-tight">
        {heroSlides[currentSlide].title}
      </h2>
      <h3 className="text-xl lg:text-2xl mb-4 text-yellow-200">
        {heroSlides[currentSlide].subtitle}
      </h3>
      <p className="text-lg lg:text-xl mb-8 opacity-90">
        {heroSlides[currentSlide].description}
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          className={`bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300 transform ${
            buttonPressed.explore
              ? "scale-95 bg-yellow-500 text-black shadow-inner"
              : "hover:scale-105"
          }`}
          onClick={() => handleButtonClick("explore")}
        >
          Explore Plots
        </button>
        <button
          className={`border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-300 transform ${
            buttonPressed.learn
              ? "scale-95 bg-yellow-500 text-black border-yellow-500 shadow-inner"
              : "hover:scale-105"
          }`}
          onClick={() => handleButtonClick("learn")}
        >
          Learn More
        </button>
      </div>
    </div>
  </div>

  {/* Nav Arrows */}
  <button
    onClick={prevSlide}
    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-yellow-400/80 p-3 rounded-full transition-all duration-300 hover:scale-110"
  >
    <ChevronLeft className="w-6 h-6 text-white hover:text-black" />
  </button>
  <button
    onClick={nextSlide}
    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-yellow-400/80 p-3 rounded-full transition-all duration-300 hover:scale-110"
  >
    <ChevronRight className="w-6 h-6 text-white hover:text-black" />
  </button>

  {/* Slide Indicator */}
  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
    {heroSlides.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentSlide(index)}
        className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
          index === currentSlide
            ? "bg-yellow-400"
            : "bg-white/50 hover:bg-white/80"
        }`}
      />
    ))}
  </div>
</section>


      {/* About Sec */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto">
            <span className="text-red-600 font-semibold italic">Ushirika</span> is a Swahili word that encapsulates the essence of collaboration and togetherness. A community, where everyone is part of a close-knit enclave.
          </p>
          
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-red-600 mb-6">Our Commitment</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              To provide you with an ideal canvas to build your dream home. To create an outstanding gated community that will be enjoyed and admired for generations to come.
            </p>
          </div>
        </div>
      </section>

      {/* Ujima Park Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-yellow-500 mb-6">Ujima Park</h2>
              <div className="space-y-4 mb-6">
                <p className="text-lg">
                  <span className="font-bold text-red-600">½ Acre</span> serviced plots in a serene and secure environment.
                </p>
                <p className="text-lg">
                  Introducing <span className="font-bold text-red-600">Ujima Park</span> at Ushirika Gardens.
                </p>
                <p className="text-lg">
                  Choose from an option of Gentle Slope, Elevated, and Waterway Plots.
                </p>
                <p className="text-lg font-bold text-red-600">
                  Exclusive 144 Units. What's your address?
                </p>
              </div>
              <button 
                className={`bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300 transform ${
                  buttonPressed.view ? 'scale-95 bg-yellow-500 text-black shadow-inner' : 'hover:scale-105'
                }`}
                onClick={() => handleButtonClick('view')}
              >
                View Available Plots
              </button>
            </div>
            
            {/* Ujima Park Image Slider */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg shadow-lg h-96">
                <div 
                  className="flex transition-transform duration-500 ease-in-out h-full"
                  style={{ transform: `translateX(-${currentUjimaSlide * 100}%)` }}
                >
                  {ujimaSlides.map((slide, index) => (
                    <div key={index} className="min-w-full h-full relative">
                      <img 
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                        <div className="p-6 text-white">
                          <h3 className="text-xl font-bold mb-2">{slide.title}</h3>
                          <p className="text-sm mb-3 opacity-90">{slide.description}</p>
                          <div className="flex flex-wrap gap-2 mb-2">
                            {slide.features.map((feature, idx) => (
                              <span key={idx} className="bg-yellow-500 text-black px-2 py-1 rounded text-xs font-medium">
                                {feature}
                              </span>
                            ))}
                          </div>
                          <p className="text-yellow-400 font-bold text-lg">{slide.price}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ujima Navigation Arrows */}
              <button 
                onClick={prevUjimaSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-yellow-400/80 p-2 rounded-full transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-5 h-5 text-white hover:text-black" />
              </button>
              <button 
                onClick={nextUjimaSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-yellow-400/80 p-2 rounded-full transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-5 h-5 text-white hover:text-black" />
              </button>

              {/* Ujima Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {ujimaSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentUjimaSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentUjimaSlide ? 'bg-yellow-400' : 'bg-white/50 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Sec */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-700 transition-colors">
                  <amenity.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm leading-tight">
                  {amenity.title}
                </h3>
                <p className="text-gray-600 text-sm">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="plots" className="py-16 bg-gradient-to-b from-pink-100 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {plotTypes.map((plot, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-red-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-red-700 transition-colors">
                    <plot.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{plot.type}</h3>
                  <p className="text-2xl font-bold text-red-600">{plot.price}</p>
                  <button className="mt-4 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-500 transition-colors">
                    Inquire Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Beyond Land Philosophy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-red-600 mb-6">Beyond Land Philosophy</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              We understand our residents want something more than just a piece of earth. It's why CIC Group is embarking to go the whole 9 yard and give you a property worth your dime.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-red-600 mb-4">Beyond Land</h3>
              <p className="text-gray-600 mb-4 font-semibold">It's a pathway to tranquility.</p>
              <p className="text-gray-700">
                The hustle of the city and its fast-paced environment can take a toll. Your home can provide an escape and a much-needed reset. With the Mukuyu forest as its backdrop, teeming with bird life and nature elements, Ushirika Gardens is poised to be the epitome of fine suburban living.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-red-600 mb-4">Beyond Land</h3>
              <p className="text-gray-600 mb-4 font-semibold">It's the legacy you could build.</p>
              <p className="text-gray-700">
                We work so hard for a significant part of our lives top own a home that will be enjoyed by ourselves and our loved ones. The search for the ideal location to build ends at Ushirika Gardens. Welcome Home.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Latest News */}
<section id="news" className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl lg:text-4xl font-bold text-red-600 text-center mb-12">
      Latest News
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {newsItems.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
        >
          {/* Image Sec */}
          <div className="h-48 relative overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Content Sec */}
          <div className="p-6">
            <h3 className="font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
              {item.title}
            </h3>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              {item.excerpt}
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{item.readTime}</span>
              <button className="bg-[#a51d2d] text-white px-4 py-2 rounded text-sm hover:bg-yellow-400 transition-colors flex items-center space-x-1">
                <span>Read More</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


    </div>
  );
};

export default UshirikaGardens;