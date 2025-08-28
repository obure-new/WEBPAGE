import React, { useState } from 'react';
import { Search, Calendar, User } from 'lucide-react';

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: "CIC Insurance to subdivide 200 acre land for easy sale",
      excerpt: "CIC Insurance Group #ticker:CIC will subdivide its 200-acre land in Kiambu County into plots and sell...",
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "March 15, 2024",
      author: "CIC Group"
    },
    {
      id: 2,
      title: "Gated Community Living",
      excerpt: "Living in a gated community brings offers more than just a secure living environment—it also fosters a strong sense of community.",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "March 10, 2024",
      author: "Property Team"
    },
    {
      id: 3,
      title: "Hass Consult Land Index Q3 '23",
      excerpt: "Land prices satellite towns grew by almost 3 times the rate of land in Nairobi...",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "March 5, 2024",
      author: "Market Analysis"
    }
  ];

  const latestArticles = [
    "CIC Insurance to subdivide 200 acre land for easy sale",
    "Gated Community Living",
    "Hass Consult Land Index Q3 '23"
  ];

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
    // Handle search logic here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-3xl font-bold text-gray-800">Ushirika Gardens Blog</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {/* Featured Article */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
              <div className="relative">
                <img 
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-3 hover:text-red-600 cursor-pointer transition-colors">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{blogPosts[0].date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{blogPosts[0].author}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="space-y-6">
              {blogPosts.slice(1).map((post) => (
                <div key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-red-600 cursor-pointer transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-8">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Load More Articles
              </button>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Blog Search */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Blog Search</h3>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                  />
                  <button 
                    onClick={handleSearch}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center gap-1"
                  >
                    <Search className="w-4 h-4" />
                    Search
                  </button>
                </div>
              </div>

              {/* Latest Articles */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Latest articles</h3>
                <div className="space-y-3">
                  {latestArticles.map((article, index) => (
                    <div key={index}>
                      <a 
                        href="#" 
                        className="text-red-600 hover:text-red-700 text-sm font-medium leading-tight block transition-colors"
                      >
                        {article}
                      </a>
                      {index < latestArticles.length - 1 && (
                        <div className="border-b border-gray-200 mt-3"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-red-600 to-orange-600 text-white rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-3">Stay Updated</h3>
                <p className="text-sm opacity-90 mb-4">
                  Get the latest news and updates from Ushirika Gardens delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-3 py-2 rounded-lg text-gray-800 outline-none"
                  />
                  <button className="w-full bg-white text-red-600 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Categories</h3>
                <div className="space-y-2">
                  {[
                    'Property Development',
                    'Investment Tips',
                    'Market Analysis',
                    'Community Living',
                    'Real Estate News'
                  ].map((category, index) => (
                    <a 
                      key={index}
                      href="#" 
                      className="block text-gray-600 hover:text-red-600 text-sm py-1 transition-colors"
                    >
                      {category}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}