import { useState } from 'react';
import { Phone, MessageCircle, Mail, MessageSquare } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    comments: ''
  });

  const [selectedContact, setSelectedContact] = useState('call');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Contact form submitted:', formData);
    alert('Message sent successfully!');
  };

  const contactMethods = [
    {
      id: 'call',
      title: 'Call us',
      subtitle: '0703 099 120',
      icon: Phone,
      bgColor: 'bg-yellow-100',
      iconColor: 'text-yellow-600'
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp us',
      subtitle: '0730399000',
      icon: MessageCircle,
      bgColor: 'bg-yellow-100',
      iconColor: 'text-yellow-600'
    },
    {
      id: 'sms',
      title: 'SMS us',
      subtitle: '22471',
      icon: MessageSquare,
      bgColor: 'bg-yellow-100',
      iconColor: 'text-yellow-600'
    },
    {
      id: 'email',
      title: 'Email us',
      subtitle: 'callc@cic.co.ke',
      icon: Mail,
      bgColor: 'bg-yellow-100',
      iconColor: 'text-yellow-600'
    }
  ];

  const branches = [
    { name: 'BOMET BRANCH', phone: '0703 099 650', email: 'bomet@cic.co.ke', address: 'Isenya Building, 2nd Floor', region: 'Rift Valley' },
    { name: 'BUNGOMA BRANCH', phone: '(055) 203 0121', email: 'bungomabranch@cic.co.ke', address: 'Simali House 1st Floor, Moi Avenue', region: 'Western' },
    { name: 'BURU BURU BRANCH', phone: '0703 099 564', email: 'buruburubranch@cic.co.ke', address: 'Mesora Centre, 1st Floor Mumias Road', region: 'Nairobi' },
    { name: 'CIC Head Office', phone: '(+254) 703 099 120 (020) 282 3000', email: 'callc@cic.co.ke', address: 'CIC Plaza, Mara Road, Upperhill Nairobi, Kenya', region: 'Head Office' },
    { name: 'CIC MEDICAL CALL CENTER', phone: '(+254) 703 099 999, (+254) 732 179 999, (020) 28 23 999', email: 'inpatient: inpatientapprovals@cic.co.ke; Outpatient: outpatientapprovals@cic.co.ke', address: 'CIC Plaza, Mara Road, Upperhill Nairobi, Kenya', region: 'Head Office' },
    { name: 'ELDORET BRANCH', phone: '0703 099 660', email: 'eldoret@cic.co.ke', address: 'Co-operative Building, 1st Floor Ronald Ngala Street', region: 'Rift Valley' },
    { name: 'EMBU BRANCH', phone: '0703 099 900', email: 'embubranch@cic.co.ke', address: 'Sparko Building, 3rd Floor above Family Bank', region: 'Eastern' },
    { name: 'HOMABAY BRANCH', phone: '(059) 212 2998', email: 'homabay@cic.co.ke', address: 'Cold Springs Plaza, Ground Floor', region: 'Western' },
    { name: 'KAKAMEGA BRANCH', phone: '(056) 203 0242, (056) 203 0850', email: 'kakamega@cic.co.ke', address: 'Walia\'s Centre, Ground Floor', region: 'Western' },
    { name: 'KERICHO BRANCH', phone: '0703 099 650', email: 'kerichobranch@cic.co.ke', address: 'Imarisha Building, Ground Floor', region: 'Rift Valley' },
    { name: 'KIAMBU BRANCH', phone: '0703 099 630', email: 'kiambu@cic.co.ke', address: 'Bishop Ranji Cathedral Plaza, 2nd & 3rd Floor', region: 'Lower Central' },
    { name: 'KILIFI BRANCH', phone: '0703 099 718', email: 'kilifibranch@cic.co.ke', address: 'Al Madina Plaza, 1st Floor', region: 'Coast' },
    { name: 'KISII BRANCH', phone: '0703 099 700, 0703 099 701', email: 'kisii@cic.co.ke', address: 'Lengetia Place, 2nd Floor Kisii-Kisumu Highway', region: 'Western' },
    { name: 'KISUMU BRANCH', phone: '0703 099 600', email: 'kisumu@cic.co.ke', address: 'Wedco Centre, Mezzanine Floor Oginga Odinga Road', region: 'Western' },
    { name: 'KITALE BRANCH', phone: '0703 099 951', email: 'kitale@cic.co.ke', address: 'Mega Center, 1st Floor', region: 'Rift Valley' },
    { name: 'KITENGELA BRANCH', phone: '0703 099 740', email: 'kitengela@cic.co.ke', address: 'Kitengela Mall, 4th Floor', region: 'Nairobi' },
    { name: 'MACHAKOS BRANCH', phone: '0703 099 960', email: 'machakosbranch@cic.co.ke', address: 'ABC Imani Plaza, 2nd Floor', region: 'Lower Central' },
    { name: 'MERU BRANCH', phone: '0703 099 930', email: 'merubranch@cic.co.ke', address: 'Alexander House, 1st Floor Ghana Street', region: 'Eastern' },
    { name: 'MOMBASA BRANCH', phone: '0703 099 751', email: 'mombasabranch@cic.co.ke', address: 'Furaha Plaza Ground Floor, Nkrumah Road', region: 'Coast' },
    { name: 'NAIVASHA BRANCH', phone: '0703 099 763', email: 'naivasha@cic.co.ke', address: 'Eagle Center, 1st Floor Mbariu Kaniu Road', region: 'Rift Valley' },
    { name: 'NAKURU BRANCH', phone: '0703 099 775', email: 'nakuru@cic.co.ke', address: 'Machie Plaza, 2nd Floor Geoffrey Kamau Road', region: 'Rift Valley' },
    { name: 'NANYUKI BRANCH', phone: '0703 099 770', email: 'nanyuki@cic.co.ke', address: 'Pearl Place, 1st Floor', region: 'Upper Central' },
    { name: 'NYAHURURU BRANCH', phone: '(065) 203 2055', email: 'nyahururu@cic.co.ke', address: 'Kimwa Centre, 2nd Floor Kenyatta Avenue', region: 'Upper Central' },
    { name: 'NYERI BRANCH', phone: '0703 099 680', email: 'nyeri@cic.co.ke', address: 'Co-operative Union Building 3rd Floor,', region: 'Upper Central' },
    { name: 'THIKA BRANCH', phone: '0703 099 641', email: 'thika@cic.co.ke', address: 'Thika Arcade, 6th Floor', region: 'Lower Central' },
    { name: 'TOWN OFFICE', phone: 'Mobile: 0703 099 500 Tel: (020) 329 6000', email: 'townoffice@cic.co.ke', address: 'Reinsurance Plaza Mezzanine Floor, Aga Khan Walk', region: 'Nairobi' },
    { name: 'WESTLANDS BRANCH', phone: '0703 099 727', email: 'westlandsbranch@cic.co.ke', address: 'Pamstech House 2nd Floor, Woodvale Grove', region: 'Nairobi' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative h-96 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')"
        }}
      >
        <div className="absolute inset-0 flex items-center justify-start">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold text-white mb-4">
                Need help? We are here for you.
              </h1>
              <p className="text-lg text-gray-200 leading-relaxed">
                As an award-winning insurance group, we pride ourselves in our clarity and availability to 
                further assist. Feel free to reach out to us with any questions you might have. We're available 
                on the social channels listed below, as well as through our email and phone number. While 
                you're here, why not talk to us through the form below?
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {contactMethods.map((method) => {
            const IconComponent = method.icon;
            return (
              <div key={method.id} className="text-center">
                <div className={`w-16 h-16 ${method.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className={`h-8 w-8 ${method.iconColor}`} />
                </div>
                <h3 className="text-lg font-semibold text-[#a51d2d] mb-2">{method.title}</h3>
                <p className="text-gray-700 font-medium">{method.subtitle}</p>
              </div>
            );
          })}
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form */}
            <div>
              <div className="space-y-6">
                {/* First Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-[#a51d2d] rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-gray-400"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-[#a51d2d] rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-gray-400"
                  />
                </div>

                {/* Second Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-[#a51d2d] rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-gray-400"
                  />
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-[#a51d2d] rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-gray-400"
                  />
                </div>

                {/* Comments */}
                <div>
                  <textarea
                    name="comments"
                    placeholder="Comments"
                    value={formData.comments}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-[#a51d2d] rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-gray-400 resize-vertical"
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    onClick={handleSubmit}
                    className="bg-yellow-500 text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-600 transition-colors duration-200 shadow-lg"
                  >
                    Submit Now
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-[#a51d2d] mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Call Center</p>
                    <p className="text-gray-600">0703 099 120</p>
                    <p className="text-gray-600">(020) 282 3000</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-[#a51d2d] mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">callc@cic.co.ke</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MessageCircle className="h-5 w-5 text-[#a51d2d] mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">WhatsApp</p>
                    <p className="text-gray-600">0730399000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Branches Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-[#a51d2d] mb-2 text-center">Visit any of our branches</h3>
          
          {/* Interactive Map Placeholder */}
          <div className="mb-8 bg-gray-200 h-64 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🗺️</div>
              </div>
              <p className="text-gray-600">Interactive Branch Map</p>
              <p className="text-sm text-gray-500">Click on markers to view branch details</p>
            </div>
          </div>

          {/* Branches Table */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="text-xl font-bold text-gray-900 mb-6">CIC Kenya Offices</h4>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Branch Name</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Phone Contact</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Email Contacts</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Physical Location/address</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Region</th>
                  </tr>
                </thead>
                <tbody>
                  {branches.map((branch, index) => (
                    <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100 transition-colors`}>
                      <td className="py-4 px-4 border-b border-gray-200 font-medium text-gray-900">
                        {branch.name}
                      </td>
                      <td className="py-4 px-4 border-b border-gray-200 text-gray-700">
                        {branch.phone}
                      </td>
                      <td className="py-4 px-4 border-b border-gray-200 text-gray-700">
                        <span className="break-all">{branch.email}</span>
                      </td>
                      <td className="py-4 px-4 border-b border-gray-200 text-gray-700">
                        {branch.address}
                      </td>
                      <td className="py-4 px-4 border-b border-gray-200 text-gray-700">
                        <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-medium text-gray-800">
                          {branch.region}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;