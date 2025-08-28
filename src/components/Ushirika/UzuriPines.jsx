import React from 'react';
import { Phone, MessageCircle, Download, Shield, TreePine, Square, Building, Navigation, Droplets, Lightbulb, Home } from 'lucide-react';

export default function UzuriPines() {
  const amenities = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Central manned gate with security systems"
    },
    {
      icon: <TreePine className="w-8 h-8" />,
      title: "Common area landscaping for serenity"
    },
    {
      icon: <Square className="w-8 h-8" />,
      title: "Boundary walling for privacy"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Commercial access for convenience"
    },
    {
      icon: <Navigation className="w-8 h-8" />,
      title: "Internal circulation roads in cabro standard"
    },
    {
      icon: <TreePine className="w-8 h-8" />,
      title: "Recreational spaces for leisure"
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Efficient drainage and footpaths"
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Reliable power and water supply"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Street Lighting"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Modern House"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Uzuri Pines
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Our second phase of prime, serviced, residential plots
            </p>
          </div>
        </div>
        
        {/* Floating WhatsApp Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <button className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 animate-pulse">
            <MessageCircle className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Introduction Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Uzuri (n) Swahili :// Of Beauty
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Missed out on Ujima Park? Don't fret....second times the charm! Uzuri Pines offers the same strong value proposition with a wider selection of plots to choose from.
          </p>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg">
            <p className="text-2xl font-semibold text-gray-800 mb-4">
              Subdivision scheme consists of <span className="text-blue-600 font-bold">138 ¼ acre plots</span>
            </p>
            <p className="text-lg text-gray-600">
              You can choose a <span className="font-semibold text-blue-600">¼ acre, ½ acre</span> or more.
            </p>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-red-600 mb-8">
            Get The Perfect Plot For Your Dream Home
          </h2>
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <img 
              src="https://ushirikagardens.cic.co.ke/wp-content/uploads/2025/06/UG-Uzuri-Pines-Map.webp" 
              alt="Uzuri Pines Development Map"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Pricing Section */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-8 rounded-2xl shadow-lg inline-block">
            <h3 className="text-3xl font-bold text-green-800 mb-4">Price: Ksh. 9.5M</h3>
            <p className="text-lg text-gray-700 mb-4">
              Please peruse the plot dimensions to see specific dimensions of the plots that interest you.
            </p>
            <div className="flex items-center justify-center gap-4 text-green-700 font-semibold">
              <Phone className="w-5 h-5" />
              <span>Book your site visit by calling or chatting 0717 100 100</span>
            </div>
          </div>
        </div>

        {/* Amenities Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-red-600 mb-12">
            A Quarter (¼) Acre At Ushirika Gardens Offers These Amenities
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-red-500"
              >
                <div className="text-red-500 mb-4">
                  {amenity.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {amenity.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Downloads Section */}
        <div className="text-center bg-gradient-to-r from-red-50 to-pink-50 p-12 rounded-2xl shadow-lg">
          <h2 className="text-4xl font-bold text-red-600 mb-8">Downloads</h2>
          <div className="space-y-4">
            <button className="flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg mx-auto">
              <Download className="w-5 h-5" />
              Schematic Uzuri Pines
            </button>
            <button className="flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg mx-auto">
              <Download className="w-5 h-5" />
              Plot dimensions Uzuri Pines
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-2xl shadow-2xl">
            <h2 className="text-3xl font-bold mb-6">Ready to Secure Your Plot?</h2>
            <p className="text-xl mb-8 opacity-90">
              Don't miss out on this opportunity to own prime real estate in Uzuri Pines
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call 0717 100 100
              </button>
              <button className="bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Chat with us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}