import React, { useState, useEffect } from 'react';
import { 
  Users, 
  TrendingUp, 
  Heart, 
  Shield, 
  ArrowRight, 
  Search, 
  MapPin, 
  Clock,
  Award,
  Target,
  Briefcase,
  GraduationCap
} from 'lucide-react';

const CICCareersPage = () => {
  const [currentJobIndex, setCurrentJobIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const jobOpenings = [
    {
      title: "Creative & Design Officer",
      department: "Marketing",
      location: "Nairobi, Kenya",
      type: "Full-time",
      posted: "2 days ago"
    },
    {
      title: "Insurance Sales Agent",
      department: "Sales",
      location: "Mombasa, Kenya",
      type: "Full-time",
      posted: "1 week ago"
    },
    {
      title: "Risk Assessment Specialist",
      department: "Underwriting",
      location: "Nairobi, Kenya",
      type: "Full-time",
      posted: "3 days ago"
    },
    {
      title: "Customer Service Representative",
      department: "Customer Service",
      location: "Kisumu, Kenya",
      type: "Full-time",
      posted: "5 days ago"
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Focus on your health",
      description: "A flexible and attractive benefits plan in our medical and life insurance to take care of you and your loved ones",
      color: "bg-red-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Investment in your future",
      description: "We invest in your future through a generous retirement benefits plan",
      color: "bg-blue-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Rest and relaxation",
      description: "A friendly and flexible leave plan for our employees",
      color: "bg-green-500"
    }
  ];

  const whatsInItForYou = [
    {
      icon: <Users className="w-6 h-6" />,
      text: "Work with a talented team"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      text: "Continuous growth and learning"
    },
    {
      icon: <Target className="w-6 h-6" />,
      text: "Supportive and approachable leadership"
    },
    {
      icon: <Award className="w-6 h-6" />,
      text: "Team spirit and commitment"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentJobIndex((prev) => (prev + 1) % jobOpenings.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [jobOpenings.length]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">CIC Insurance Group</h1>
                <p className="text-sm text-gray-600">Careers Portal</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
              <a href="#" className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">Careers</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold leading-tight mb-6">
                Realize your potential with 
                <span className="text-yellow-400"> CIC Group</span>
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Whether you are a recent graduate or an experienced professional, CIC Insurance Group Plc is hiring in a variety of career tracks and offers a supportive workplace that encourages success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105">
                  <Briefcase className="w-5 h-5" />
                  <span>View Open Positions</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 rounded-lg transition-all duration-300">
                  Learn About CIC
                </button>
              </div>
            </div>
            
            {/* Featured Job Card */}
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">Featured Opening</h3>
              <div className="space-y-4">
                <h4 className="text-xl font-semibold">{jobOpenings[currentJobIndex].title}</h4>
                <div className="flex flex-wrap gap-4 text-sm text-blue-100">
                  <div className="flex items-center space-x-1">
                    <Briefcase className="w-4 h-4" />
                    <span>{jobOpenings[currentJobIndex].department}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{jobOpenings[currentJobIndex].location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{jobOpenings[currentJobIndex].posted}</span>
                  </div>
                </div>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-6 py-2 rounded-lg transition-all duration-300">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's in it for you */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What's in it for you</h2>
            <p className="text-xl text-gray-600">Join a workplace that values growth, collaboration, and success</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whatsInItForYou.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-blue-600 mb-4">
                  {item.icon}
                </div>
                <p className="text-gray-700 font-medium leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Attractive Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Attractive Benefits</h2>
            <p className="text-xl text-gray-600">Comprehensive benefits designed with your wellbeing in mind</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:from-white hover:to-gray-50 transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:-translate-y-1">
                  <div className={`${benefit.color} text-white rounded-xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Search Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Current Openings</h2>
            <p className="text-xl text-gray-600">Find your next career opportunity with us</p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for positions, departments, or locations..."
                className="w-full pl-12 pr-6 py-4 rounded-full border-2 border-gray-200 focus:border-blue-500 focus:outline-none text-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Job Listings */}
          <div className="grid gap-6">
            {jobOpenings.map((job, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1 mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Briefcase className="w-4 h-4" />
                        <span>{job.department}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{job.posted}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <button className="text-blue-600 hover:text-blue-800 font-medium px-6 py-2 border border-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300">
                      View Details
                    </button>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2">
                      <span>Apply Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold px-8 py-4 rounded-lg transition-all duration-300">
              Load More Positions
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="w-8 h-8 text-blue-400" />
                <span className="text-xl font-bold">CIC Insurance Group</span>
              </div>
              <p className="text-gray-400">Building careers, securing futures.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Careers</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Job Openings</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Benefits</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Culture</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Apply</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>careers@cicinsurance.com</li>
                <li>+254 20 328 8000</li>
                <li>Nairobi, Kenya</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CIC Insurance Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CICCareersPage;