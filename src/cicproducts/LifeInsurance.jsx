import React, { useState } from 'react';
import { X } from 'lucide-react';

const LifeInsurance = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [activeTab, setActiveTab] = useState('Directors');

  const teamMembers = {
    Directors: [
      {
        id: 1,
        name: "Cornelius Ashira",
        position: "BOARD CHAIRMAN",
        image: "/api/placeholder/200/200",
        bio: "Cornelius Odhiambo Ashira, aged 56, joined the Board in 2014. Mr. Ashira is the Director Representing Nairobi Province Parastatal based societies. He is currently a board member of Kumbu Kumbu Sacco and the Chairman of the Credit Committee. Mr. Ashira is also a delegate at KUSCCO Limited. He worked with International Center for Insect Physiology and Ecology between 1988 and 1990 as a laboratory technician. Currently, the Director is working at the Institute of Primate Research, Karen. He is a member of the institute of Directors of Kenya."
      },
      {
        id: 2,
        name: "Mr. Humphrey Gathungu",
        position: "MANAGING DIRECTOR",
        image: "/api/placeholder/200/200",
        bio: "Mr. Humphrey Gathungu is the Managing Director of CIC Asset Management Ltd. He brings extensive experience in investment management and financial services to the organization."
      },
      {
        id: 3,
        name: "Mr. Patrick Nyaga",
        position: "GROUP MANAGING DIRECTOR & CEO",
        image: "/api/placeholder/200/200",
        bio: "Mr. Patrick Nyaga serves as the Group Managing Director & CEO, leading the strategic direction of CIC Group with extensive experience in insurance and financial services."
      },
      {
        id: 4,
        name: "Joseph Maina Kamau",
        position: "BOARD MEMBER",
        image: "/api/placeholder/200/200",
        bio: "Joseph Maina Kamau is an experienced board member contributing to the governance and strategic oversight of CIC Asset Management Ltd."
      },
      {
        id: 5,
        name: "Abel Amuyunzu",
        position: "DIRECTOR",
        image: "/api/placeholder/200/200",
        bio: "Abel Amuyunzu serves as a Director, bringing valuable expertise and insights to the board of CIC Asset Management Ltd."
      },
      {
        id: 6,
        name: "Wangui Maranga",
        position: "INDEPENDENT NON-EXECUTIVE DIRECTOR",
        image: "/api/placeholder/200/200",
        bio: "Wangui Maranga is an Independent Non-Executive Director, providing independent oversight and strategic guidance to the organization."
      },
      {
        id: 7,
        name: "Alice Kilonzo",
        position: "INDEPENDENT NON-EXECUTIVE DIRECTOR",
        image: "/api/placeholder/200/200",
        bio: "Alice Kilonzo serves as an Independent Non-Executive Director, contributing her expertise to the board's decision-making processes."
      }
    ],
    Management: [
      {
        id: 8,
        name: "Mr. Humphrey Gathungu",
        position: "MANAGING DIRECTOR",
        image: "/api/placeholder/200/200",
        bio: "Mr. Humphrey Gathungu serves as the Managing Director of CIC Asset Management Ltd, overseeing the day-to-day operations and strategic implementation."
      },
      {
        id: 9,
        name: "Susan Robi",
        position: "DIRECTOR, RISK AND COMPLIANCE",
        image: "/api/placeholder/200/200",
        bio: "Susan Robi is responsible for risk management and compliance oversight, ensuring regulatory adherence and risk mitigation strategies."
      },
      {
        id: 10,
        name: "Elizabeth Njuguna",
        position: "HUMAN RESOURCE BUSINESS PARTNER",
        image: "/api/placeholder/200/200",
        bio: "Elizabeth Njuguna manages human resource functions and serves as a strategic business partner to various departments."
      },
      {
        id: 11,
        name: "Ruth Ngaruiya",
        position: "HEAD OF UNIT TRUST",
        image: "/api/placeholder/200/200",
        bio: "Ruth Ngaruiya leads the unit trust division, managing collective investment schemes and unit trust operations."
      },
      {
        id: 12,
        name: "Sylvia Kimani",
        position: "BUSINESS DEVELOPMENT MANAGER",
        image: "/api/placeholder/200/200",
        bio: "Sylvia Kimani is responsible for identifying and developing new business opportunities and maintaining client relationships."
      },
      {
        id: 13,
        name: "Moses Katiwa",
        position: "BUSINESS DEVELOPMENT MANAGER",
        image: "/api/placeholder/200/200",
        bio: "Moses Katiwa focuses on business development initiatives and expanding the company's market presence."
      },
      {
        id: 14,
        name: "Peter Ongeti",
        position: "BUSINESS DEVELOPMENT MANAGER",
        image: "/api/placeholder/200/200",
        bio: "Peter Ongeti contributes to business development strategies and client acquisition efforts."
      },
      {
        id: 15,
        name: "Mary Wanga",
        position: "COMPANY SECRETARY",
        image: "/api/placeholder/200/200",
        bio: "Mary Wanga serves as the Company Secretary, handling corporate governance and statutory compliance matters."
      }
    ],
    'Quick Facts': [],
    'Investor Relations': []
  };

  const quickFacts = {
    stats: [
      { value: "38.50%", label: "Unit Trust Market Share" },
      { value: "127.0B", label: "Assets Under Management" },
      { value: "644M", label: "Profit Before Tax" }
    ],
    products: {
      pension: [
        {
          title: "Stand-alone / Segregated Schemes",
          description: "The CICAM segregated Umbrella fund is a product designed to focus on small to medium enterprises (SME's) as well as larger Organizations willing to set up segregated retirement benefits scheme but do not wish to be entangled in legal, administrative and statutory liabilities applicable to segregated schemes."
        },
        {
          title: "CIC Umbrella Retirement Scheme",
          description: "The CICAM Umbrella gives these organizations an opportunity to pool together into one scheme, with each organization having a flexibility to design their Trust rules like any occupational scheme whilst having shared service providers and governed by one Trust Deed."
        },
        {
          title: "CICAM Income Drawdown Fund",
          description: "The CICAM Income Draw down Plan is an investment product that allows you to re-invest your retirement savings. It runs for a minimum of 10 years and one can choose to accept any amount up to a maximum of 15% of the fund balance per annum."
        },
        {
          title: "Discretionary Wealth Management",
          description: "Discretionary wealth management product is tailored investment solution for the High Net worth individuals and corporate clients. The requirements are done in accordance to client's investment policy statements (IPS)."
        }
      ],
      unitTrusts: [
        {
          title: "Money Market Fund",
          description: "Invests in cash and near-cash instruments with the investment objective being capital preservation."
        },
        {
          title: "CIC Wealth Fund",
          description: "Is a low to moderate risk fund which invests in diversified near cash holdings, fixed deposits, and high-yielding interest-bearing instruments in the Kenyan market."
        },
        {
          title: "CIC Dollar Fund",
          description: "Is a low to moderate risk fund that invests in US dollar currency with key underlying investments being cash, near cash, fixed deposits, and bonds."
        },
        {
          title: "CIC Fixed Income Fund",
          description: "Invests in long-term fixed income instruments."
        },
        {
          title: "CIC Balanced Fund",
          description: "Long-term capital growth fund with a balanced portfolio in Equities and Fixed Income instruments."
        },
        {
          title: "CIC Equity Fund",
          description: "Long-term capital growth fund that invests in the equities listed in the Nairobi Securities Exchange (NSE)."
        }
      ]
    },
    topUpInstructions: [
      "Go to the M-PESA menu and click Lipa Na M-PESA",
      "Select Pay Bill",
      "Enter 600118 as the business number",
      "Enter your member number. Do not add any letters or special characters before or after the member number."
    ]
  };

  const investorDocuments = [
    { title: "Unit holder Q&A List 2024", category: "Asset Management", year: "2025" },
    { title: "Notice for CICAM IDD AGM FY 2024", category: "Asset Management", year: "2025" },
    { title: "CICAM IDD Fund FINANCIAL STATEMENTS FY 2024", category: "Asset Management", year: "2025" },
    { title: "2023 AGM CICAM IDD Fund Minutes", category: "Asset Management", year: "2025" },
    { title: "CICAM UMBRELLA 2023 AGM MINUTES FOR THE MEETING HELD ON 28 JUNE 2024", category: "Asset Management", year: "2025" },
    { title: "CICAM UMBRELLA NOTICE & AGENDA - AGM 2024", category: "Asset Management", year: "2025" },
    { title: "CICAM UMBRELLA RETIREMENT FUND SIGNED ACCOUNTS FY 2024", category: "Asset Management", year: "2025" },
    { title: "CIC Asset Management Ltd Proxy form 2025", category: "Asset Management", year: "2025" },
    { title: "CIC Asset Management 13th Annual General Meeting Minutes", category: "Asset Management", year: "2025" },
    { title: "CIC Asset Management Ltd Audited Financial Statements 2024", category: "Asset Management", year: "2025" },
    { title: "CIC Asset Management Ltd Annual General Meeting Notice", category: "Asset Management", year: "2025" },
    { title: "Asset Conflict of Interest Policy", category: "Asset Management", year: "2024" },
    { title: "CIC Unit Trust AGM Q&A", category: "AGM Q&A", year: "2022" },
    { title: "CIC Asset Management Ltd Annual Report & Financial Statements 2023", category: "Financials", year: "2023" },
    { title: "CIC Asset Management Annual Report 2022", category: "Financials", year: "2022" },
    { title: "CIC Asset Management 11th Annual General Meeting Minutes", category: "Unit Trust", year: "2022" },
    { title: "CIC Unit Trust Scheme Annual Report & Financial Statements 2022", category: "Unit Trust", year: "2022" }
  ];

  const openModal = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-red-800 text-white p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">CIC GROUP</h1>
          <div className="space-y-4 text-sm leading-relaxed">
            <p>
              CIC Asset Management Ltd (CICAM) was incorporated in 2007 and was licensed as a fund manager by the Capital
              Markets Authority, Kenya in June 2009. In 2013, CICAM was licensed by the Retirement Benefits Authority, Kenya
              pursuant to fulfilling the mandatory statutory, operational capacity and relevant professional expertise as prescribed
              under the Act.
            </p>
            <p>
              CIC Asset Management Ltd (CICAM) has specialized in the management of investment portfolios for pension fund
              schemes, collective investment schemes and private clients. She is a market leader in this space commanding an
              impressive 41.41% of market share in the collective investment space as of September 2021.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto">
          <div className="flex space-x-0">
            {Object.keys(teamMembers).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-medium transition-colors ${
                  activeTab === tab
                    ? 'bg-yellow-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="max-w-6xl mx-auto p-8">
        {activeTab === 'Quick Facts' ? (
          <div className="space-y-8">
            {/* Quick Facts Header */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">CIC Asset Management quick facts as of 2025</h2>
              
              {/* Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {quickFacts.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-red-700 mb-2">{stat.value}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Current Products */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Current Products</h3>
              <p className="text-gray-700 text-center mb-8 max-w-4xl mx-auto">
                As we craft our strategy for the next five years, our products are key in the objectives, strategic initiatives, actions and functions. As such we highlight the key products that shall help us generate the required revenues as well as model the strategic plan.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Pension Products */}
                <div>
                  <h4 className="text-xl font-bold text-red-700 mb-4">PENSION</h4>
                  <p className="text-gray-700 mb-6 text-sm">
                    Retirement planning is very critical in financial planning and as such we are licensed to offer pension fund management in the following areas:
                  </p>
                  <div className="space-y-6">
                    {quickFacts.products.pension.map((product, index) => (
                      <div key={index} className="border-l-4 border-red-700 pl-4">
                        <h5 className="font-bold text-gray-900 mb-2">{product.title}:</h5>
                        <p className="text-gray-700 text-sm leading-relaxed">{product.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Unit Trusts Products */}
                <div>
                  <h4 className="text-xl font-bold text-red-700 mb-4">UNIT TRUSTS</h4>
                  <p className="text-gray-700 mb-6 text-sm">
                    Under the collective investments scheme (CIS) or Unit Trusts, we have 6 licensed products:
                  </p>
                  <div className="space-y-6">
                    {quickFacts.products.unitTrusts.map((product, index) => (
                      <div key={index} className="border-l-4 border-red-700 pl-4">
                        <h5 className="font-bold text-gray-900 mb-2">{product.title}:</h5>
                        <p className="text-gray-700 text-sm leading-relaxed">{product.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* How to Top Up */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h4 className="text-xl font-bold text-red-700 mb-4">How to top up:</h4>
              <p className="text-gray-700 mb-4 text-sm">
                You can top up your CIC Money Market Fund using the CIC Asset App. You can also top up via M-PESA Paybill 600118 by following these steps:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm">
                {quickFacts.topUpInstructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ol>
            </div>
          </div>
        ) : activeTab === 'Investor Relations' ? (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Investor Relations</h2>
            
            {/* Documents Table */}
            <div className="overflow-x-auto bg-white rounded-lg shadow">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">Title</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">Category</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">Year</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">Downloads</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {investorDocuments.map((doc, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="py-4 px-6 text-gray-900">{doc.title}</td>
                      <td className="py-4 px-6 text-gray-700">{doc.category}</td>
                      <td className="py-4 px-6 text-gray-700">{doc.year}</td>
                      <td className="py-4 px-6">
                        <button className="bg-red-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-red-700 transition-colors">
                          Download
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers[activeTab].map((member) => (
              <div
                key={member.id}
                className="text-center cursor-pointer group"
                onClick={() => openModal(member)}
              >
                <div className="relative mb-4 overflow-hidden rounded-full mx-auto w-48 h-48 bg-gray-300 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 font-medium">Click for details</span>
                  </div>
                </div>
                <h3 className="font-bold text-red-700 text-lg mb-1">{member.name}</h3>
                <p className="text-gray-600 text-sm font-medium">{member.position}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab !== 'Quick Facts' && activeTab !== 'Investor Relations' && teamMembers[activeTab].length === 0 && (
          <div className="text-center py-16 text-gray-500">
            <p>No members to display for this section.</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Modal Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-gray-600 text-sm">Board Chairman</p>
                  <h2 className="text-2xl font-bold text-gray-900">{selectedMember.name}</h2>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              {/* Modal Content */}
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed">{selectedMember.bio}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LifeInsurance;