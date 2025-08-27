import React, { useState } from 'react';

const ClaimsInformation = () => {
  const [activeTab, setActiveTab] = useState('Motor');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    idPassport: '',
    policyNumber: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Claim submitted successfully!');
  };

  const tabs = ['Motor', 'Fire & Theft', 'Personal / Group Accident', 'Ordinary Life Claims', 'WIBA'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative h-[70vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://media.istockphoto.com/id/1400577239/photo/one-mature-african-american-using-his-phone-while-standing-in-studio-isolated-against-a.jpg?s=612x612&w=0&k=20&c=-5lYonaqI0Lj82Y9rtxmDXZQppoDnRQF8OQ6VeWgaUc=')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
  <div className="relative z-10 flex items-center justify-between h-full px-8 md:px-16">
          <div className="text-white max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight drop-shadow-lg">
              Make a claim fast and easy with just a few steps.
            </h1>
            <div className="flex gap-4">
              <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold transition-colors duration-300 transform hover:scale-105 hover:bg-[#a51d2d] hover:text-white shadow-lg">
                File a Claim
              </button>
              <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold transition-colors duration-300 transform hover:scale-105 hover:bg-[#a51d2d] hover:text-white shadow-lg">
                Learn More
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="w-64 h-64 bg-white bg-opacity-20 rounded-full flex items-center justify-center shadow-lg">
              <div className="w-32 h-32 bg-orange-400 rounded-lg flex items-center justify-center">
                <div className="w-16 h-20 bg-black rounded-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Claims Instructions */}
      <div className="py-12 px-8 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg mb-8 text-gray-700">
            To make a claim, please click on the relevant link and read through and download the claim form.<br />
            Fill in the claim form and forward it to us along with the required documents.
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center mb-8 bg-gray-100 rounded-lg p-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 mx-1 my-1 ${
                  activeTab === tab
                    ? 'bg-yellow-400 text-black shadow-md'
                    : 'text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Claims Process Cont */}
          {activeTab === 'Motor' && (
            <div className="grid md:grid-cols-2 gap-12 text-left">
              <div>
                <h2 className="text-2xl font-bold text-red-600 mb-6">CLAIM PROCESS</h2>
                <ol className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="font-bold text-black mr-2">1.</span>
                    <div>
                      Report the accident or theft to the <strong>Police</strong> immediately but not later than{' '}
                      <strong>24 hours</strong> and obtain a police abstract
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-black mr-2">2.</span>
                    <div>
                      Report the accident to <strong>CIC</strong> immediately through{' '}
                      <strong className="text-blue-600">0703 099 120</strong> or{' '}
                      <strong className="text-blue-600">020 282 3000</strong>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-black mr-2">3.</span>
                    <div>
                      Do <strong>Not Accept</strong> liability in case of an accident
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-black mr-2">4.</span>
                    <div>
                      Call <strong>AA of Kenya</strong> on <strong className="text-blue-600">020 697 9000</strong> or{' '}
                      <strong className="text-blue-600">0709 933 000</strong> if you need to tow the vehicle from the scene of the accident (for comprehensive insurance only)
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-black mr-2">5.</span>
                    <div>
                      Clear with the police and take the vehicle to any of our <strong>Recommended</strong> garages within Nairobi (if outside Nairobi take the vehicle to a garage of your choice) and <strong>Notify</strong> us.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-black mr-2">6.</span>
                    <div>Complete and return a claim form obtainable in all our offices and website.</div>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-black mr-2">7.</span>
                    <div>
                      Attach the <strong>Police Abstract</strong> and a <strong>copy of the driving license</strong> of the person who was driving the vehicle at the time of the accident or loss.
                    </div>
                  </li>
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-red-600 mb-6">REQUIRED DOCUMENTS</h2>
                <ol className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="font-bold text-black mr-2">1.</span>
                    <div>Original police abstract</div>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-black mr-2">2.</span>
                    <div>Copy of the driving license for the person driving the vehicle during the accident</div>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-black mr-2">3.</span>
                    <div>Policy excess</div>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-black mr-2">4.</span>
                    <div>Assessor's report</div>
                  </li>
                </ol>

                <div className="mt-8 p-4 border border-gray-300 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Download motor claims form</span>
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold transition-colors duration-200">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Submit Claim Form */}
      <div className="py-12 px-8 md:px-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Submit your claim</h2>
          <p className="text-center text-gray-600 mb-8">
            Please upload the duly filled form(s) together with all required documents as stipulated under the claims process section.
          </p>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-semibold text-red-600 mb-6">Kindly fill in the form below</h3>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ID/Passport Number<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="idPassport"
                    value={formData.idPassport}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Policy Number<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="policyNumber"
                    value={formData.policyNumber}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Duly Filled Claim Form(s)
                </label>
                <p className="text-sm text-gray-500 mb-3">upload</p>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <button
                    type="button"
                    className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
                  >
                    Select files
                  </button>
                  <p className="text-gray-500 text-sm mt-2">No files selected</p>
                </div>
              </div>

              <div className="text-center pt-6">
                <button
                  onClick={handleSubmit}
                  className="bg-yellow-400 hover:bg-yellow-500 text-black px-12 py-3 rounded-full font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaimsInformation;