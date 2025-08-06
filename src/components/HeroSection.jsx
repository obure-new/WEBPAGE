const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <div className="bg-black bg-opacity-70 p-8 lg:p-12 rounded-lg max-w-lg">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Protect What Matters
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
                You and your family's healthcare, made easy and affordable
              </p>
              <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
                <button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Get a Quote
                </button>
                <button className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Right Content - Additional Info Cards */}
          <div className="w-full lg:w-1/2 lg:pl-8">
            <div className="grid gap-6">
              {/* Feature Cards */}
              <div className="bg-white bg-opacity-95 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Comprehensive Coverage</h3>
                <p className="text-gray-600 leading-relaxed">
                  Protect your family with our extensive healthcare plans designed for every budget and need.
                </p>
              </div>
              
              <div className="bg-white bg-opacity-95 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Easy Claims Process</h3>
                <p className="text-gray-600 leading-relaxed">
                  Quick and hassle-free claims processing with our dedicated customer support team.
                </p>
              </div>
              
              <div className="bg-white bg-opacity-95 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Trusted by Thousands</h3>
                <p className="text-gray-600 leading-relaxed">
                  Join thousands of satisfied customers who trust CIC Group for their insurance needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;