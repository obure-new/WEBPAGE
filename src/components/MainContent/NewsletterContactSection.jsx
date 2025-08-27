import React from "react";

const NewsletterContactSection = () => (
  <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-400 py-16 md:py-20">
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Newsletter Signup */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-black-800 leading-tight">
            Join our mailing list
          </h2>
          <p className="text-lg text-black-800 leading-relaxed">
            Sign up now and be the first to know about exclusive offers, 
            product updates and exciting news and announcements.
          </p>
          {/* Email Subscription Form */}
          <div className="relative max-w-lg w-full">
            <input
              type="email"
              placeholder="Email"
              className="w-full pr-32 px-6 py-4 text-lg border-2 border-[#a51d2d] rounded-full bg-transparent placeholder-gray-700 text-black-800 focus:outline-none focus:ring-0 focus:border-yellow-700"
            />
            <button className="absolute top-1/2 right-2 -translate-y-1/2 px-6 py-3 bg-[#a51d2d] hover:bg-red-600 text-white font-semibold text-lg rounded-full border border-yellow-600 transition-colors duration-200 shadow-lg hover:shadow-xl">
              Subscribe
            </button>
          </div>
        </div>
        {/* Contact Options */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            Let us guide you through your life's journey
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Chat with us on WhatsApp, Call us directly or Email us.
          </p>
          {/* Contact Icons */}
          <div className="flex space-x-8 pt-4">
            {/* WhatsApp */}
            <a 
              href="#" 
              className="group flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full transition-all duration-200 hover:scale-110"
            >
              <svg className="w-8 h-8 text-[#a51d2d] group-hover:text-yellow-700 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.384"/>
              </svg>
            </a>
            {/* Phone */}
            <a 
              href="#" 
              className="group flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full transition-all duration-200 hover:scale-110"
            >
              <svg className="w-8 h-8 text-[#a51d2d] group-hover:text-red-700 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </a>
            {/* Email */}
            <a 
              href="#" 
              className="group flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full transition-all duration-200 hover:scale-110"
            >
              <svg className="w-8 h-8 text-[#a51d2d] group-hover:text-red-700 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default NewsletterContactSection;
