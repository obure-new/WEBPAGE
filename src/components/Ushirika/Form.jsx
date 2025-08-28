import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function RegistrationFormModal() {
  const [isOpen, setIsOpen] = useState(true);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    propertyLookingFor: '',
    purchaseTimeline: '',
    plotSize: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Registration submitted successfully!');
    setIsOpen(false);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-red-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-red-700 transition-all"
        >
          Open Registration Form
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-500/50 flex items-center justify-center p-4">
      {/* Modal Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-40" onClick={closeModal}></div>
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto z-50">
        {/* Close Button */}
        <button 
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Form Header */}
        <div className="text-center p-8 pb-4">
          <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
            Ushirika Gardens Registration Form
          </h1>
          <p className="text-gray-600 text-sm">
            Fields marked with an <span className="text-red-500">*</span> are required
          </p>
        </div>

        {/* Form Content */}
        <div className="px-8 pb-8">
          <div className="space-y-6">
            {/* Row 1: Full Name and Email */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name *"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all placeholder-gray-500"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all placeholder-gray-500"
                  required
                />
              </div>
            </div>

            {/* Row 2: Phone and City */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone*"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all placeholder-gray-500"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all placeholder-gray-500"
                />
              </div>
            </div>

            {/* Row 3: Property Type and Purchase Timeline */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  What do you look for in a property? (*)
                </label>
                <select
                  name="propertyLookingFor"
                  value={formData.propertyLookingFor}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all bg-white"
                  required
                >
                  <option value="">Select</option>
                  <option value="residential-plot">Residential Plot</option>
                  <option value="investment">Investment Opportunity</option>
                  <option value="family-home">Family Home Site</option>
                  <option value="retirement-home">Retirement Home</option>
                  <option value="commercial">Commercial Property</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  When would you like to purchase? (*)
                </label>
                <select
                  name="purchaseTimeline"
                  value={formData.purchaseTimeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all bg-white"
                  required
                >
                  <option value="">Select</option>
                  <option value="immediately">Immediately</option>
                  <option value="1-3-months">1-3 months</option>
                  <option value="3-6-months">3-6 months</option>
                  <option value="6-12-months">6-12 months</option>
                  <option value="over-1-year">Over 1 year</option>
                </select>
              </div>
            </div>

            {/* Row 4: Plot Size */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                What size of plot are you interested in?
              </label>
              <select
                name="plotSize"
                value={formData.plotSize}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all bg-white"
              >
                <option value="">Select</option>
                <option value="quarter-acre">¼ Acre</option>
                <option value="half-acre">½ Acre</option>
                <option value="three-quarter-acre">¾ Acre</option>
                <option value="one-acre">1 Acre</option>
                <option value="larger">Larger than 1 Acre</option>
              </select>
            </div>

            {/* Message Field */}
            <div>
              <textarea
                name="message"
                placeholder="Message..."
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all resize-none placeholder-gray-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                onClick={handleSubmit}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}