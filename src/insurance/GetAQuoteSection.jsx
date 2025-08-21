import React, { useState } from 'react';
import { Calendar, DollarSign, FileText, BookOpen, Umbrella } from 'lucide-react';

function GetAQuoteSection() {
  const [selectedProduct, setSelectedProduct] = useState('');

  const products = [
    {
      id: 'cic-easy-bima',
      name: 'CIC Easy Bima',
      icon: Calendar,
    },
    {
      id: 'invest-money-market',
      name: 'Invest in Money Market Fund',
      icon: DollarSign,
    },
    {
      id: 'medical-insurance',
      name: 'Medical Insurance',
      icon: FileText,
    },
    {
      id: 'child-education',
      name: 'Save for your Child\'s Education',
      icon: BookOpen,
    },
    {
      id: 'retirement',
      name: 'Jipange for Retirement',
      icon: Umbrella,
    }
  ];

  const handleProductClick = (productId) => {
    setSelectedProduct(productId);
    console.log(`Selected product: ${productId}`);
  };

  return (
    <section className="py-16 bg-[#a51d2d] rounded-3xl mx-4 md:mx-24 mt-[-60px] relative z-20 shadow-lg">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center text-white mb-12">
          <h3 className="text-lg font-medium mb-2 opacity-90">Get a Quote</h3>
          <h2 className="text-4xl md:text-5xl font-bold">How can we help you?</h2>
        </div>

        {/* Products Grid */}
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <div
                key={product.id}
                onClick={() => handleProductClick(product.id)}
                  className="bg-transparent border-2 border-white/30 rounded-2xl p-8 text-center hover:bg-yellow-400/90 transition-all duration-300 cursor-pointer group min-w-[200px] max-w-[240px] flex-1"
              >
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:text-black">
                  {index === 0 && (
                    // CIC Easy Bima
                    <svg className="w-16 h-16 text-white group-hover:text-black group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="1.5"/>
                      <line x1="16" y1="2" x2="16" y2="6" strokeWidth="1.5"/>
                      <line x1="8" y1="2" x2="8" y2="6" strokeWidth="1.5"/>
                      <line x1="3" y1="10" x2="21" y2="10" strokeWidth="1.5"/>
                      <circle cx="8" cy="14" r="1" fill="currentColor"/>
                      <circle cx="12" cy="14" r="1" fill="currentColor"/>
                      <circle cx="16" cy="14" r="1" fill="currentColor"/>
                      <circle cx="8" cy="18" r="1" fill="currentColor"/>
                      <circle cx="12" cy="18" r="1" fill="currentColor"/>
                      <path d="m17 14 2 2 4-4" strokeWidth="1.5" fill="none"/>
                    </svg>
                  )}
                  {index === 1 && (
                    // Money/Investment icon
                    <svg className="w-16 h-16 text-white group-hover:text-black group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z" strokeWidth="1.5"/>
                      <circle cx="12" cy="12" r="3" strokeWidth="1.5"/>
                      <path d="M12 9v6" strokeWidth="1.5"/>
                      <path d="M10.5 10.5h3" strokeWidth="1.5"/>
                      <path d="M10.5 13.5h3" strokeWidth="1.5"/>
                    </svg>
                  )}
                  {index === 2 && (
                    // Medical/Health icon
                    <svg className="w-16 h-16 text-white group-hover:text-black group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeWidth="1.5"/>
                      <path d="M9 9h6v6H9z" strokeWidth="1.5" fill="none"/>
                      <path d="M12 6v3" strokeWidth="1.5"/>
                      <path d="M12 15v3" strokeWidth="1.5"/>
                      <path d="M6 12h3" strokeWidth="1.5"/>
                      <path d="M15 12h3" strokeWidth="1.5"/>
                      <circle cx="7" cy="7" r="1" fill="currentColor"/>
                      <path d="m16 8 1-1 2 2" strokeWidth="1.5" fill="none"/>
                    </svg>
                  )}
                  {index === 3 && (
                    // Education/Book icon
                    <svg className="w-16 h-16 text-white group-hover:text-black group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" strokeWidth="1.5"/>
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" strokeWidth="1.5"/>
                      <path d="M8 7h8" strokeWidth="1.5"/>
                      <path d="M8 11h6" strokeWidth="1.5"/>
                      <path d="M8 15h4" strokeWidth="1.5"/>
                    </svg>
                  )}
                  {index === 4 && (
                    // Retirement/Protection icon
                    <svg className="w-16 h-16 text-white group-hover:text-black group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeWidth="1.5"/>
                      <path d="M12 2a3 3 0 0 1 3 3c0 1-1 2-3 2s-3-1-3-2a3 3 0 0 1 3-3z" strokeWidth="1.5"/>
                      <circle cx="12" cy="18" r="2" strokeWidth="1.5"/>
                    </svg>
                  )}
                </div>

                <h3 className="text-white font-semibold text-lg leading-tight group-hover:text-black transition-colors">
                  {product.name}
                </h3>
              </div>
            );
          })}
        </div>

      </div>
       {/* Bottom spacing */}
        <div className="mt-12 text-center">
          <p className="text-white/80 text-sm">
            Click on any option above to get started with your personalized quote
          </p>
        </div>
    </section>
  );
}

export default GetAQuoteSection;