import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Download, FileText, Image, Play, ChevronDown, ExternalLink } from 'lucide-react';

const Resources = () => {
  const [activeTab, setActiveTab] = useState('downloads');
  const location = useLocation();

  // URL parameters for tab switching
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tab = urlParams.get('tab');
    if (tab && ['downloads', 'videos', 'gallery'].includes(tab)) {
      setActiveTab(tab);
    }
  }, [location]);

  const downloadItems = {
    ujimaPark: [
      {
        title: "Brochure",
        description: "Complete overview of Ujima Park features and amenities",
        icon: FileText,
        color: "bg-red-600",
        buttonColor: "bg-red-600 hover:bg-red-700"
      },
      {
        title: "Schematic",
        description: "Detailed layout and plot positioning",
        icon: Image,
        color: "bg-red-600", 
        buttonColor: "bg-red-600 hover:bg-red-700"
      },
      {
        title: "Plot Dimensions",
        description: "Specifications and measurements for each plot type",
        icon: FileText,
        color: "bg-orange-500",
        buttonColor: "bg-orange-500 hover:bg-orange-600"
      }
    ],
    uzuriPines: [
      {
        title: "Schematic",
        description: "Master plan and layout design",
        icon: Image,
        color: "bg-red-600",
        buttonColor: "bg-red-600 hover:bg-red-700"
      },
      {
        title: "Plot Dimensions", 
        description: "Detailed plot specifications and sizing",
        icon: FileText,
        color: "bg-red-600",
        buttonColor: "bg-red-600 hover:bg-red-700"
      }
    ]
  };

  const videoContent = {
    featured: {
      title: "Ushirika Gardens Overview",
      thumbnail: "https://ushirikagardens.cic.co.ke/wp-content/uploads/2023/11/WhatsApp-Video-2023-11-21-at-10.27.15.mp4",
      duration: "0:20"
    },
    upcoming: "More videos coming soon..."
  };

  const galleryImages = [
    {
      src: "https://ushirikagardens.cic.co.ke/wp-content/uploads/2023/12/gal2-225x300.webp",
      alt: "Aerial view of Ushirika Gardens",
      category: "Landscape"
    },
    {
      src: "https://ushirikagardens.cic.co.ke/wp-content/uploads/2023/12/gal4.webp", 
      alt: "Gentle slope plots with valley views",
      category: "Plots"
    },
    {
      src: "https://ushirikagardens.cic.co.ke/wp-content/uploads/2023/12/gal3.webp",
      alt: "Modern family home example",
      category: "Architecture"
    }
  ];

  const renderDownloads = () => (
    <div className="space-y-12">
      {/* Ujima Park Downloads */}
      <div>
        <h2 className="text-3xl font-bold text-red-600 mb-8 text-center">Ujima Park Downloads</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {downloadItems.ujimaPark.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className={`w-16 h-16 ${item.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <button className={`${item.buttonColor} text-white px-6 py-2 rounded-lg transition-colors flex items-center space-x-2 mx-auto`}>
                <Download className="w-4 h-4" />
                <span>Download</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Uzuri Pines Downloads */}
      <div>
        <h2 className="text-3xl font-bold text-red-600 mb-8 text-center">Uzuri Pines Downloads</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {downloadItems.uzuriPines.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className={`w-16 h-16 ${item.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <button className={`${item.buttonColor} text-white px-6 py-2 rounded-lg transition-colors flex items-center space-x-2 mx-auto`}>
                <Download className="w-4 h-4" />
                <span>Download</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderVideos = () => (
    <div className="max-w-4xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Video Player */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-lg shadow-lg bg-black">
            <div className="aspect-video flex items-center justify-center">
              <img 
                src={videoContent.featured.thumbnail}
                alt={videoContent.featured.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <button className="w-20 h-20 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors">
                  <Play className="w-10 h-10 text-white ml-1" />
                </button>
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <span className="bg-black/60 px-2 py-1 rounded text-sm">{videoContent.featured.duration}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Video Info */}
        <div className="text-center lg:text-left">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{videoContent.featured.title}</h3>
          <p className="text-gray-600 text-lg mb-6">{videoContent.upcoming}</p>
          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded">
            <p className="text-gray-700">
              Stay tuned for more exclusive content showcasing the beauty and features of Ushirika Gardens.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderGallery = () => (
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="aspect-square">
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold">{image.category}</p>
                <p className="text-sm opacity-90">{image.alt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <div className="bg-gray-100 rounded-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">More Images Coming Soon</h3>
          <p className="text-gray-600">
            We're continuously updating our gallery with new images of the development progress and beautiful landscapes.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Sec */}
      <section 
        className="relative h-64 lg:h-[75vh] flex items-center justify-left"
        style={{
          backgroundImage: `url(https://ushirikagardens.cic.co.ke/wp-content/uploads/slider/cache/e1ca6bb26443c2d7e4008c82ae6771dc/Land.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-left text-white">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            {activeTab === 'downloads' && 'Downloads'}
            {activeTab === 'videos' && 'Videos'}
            {activeTab === 'gallery' && 'Gallery'}
          </h1>
          <p className="text-xl opacity-90">
            {activeTab === 'downloads' && 'Explore our downloads page to access the latest tools and resources for a seamless and enhanced user experience.'}
            {activeTab === 'videos' && 'Watch exclusive content about Ushirika Gardens'}
            {activeTab === 'gallery' && 'Visual journey through our development'}
          </p>
        </div>
      </section>

      {/* Nav Tabs */}
      <section className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <nav className="flex flex-wrap justify-center space-x-0 md:space-x-8">
            <button
              onClick={() => setActiveTab('downloads')}
              className={`flex items-center space-x-2 px-6 py-4 font-semibold transition-colors border-b-2 ${
                activeTab === 'downloads'
                  ? 'text-red-600 border-red-600'
                  : 'text-gray-600 border-transparent hover:text-red-600 hover:border-red-300'
              }`}
            >
              <Download className="w-5 h-5" />
              <span>Downloads</span>
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`flex items-center space-x-2 px-6 py-4 font-semibold transition-colors border-b-2 ${
                activeTab === 'videos'
                  ? 'text-red-600 border-red-600'
                  : 'text-gray-600 border-transparent hover:text-red-600 hover:border-red-300'
              }`}
            >
              <Play className="w-5 h-5" />
              <span>Videos</span>
            </button>
            <button
              onClick={() => setActiveTab('gallery')}
              className={`flex items-center space-x-2 px-6 py-4 font-semibold transition-colors border-b-2 ${
                activeTab === 'gallery'
                  ? 'text-red-600 border-red-600'
                  : 'text-gray-600 border-transparent hover:text-red-600 hover:border-red-300'
              }`}
            >
              <Image className="w-5 h-5" />
              <span>Gallery</span>
            </button>
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {activeTab === 'downloads' && renderDownloads()}
          {activeTab === 'videos' && renderVideos()}
          {activeTab === 'gallery' && renderGallery()}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-100 ">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">Need More Information?</h2>
          <p className="text-xl text-red-500 mb-8">
            Our team is ready to help you with any questions about Ushirika Gardens
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
              Contact Us
            </button>
            <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
              Schedule Site Visit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;