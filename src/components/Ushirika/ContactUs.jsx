import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 to-blue-600/80 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-red-600 mb-6">Shiriki Nasi</h2>
            <p className="text-gray-600 mb-2">We are open:</p>
            <div className="flex items-center gap-2 text-gray-700 mb-2">
              <Clock className="w-4 h-4" />
              <span>Monday to Saturday 8:00am – 6:00pm</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700 mb-6">
              <Clock className="w-4 h-4" />
              <span>Sunday 2:00pm – 4:00pm</span>
            </div>
            <p className="text-gray-600 mb-8">
              Site visits outside these timelines can be scheduled on request.
            </p>

            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Your message..."
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all resize-none"
                ></textarea>
              </div>
              
              <button
                onClick={handleSubmit}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-red-600 mb-6">For Inquiries Contact</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-red-600 mt-1" />
                <div>
                  <p className="font-semibold text-gray-800">Phone</p>
                  <p className="text-gray-600">0717 100 100</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-red-600 mt-1" />
                <div>
                  <p className="font-semibold text-gray-800">Email</p>
                  <p className="text-gray-600">sales@ushirikagardens.cic.co.ke</p>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-bold text-gray-800 mb-3">Corporate Headquarters</h3>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-red-600 mt-1" />
                  <div>
                    <p className="text-gray-700">CIC Plaza, Mara Rd, Upperhill</p>
                    <p className="text-gray-700">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-bold text-gray-800 mb-3">Property</h3>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-red-600 mt-1" />
                  <div>
                    <p className="text-gray-700">Ushirika Gardens</p>
                    <p className="text-gray-700">Along Kangundo Rd</p>
                    <p className="text-gray-700">Ruai, Nairobi</p>
                    <p className="text-gray-700">Kiambu, Kenya</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Aerial View Section */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Aerial view of Ushirika Gardens"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>

        {/* Interactive Map Section */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="relative h-96">
              {/* Map Container */}
              <div className="w-full h-full bg-green-100 relative overflow-hidden">
                {/* Simulated Map Interface */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-blue-200">
                  {/* Map Controls */}
                  <div className="absolute top-4 left-4 bg-white rounded-lg shadow-md p-2 z-10">
                    <div className="text-sm font-semibold text-gray-700 mb-1">Ushirika Gardens</div>
                    <div className="text-xs text-gray-500">Kangundo Road, Ruai</div>
                  </div>
                  
                  {/* Zoom Controls */}
                  <div className="absolute top-4 right-4 bg-white rounded-lg shadow-md overflow-hidden z-10">
                    <button className="block w-8 h-8 flex items-center justify-center hover:bg-gray-100 border-b text-lg font-bold">+</button>
                    <button className="block w-8 h-8 flex items-center justify-center hover:bg-gray-100 text-lg font-bold">-</button>
                  </div>

                  {/* Location Marker */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full z-20">
                    <div className="w-8 h-8 bg-red-600 rounded-full border-4 border-white shadow-lg relative">
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-red-600"></div>
                    </div>
                  </div>

                  {/* Simulated Road Lines */}
                  <div className="absolute inset-0">
                    <svg className="w-full h-full opacity-30">
                      <path d="M0,200 Q200,180 400,200 T800,200" stroke="#666" strokeWidth="3" fill="none" />
                      <path d="M200,0 L200,400" stroke="#666" strokeWidth="2" fill="none" />
                      <path d="M400,100 L400,300" stroke="#666" strokeWidth="2" fill="none" />
                    </svg>
                  </div>

                  {/* Location Labels */}
                  <div className="absolute bottom-20 left-20 bg-white px-3 py-1 rounded-full shadow-md text-xs font-medium">
                    Kangundo Rd
                  </div>
                  
                  <div className="absolute top-20 right-32 bg-white px-3 py-1 rounded-full shadow-md text-xs font-medium">
                    Ruai Town
                  </div>

                  {/* Google Maps Attribution Style */}
                  <div className="absolute bottom-2 right-2 text-xs text-gray-500 bg-white px-2 py-1 rounded">
                    Map data ©2025
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-8 rounded-2xl shadow-2xl">
            <h2 className="text-3xl font-bold mb-6">Ready to Visit Ushirika Gardens?</h2>
            <p className="text-xl mb-8 opacity-90">
              Schedule your site visit today and discover your future home
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-red-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2">
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

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 animate-pulse">
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}