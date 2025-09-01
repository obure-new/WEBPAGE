import { useState } from 'react';
import { Download } from 'lucide-react';

const Complaint = () => {
  const [formData, setFormData] = useState({
    name: '',
    idNumber: '',
    email: '',
    phoneNumber: '',
    complaintType: '',
    complaintDescription: '',
    suggestions: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Complaint submitted:', formData);
    // Handle form submission here
    alert('Complaint submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50">


      {/* Form Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Complaint Form</h2>
            <p className="text-gray-600">Complaint? Let us know</p>
          </div>

          <div className="space-y-6">
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-yellow-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="idNumber"
                  placeholder="ID Number"
                  value={formData.idNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-yellow-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-gray-400"
                  required
                />
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-yellow-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-yellow-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-gray-400"
                  required
                />
              </div>
            </div>

            {/* Complaint Type */}
            <div>
              <select
                name="complaintType"
                value={formData.complaintType}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-yellow-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-700"
                required
              >
                <option value="">Type of Complaint</option>
                <option value="claims">Claims Related</option>
                <option value="policy">Policy Issues</option>
                <option value="service">Customer Service</option>
                <option value="billing">Billing/Payment</option>
                <option value="technical">Technical Issues</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Complaint Description */}
            <div>
              <textarea
                name="complaintDescription"
                placeholder="Description of Complaint"
                value={formData.complaintDescription}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 border-2 border-yellow-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-gray-400 resize-vertical"
                required
              />
            </div>

            {/* Suggestions */}
            <div>
              <textarea
                name="suggestions"
                placeholder="How can we make things right"
                value={formData.suggestions}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border-2 border-yellow-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-gray-400 resize-vertical"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                onClick={handleSubmit}
                className="bg-[#a51d2d] text-white px-8 py-3 rounded-full font-semibold hover:bg-red-800 transition-colors duration-200 shadow-lg"
              >
                Submit Complaint
              </button>
            </div>
          </div>
        </div>

        {/* Complaint Handling Procedure */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Complaint Handling Procedure
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-gray-900">Title</th>
                  <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-gray-900">Year</th>
                  <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-gray-900">Downloads</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">
                    Complaint Handling Procedure
                  </td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">
                    2022
                  </td>
                  <td className="border border-gray-300 px-6 py-4">
                    <button className="bg-[#a51d2d] text-white px-4 py-2 rounded-md font-medium hover:bg-red-800 transition-colors duration-200 flex items-center space-x-2">
                      <Download className="h-4 w-4" />
                      <span>Download</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complaint;