import React from "react";
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Mail, 
  Clock,
  CreditCard,
  Pill,
  Heart,
  Car,
  Package
} from 'lucide-react';

const pharmacySlide = {
  image: "/images/carousel/slide4.jpg",
  title: "Welcome to CIC Pharmacy <br /> Caring Beyond Prescriptions",
  description: "",
};

const services = [
  {
    icon: <Pill className="h-8 w-8 text-[#a51d2d]" />,
    title: "Prescription Services",
    description: "Expert dispensing and personalized medical advice to help you stay on track."
  },
  {
    icon: <Package className="h-8 w-8 text-[#a51d2d]" />,
    title: "Over The Counter Medications",
    description: "Stock up on everyday essentials—cold remedies, pain relief, and more."
  },
  {
    icon: <Heart className="h-8 w-8 text-[#a51d2d]" />,
    title: "Health & Wellness Products",
    description: "Vitamins, supplements, skincare, and beauty items for total well-being."
  },
  {
    icon: <Car className="h-8 w-8 text-[#a51d2d]" />,
    title: "Home Delivery & Drive-Through",
    description: "Get your medication without leaving your home or car. Fast. Easy. Reliable."
  }
];

const CICPharmacy = () => (
  <div className="min-h-screen bg-white">
    {/* Hero Section with background image and slide content */}
    <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${pharmacySlide.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      <div className="relative z-20 flex flex-col items-start justify-center text-white text-left w-full h-full px-8 max-w-2xl">
        <h2
          className="text-4xl font-bold mb-4 drop-shadow-lg"
          dangerouslySetInnerHTML={{ __html: pharmacySlide.title }}
        />
        <p className="text-lg mb-6 drop-shadow">{pharmacySlide.description}</p>
      </div>
    </div>

    {/* Main Pharmacy Content */}
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-[#a51d2d] text-xl font-bold mb-4 tracking-wider">CIC GROUP</h1>
        </div>
        {/* Logo */}
        <div className="mb-12 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-yellow-400 via-red-500 to-[#a51d2d] p-1">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                <div className="text-blue-600 text-4xl font-bold">+</div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-[#a51d2d] text-2xl font-bold mb-8 tracking-wide">CIC PHARMACY</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-[#a51d2d] mb-8 leading-tight">
          Your Trusted Partner in Affordable,<br />
          Convenient, and Quality Healthcare
        </h3>
        <p className="text-gray-700 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
          At CIC Pharmacy, we go beyond simply filling prescriptions—we're here to support your full wellness journey. 
          Whether you're managing a condition, boosting your immunity, or shopping for daily health essentials, we're 
          committed to giving you high-quality care with a personal touch.
        </p>
      </div>
    </section>

    {/* Services Section */}
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#a51d2d] text-center mb-16">What We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-100 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Convenience Section */}
    <section className="py-16 px-4 bg-gradient-to-r from-gray-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#a51d2d] mb-8">Convenience at your doorstep</h2>
        <div className="mb-8">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-12 py-4 rounded-full text-lg transition-all duration-300 hover:transform hover:scale-105 shadow-lg">
            Order now
          </button>
        </div>
      </div>
    </section>

    {/* Contact & Information Section */}
    <section className="bg-yellow-400 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Visit Us */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Visit Us</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-[#a51d2d] mt-1 flex-shrink-0" />
                <span className="text-[#a51d2d] font-medium">Mara Rd, Opposite KMA</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-[#a51d2d] flex-shrink-0" />
                <span className="text-[#a51d2d] font-medium">0728 227 070</span>
              </div>
              <div className="flex items-center space-x-4">
                <MessageCircle className="h-6 w-6 text-[#a51d2d] flex-shrink-0" />
                <span className="text-[#a51d2d] font-medium">0115 222 777</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-[#a51d2d] flex-shrink-0" />
                <span className="text-[#a51d2d] font-medium">cicpharmacy@cic.co.ke</span>
              </div>
            </div>
          </div>
          {/* Opening Hours */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Opening Hours</h3>
            <div className="space-y-6">
              <div>
                <div className="flex items-start space-x-4 mb-2">
                  <div className="w-8 h-8 bg-[#a51d2d] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Monday to Sunday</div>
                    <div className="text-gray-700">8:00 AM - 9:00 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Payment Methods */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Payment Methods</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CreditCard className="h-6 w-6 text-[#a51d2d]" />
                <span className="text-gray-700">Visa, MasterCard, American Express</span>
              </div>
              <div className="flex items-center space-x-3">
                <CreditCard className="h-6 w-6 text-[#a51d2d]" />
                <span className="text-gray-700">Mobile Money (M-Pesa, Airtel Money)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Footer Section */}
    <footer className="bg-gray-800 py-8">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400 text-sm">
          &copy; 2023 CIC Pharmacy. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
);

export default CICPharmacy;