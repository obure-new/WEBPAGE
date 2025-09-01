import React, { useState } from 'react';
import { Search, MapPin, Clock, Users, Heart, TrendingUp, Shield, Coffee, Award, ChevronRight, Filter, Calendar, Building } from 'lucide-react';

const Career = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');

  const jobListings = [
    {
      id: 1,
      title: 'Senior Actuarial Analyst',
      department: 'Risk Management',
      location: 'Nairobi, Kenya',
      type: 'Full-time',
      posted: '2 days ago',
      description: 'Join our team to analyze insurance data and develop pricing models for our diverse product portfolio.',
      requirements: ['Bachelor\'s degree in Mathematics, Statistics, or Actuarial Science', '3+ years experience in actuarial analysis', 'Professional actuarial certification preferred']
    },
    {
      id: 2,
      title: 'Digital Marketing Manager',
      department: 'Marketing',
      location: 'Kampala, Uganda',
      type: 'Full-time',
      posted: '5 days ago',
      description: 'Lead our digital marketing initiatives and drive brand awareness across East Africa.',
      requirements: ['Bachelor\'s degree in Marketing or related field', '5+ years digital marketing experience', 'Experience with social media and content marketing']
    },
    {
      id: 3,
      title: 'Claims Processing Specialist',
      department: 'Operations',
      location: 'Dar es Salaam, Tanzania',
      type: 'Full-time',
      posted: '1 week ago',
      description: 'Process insurance claims efficiently while ensuring customer satisfaction and regulatory compliance.',
      requirements: ['Diploma in Insurance or Business Administration', '2+ years claims processing experience', 'Strong attention to detail']
    },
    {
      id: 4,
      title: 'Software Engineer',
      department: 'Technology',
      location: 'Nairobi, Kenya',
      type: 'Full-time',
      posted: '3 days ago',
      description: 'Develop and maintain our insurance management systems and customer-facing applications.',
      requirements: ['Bachelor\'s degree in Computer Science or related field', '3+ years full-stack development experience', 'Experience with React, Node.js, and databases']
    },
    {
      id: 5,
      title: 'Customer Service Representative',
      department: 'Customer Service',
      location: 'Kigali, Rwanda',
      type: 'Full-time',
      posted: '4 days ago',
      description: 'Provide exceptional customer service and support to our valued policyholders.',
      requirements: ['High school diploma or equivalent', '1+ years customer service experience', 'Excellent communication skills']
    },
    {
      id: 6,
      title: 'Internal Auditor',
      department: 'Audit',
      location: 'Nairobi, Kenya',
      type: 'Full-time',
      posted: '6 days ago',
      description: 'Conduct internal audits to ensure compliance and operational efficiency across all business units.',
      requirements: ['Bachelor\'s degree in Accounting, Finance, or related field', 'CPA certification preferred', '4+ years internal audit experience']
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Focus on your health',
      description: 'A flexible and attractive benefits plan in our medical and life insurance to take care of you and your loved ones'
    },
    {
      icon: TrendingUp,
      title: 'Investment in your future',
      description: 'We invest in your future through a generous retirement benefits plan'
    },
    {
      icon: Coffee,
      title: 'Rest and relaxation',
      description: 'A friendly and flexible leave plan for our employees'
    },
    {
      icon: Users,
      title: 'Work with a talented team',
      description: 'Collaborate with passionate professionals across diverse backgrounds and expertise'
    },
    {
      icon: Award,
      title: 'Continuous growth and learning',
      description: 'Access to training programs, certifications, and career development opportunities'
    },
    {
      icon: Shield,
      title: 'Supportive leadership',
      description: 'Work under approachable leaders who believe in team spirit and commitment'
    }
  ];

  const locations = ['All Locations', 'Nairobi, Kenya', 'Kampala, Uganda', 'Dar es Salaam, Tanzania', 'Kigali, Rwanda'];
  const departments = ['All Departments', 'Risk Management', 'Marketing', 'Operations', 'Technology', 'Customer Service', 'Audit'];

  const filteredJobs = jobListings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         job.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = selectedLocation === '' || selectedLocation === 'All Locations' || job.location === selectedLocation;
    const matchesDepartment = selectedDepartment === '' || selectedDepartment === 'All Departments' || job.department === selectedDepartment;
    
    return matchesSearch && matchesLocation && matchesDepartment;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#a51d2d] via-[#c41e3a] to-[#8b1a1a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Realize your potential with CIC Group
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100 max-w-3xl mx-auto">
              Whether you are a recent graduate or an experienced professional, CIC Insurance Group Plc is hiring in a variety of career tracks and offers a supportive workplace that encourages success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                View Open Positions
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-[#a51d2d] font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                Learn About Our Culture
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* What's in it for you Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What's in it for you</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join a company that values your growth, well-being, and success. Here's what makes CIC Group a great place to work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <benefit.icon className="w-8 h-8 text-[#a51d2d]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Job Listings Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Current Opportunities</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our open positions and find the perfect role to advance your career with CIC Group.
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="bg-gray-50 p-6 rounded-xl mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search jobs..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a51d2d] focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <select
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a51d2d] focus:border-transparent appearance-none bg-white"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                >
                  {locations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>

              <div className="relative">
                <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <select
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a51d2d] focus:border-transparent appearance-none bg-white"
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                >
                  {departments.map(department => (
                    <option key={department} value={department}>{department}</option>
                  ))}
                </select>
              </div>

              <button className="bg-[#a51d2d] hover:bg-[#8b1a1a] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center">
                <Filter className="w-5 h-5 mr-2" />
                Filter Jobs
              </button>
            </div>
          </div>

          {/* Job Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredJobs.map((job) => (
              <div key={job.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Building className="w-4 h-4 mr-1" />
                        {job.department}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {job.type}
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {job.posted}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">{job.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Requirements:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {job.requirements.slice(0, 2).map((req, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-1 h-1 bg-[#a51d2d] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-[#a51d2d]">
                    {job.department}
                  </span>
                  <button className="bg-yellow-400 hover:bg-[#a51d2d] hover:text-white text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center">
                    Apply Now
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No jobs found</h3>
              <p className="text-gray-600">Try adjusting your search criteria to find more opportunities.</p>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't see the perfect position? Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#a51d2d] hover:bg-[#8b1a1a] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Submit Your Resume
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Contact HR Department
            </button>
          </div>
        </div>
      </div>

      {/* Company Culture Section */}
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Culture & Values
              </h2>
              <p className="text-lg text-gray-800 mb-6 leading-relaxed">
                At CIC Group, we believe in creating an environment where every team member can thrive. Our culture is built on mutual respect, continuous learning, and a shared commitment to excellence.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-800">
                  <div className="w-2 h-2 bg-[#a51d2d] rounded-full mr-3"></div>
                  Integrity in everything we do
                </li>
                <li className="flex items-center text-gray-800">
                  <div className="w-2 h-2 bg-[#a51d2d] rounded-full mr-3"></div>
                  Innovation and continuous improvement
                </li>
                <li className="flex items-center text-gray-800">
                  <div className="w-2 h-2 bg-[#a51d2d] rounded-full mr-3"></div>
                  Collaboration and teamwork
                </li>
                <li className="flex items-center text-gray-800">
                  <div className="w-2 h-2 bg-[#a51d2d] rounded-full mr-3"></div>
                  Customer-centric approach
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-2xl font-bold text-[#a51d2d] mb-2">25+</h3>
                  <p className="text-gray-600">Years of Excellence</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-2xl font-bold text-[#a51d2d] mb-2">1000+</h3>
                  <p className="text-gray-600">Dedicated Employees</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-2xl font-bold text-[#a51d2d] mb-2">4</h3>
                  <p className="text-gray-600">Countries We Serve</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-2xl font-bold text-[#a51d2d] mb-2">50+</h3>
                  <p className="text-gray-600">Branch Locations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;