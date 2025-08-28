import React from 'react';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* About Us Hero */}
      <div className="relative h-[75vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Agricultural landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-start pl-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            About Us
          </h1>
        </div>
      </div>

      {/* CIC Group Section - Who Are We */}
      <div id="who-we-are" className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">CIC Group</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We are a world-class provider of insurance and other financial services.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-5xl mx-auto">
            CIC Group has shouldered the risks of clients by providing flexible insurance and financial services built around their needs. With time, we have innovatively created customized products that have positioned us as a trusted insurance and financial services provider. Our positioning is simplified and captured in our tagline <span className="font-bold text-blue-600">"We Keep Our Word"</span> reinforcing our commitment to the market.
          </p>
          <p className="text-lg text-gray-700 mb-8 max-w-4xl mx-auto">
            For more than five decades, we have shouldered the risk of Kenyans by providing flexible insurance and financial services built around their needs.
          </p>
          <p className="text-xl font-semibold text-gray-800">
            Now, introducing <span className="text-red-600 font-bold">Ushirika Gardens</span>.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Nature-Inspired Designs */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <img 
                src="https://ushirikagardens.cic.co.ke/wp-content/uploads/2023/12/about1-6575510f51596.webp" 
                alt="Nature landscape"
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-red-600 mb-6">Nature-Inspired Designs</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                With meticulous planning and a commitment to sustainability, Ushirika Gardens draws inspiration from the natural world to shape every aspect of Ujima Park. From the layout of the streets to the positioning of green spaces, we prioritize the preservation of the surrounding environment.
              </p>
            </div>
          </div>

          {/* Safe Haven */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-red-600 mb-6">Safe Haven For You and Yours</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ushirika Gardens was designed with security in mind and our commitment to safeguarding your home and your family is reflected in the state-of-the-art security measures we have implemented. These include 24/7 surveillance, well-trained security personnel and controlled access points among others.
              </p>
            </div>
            <div>
              <img 
                src="https://ushirikagardens.cic.co.ke/wp-content/uploads/2023/12/about2-6575510ad8cb0.webp" 
                alt="Modern living room"
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Controlled Development */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <img 
                src="https://ushirikagardens.cic.co.ke/wp-content/uploads/2023/12/about3-6575510c246e1.webp" 
                alt="Land development"
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-red-600 mb-6">Controlled Development</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                With controlled development, you can rest assured that the aesthetic and functional aspects of the place you call home will be carefully regulated to maintain a harmonious and attractive living environment. This means that architectural guidelines, zoning regulations, and landscaping standards will be in place to preserve the overall quality of the community. By getting a piece of land in Ujima Park, you're investing in more than just land.
              </p>
            </div>
          </div>

          {/* Indoor Outdoor Living */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-red-600 mb-6">Indoor Outdoor Living</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Picture yourself in a tranquil oasis, surrounded by lush greenery and open spaces, where the boundary between indoor and outdoor living blurs. Here, you can truly savour the serenity of your home.
              </p>
            </div>
            <div>
              <img 
                src="https://ushirikagardens.cic.co.ke/wp-content/uploads/2023/12/about4-6575510d0a3dc.webp" 
                alt="Outdoor living space with pool"
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Word Cloud Section - Why Choose Us */}
      <div id="why-choose-us" className="bg-gradient-to-br from-yellow-50 to-orange-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center relative">
            {/* Main Word Cloud Display */}
            <div className="relative h-96 flex items-center justify-center">
              <div className="absolute text-6xl font-bold text-red-600 transform -translate-x-8 -translate-y-4">
                location
              </div>
              <div className="absolute text-4xl font-bold text-yellow-500 transform translate-x-32 -translate-y-12">
                architecture
              </div>
              <div className="absolute text-3xl font-semibold text-orange-600 transform -translate-x-24 translate-y-16">
                ambience
              </div>
              <div className="absolute text-5xl font-bold text-yellow-600 transform translate-x-24 translate-y-8">
                nature
              </div>
              <div className="absolute text-3xl font-semibold text-gray-700 transform -translate-x-48 -translate-y-8">
                shiriki
              </div>
              <div className="absolute text-4xl font-bold text-red-500 transform translate-x-16 -translate-y-20">
                infrastructure
              </div>
              <div className="absolute text-3xl font-semibold text-yellow-500 transform -translate-x-16 translate-y-24">
                community
              </div>
              <div className="absolute text-2xl font-medium text-gray-600 transform -translate-x-40 translate-y-4">
                financing
              </div>
              <div className="absolute text-3xl font-semibold text-gray-800 transform translate-x-40 translate-y-20">
                security
              </div>
              <div className="absolute text-2xl font-medium text-red-400 transform translate-x-8 translate-y-32">
                controlled
              </div>
              <div className="absolute text-2xl font-medium text-gray-600 transform -translate-x-32 -translate-y-16">
                trusted developer
              </div>
              <div className="absolute text-2xl font-medium text-gray-500 transform translate-x-48 -translate-y-4">
                tranquility
              </div>
              <div className="absolute text-xl font-medium text-gray-600 transform -translate-x-20 -translate-y-32">
                legacy
              </div>
              <div className="absolute text-xl font-medium text-red-400 transform translate-x-36 translate-y-4">
                amenities
              </div>
              <div className="absolute text-xl font-medium text-gray-500 transform -translate-x-8 translate-y-40">
                aesthetics
              </div>
              <div className="absolute text-2xl font-medium text-yellow-600 transform translate-x-20 -translate-y-36">
                prime property
              </div>
              <div className="absolute text-xl font-medium text-red-500 transform translate-x-52 translate-y-12">
                scenic
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Logos Section - Meet Our Partners */}
      <div id="partners" className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <img 
              src="https://cdn.brandfetch.io/idqET1HYHr/w/322/h/270/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1753222672607" 
              alt="CIC Group"
              className="h-20 mx-auto mb-8"
            />
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12">
            <div className="bg-green-700 px-8 py-4 rounded-lg">
              <span className="text-white font-bold text-xl">CO-OPERATIVE BANK</span>
              <div className="text-white text-sm">We are you</div>
            </div>
            <div className="text-blue-600 font-bold text-4xl">
              SYMBION
            </div>
            <div className="bg-black px-8 py-4 rounded-lg">
              <span className="text-red-500 font-bold text-xl">BuyRentKenya</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}