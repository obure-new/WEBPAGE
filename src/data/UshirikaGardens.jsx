import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Phone, Mail, MapPin, Home, Shield, Users, Zap, Trees, Building, Calendar, ExternalLink, Menu, X } from 'lucide-react';

const UshirikaGardens = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const heroSlides = [
    {
      title: "Land, Love and Legacy",
      subtitle: "Welcome to Ushirika Gardens",
      description: "A dream worth having"
    },
    {
      title: "Ujima Park",
      subtitle: "½ Acre serviced plots in a serene and secure environment",
      description: "Exclusive 144 Units. What's your address?"
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
    {
      icon: Shield,
      title: "Central manned gate with security systems",
      description: "24/7 security for peace of mind"
    },
    {
      icon: Building,
      title: "Boundary walling for privacy",
      description: "Complete perimeter security"
    },
    {
      icon: MapPin,
      title: "Internal circulation roads in cabro standard",
      description: "Well-maintained internal roads"
    },
    {
      icon: Zap,
      title: "Efficient drainage and footpaths",
      description: "Modern infrastructure design"
    },
    {
      icon: Trees,
      title: "Common area landscaping for serenity",
      description: "Beautiful green spaces"
    },
    {
      icon: Building,
      title: "Commercial access for convenience",
      description: "Easy access to amenities"
    },
    {
      icon: Users,
      title: "Recreational spaces for leisure",
      description: "Family-friendly environment"
    },
    {
      icon: Home,
      title: "Reliable power and water supply",
      description: "Essential utilities guaranteed"
    }
  ];

  const newsItems = [
    {
      image: "/api/placeholder/400/200",
      title: "CIC Insurance to subdivide 200 acre land for easy sale",
      excerpt: "CIC Insurance Group #ticker:CIC will subdivide its 200-acre land in Kiambu County into plots and sell...",
      readTime: "3 min read"
    },
    {
      image: "/api/placeholder/400/200", 
      title: "Gated Community Living",
      excerpt: "Living in a gated community in Kenya offers more than just a secure living environment—it also fosters a strong sense of community...",
      readTime: "5 min read"
    },
    {
      image: "/api/placeholder/400/200",
      title: "Hass Consult Land Index Q3 '23",
      excerpt: "Land prices in satellite towns grow at almost 7 times the rate of land in Nairobi...",
      readTime: "4 min read"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm relative z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
              <Home className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Ushirika</h1>
              <p className="text-sm text-red-600">Gardens</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-red-600 transition-colors">Ushirika Gardens</a>
            <a href="#about" className="text-gray-700 hover:text-red-600 transition-colors">About Us</a>
            <a href="#plots" className="text-gray-700 hover:text-red-600 transition-colors">Jenga</a>
            <a href="#resources" className="text-gray-700 hover:text-red-600 transition-colors">Resources</a>
            <a href="#news" className="text-gray-700 hover:text-red-600 transition-colors">News</a>
            <a href="#contact" className="text-gray-700 hover:text-red-600 transition-colors">Contact Us</a>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-red-600">
              <Phone className="w-4 h-4" />
              <span className="font-semibold">0717 100 100</span>
            </div>
            <button className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
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
              <a href="#home" className="block text-gray-700 hover:text-red-600">Ushirika Gardens</a>
              <a href="#about" className="block text-gray-700 hover:text-red-600">About Us</a>
              <a href="#plots" className="block text-gray-700 hover:text-red-600">Jenga</a>
              <a href="#resources" className="block text-gray-700 hover:text-red-600">Resources</a>
              <a href="#news" className="block text-gray-700 hover:text-red-600">News</a>
              <a href="#contact" className="block text-gray-700 hover:text-red-600">Contact Us</a>
              <div className="pt-4 border-t">
                <div className="flex items-center space-x-2 text-red-600 mb-4">
                  <Phone className="w-4 h-4" />
                  <span className="font-semibold">0717 100 100</span>
                </div>
                <button className="w-full bg-yellow-400 text-gray-900 px-6 py-2 rounded-lg font-semibold">
                  Schedule a visit
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-[70vh] lg:h-[80vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{
            backgroundImage: `linear-gradient(rgba(139, 69, 19, 0.7), rgba(139, 69, 19, 0.5)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect width="1200" height="800" fill="%23654321"/><polygon points="600,400 0,800 1200,800" fill="%23a0522d"/><circle cx="600" cy="300" r="50" fill="white"/></svg>')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/50 to-orange-800/30"></div>
        </div>
        
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
              <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                Explore Plots
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
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
              <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                View Available Plots
              </button>
            </div>
            <div className="relative">
              <img 
                src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'><rect width='600' height='400' fill='%23f0f8ff'/><rect x='50' y='100' width='500' height='200' fill='%23deb887' stroke='%23654321' stroke-width='3'/><rect x='100' y='120' width='80' height='100' fill='%238b4513'/><rect x='220' y='120' width='60' height='80' fill='%236495ed'/><rect x='320' y='140' width='60' height='60' fill='%236495ed'/><rect x='420' y='120' width='80' height='100' fill='%238b4513'/><polygon points='90,120 140,80 190,120' fill='%23a0522d'/><polygon points='410,120 460,80 510,120' fill='%23a0522d'/><rect x='50' y='320' width='500' height='60' fill='%23228b22'/><circle cx='150' cy='350' r='15' fill='%23006400'/><circle cx='300' cy='350' r='15' fill='%23006400'/><circle cx='450' cy='350' r='15' fill='%23006400'/></svg>" 
                alt="Ujima Park" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
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
                  <button className="mt-4 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">
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
          <h2 className="text-3xl lg:text-4xl font-bold text-red-600 text-center mb-12">Latest News</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-orange-500 flex items-center justify-center">
                    <Calendar className="w-16 h-16 text-white opacity-50" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {item.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{item.readTime}</span>
                    <button className="bg-red-600 text-white px-4 py-2 rounded text-sm hover:bg-red-700 transition-colors flex items-center space-x-1">
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

      {/* Footer */}
      <footer id="contact" className="bg-red-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <Home className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Ushirika Gardens</h3>
                  <p className="text-red-200 text-sm">A dream worth having.</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <p className="text-red-100">CIC Plaza, Mara Road, Upperhill Nairobi, Kenya.</p>
                <p className="text-red-100">Ushirika Gardens, Off the Ruiru - Kamiti Rd</p>
                <p className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span className="text-red-100">sales@ushirikagardens.cic.co.ke</span>
                </p>
                <p className="flex items-center space-x-2 text-xl font-bold">
                  <Phone className="w-5 h-5" />
                  <span>0717 100 100</span>
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-lg">Useful Links</h4>
              <ul className="space-y-2 text-red-100">
                <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Google Map to Site</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Download our Brochure</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-lg">Stay in the loop</h4>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <span className="text-sm">f</span>
                </div>
                <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <span className="text-sm">X</span>
                </div>
                <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <span className="text-sm">in</span>
                </div>
                <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <span className="text-sm">ig</span>
                </div>
                <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <span className="text-sm">yt</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="w-32 h-16 bg-yellow-400 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-red-600 font-bold text-lg">CIC</div>
                  <div className="text-red-600 text-xs">GROUP</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-red-500 mt-8 pt-8 text-center text-red-100">
            <p>Copyright 2023 © Ushirika Gardens. All rights reserved by CIC Group</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all hover:scale-110">
          <span className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <span className="text-green-500 text-xs font-bold">W</span>
            </div>
            <span className="hidden sm:block">Chat with us</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default UshirikaGardens;