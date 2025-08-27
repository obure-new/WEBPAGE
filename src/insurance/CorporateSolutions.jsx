import React, { useState } from 'react';
import { ChevronLeft, ArrowUp } from 'lucide-react';

const valuablesCards = [
  { title: 'Fire Industrial', img: 'https://www.tokiomarine.com/content/dam/tokiomarine/sg/non-life/product-business/property/Resized%20-%20FireD.jpg' },
  { title: 'Contractors All Risks', img: 'https://www.hashmicro.com/id/blog/wp-content/uploads/2019/11/Hal-Penting-Yang-Perlu-Diketahui-Tentang-Pajak-Jasa-Konstruksi.jpg' },
  { title: 'Machinery Breakdown', img: 'https://www.market-prospects.com/storage/images/301-1200x675.jpg' },
  { title: 'Professional Indemnity', img: 'https://t3.ftcdn.net/jpg/06/49/17/12/360_F_649171273_VFeywC6mkV83Y96fDbxzXEoiaX4PcX8X.jpg' },
  { title: 'Marine Insurance', img: 'https://cff2.earth.com/uploads/2022/05/19094254/Shipping-scaled.jpg' },
  { title: 'Motor Private Insurance', img: 'https://images-porsche.imgix.net/-/media/0B3F90A75B0141FF8BED694C3C1A323B_7C02423B08CB49C8801E208B2D16A51E_CZ25W18OX0004-911-gt3-white-side?w=2560&h=1440&q=45&crop=faces%2Centropy%2Cedges&auto=format' },
  { title: 'Motor Commercial', img: 'https://www.tatamotors.com/wp-content/themes/TataMotors/images/cv-banner.jpg' },
  { title: 'Agriculture Insurance', img: 'https://images.pexels.com/photos/461717/pexels-photo-461717.jpeg?cs=srgb&dl=pexels-pixabay-461717.jpg&fm=jpg' },
  { title: 'School guard', img: 'https://www.shutterstock.com/image-photo/kids-showing-hands-during-lesson-600nw-667978948.jpg' },
  { title: 'Plate Glass', img: 'https://www.getbcs.com/hubfs/Blog/bcs-blog-what-is-plate-glass-insurance.jpg' },
  { title: 'Erection All Risks', img: 'https://constructionreviewonline.com/wp-content/uploads/2020/03/2020-03-16_5e6ef08b49c3c_building-construction-sunset.jpg' },
  { title: 'Employer Liability', img: 'https://images.pexels.com/photos/955388/pexels-photo-955388.jpeg?cs=srgb&dl=pexels-cytonn-955388.jpg&fm=jpg' },
  { title: 'Public Liability', img: 'https://cdn7.dissolve.com/p/D145_121_331/D145_121_331_1200.jpg' },
];

const BusinessSolutions = () => {
  const [scrollIndex, setScrollIndex] = useState(0);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div
        className="relative h-[80vh] overflow-hidden"
        style={{
          backgroundImage: "url('https://media.istockphoto.com/id/1090318088/vector/conquering-adversity.jpg?s=612x612&w=0&k=20&c=6pOKrPj4Z_8MC57jl2EB_soaXFD45gXmh61grHlHovQ=')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 "></div>
        <div className="relative z-10 container mx-auto px-8 h-full flex items-center">
          <div className="max-w-2xl text-black">
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-8">
              You have worked hard to get here,<br />
              we are here to make sure that you keep going.
            </h1>
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold transition-colors duration-300 transform hover:scale-105 hover:bg-[#a51d2d] hover:text-white">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Protect Your Valuables Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
               Protect your investments
              </h2>
              <p className="text-gray-600 text-base mb-3">
                Business is risky. There are so many uncertainties, but you can sleep better knowing that we have you covered.
              </p>
              <p className="text-gray-600 text-base">
                Our policies are tailored just for you, to make sure that you do not lose your assets & investments that you have worked so hard for.
              </p>
            </div>
            
            <div className="lg:w-2/3">
              <div className="relative">
                {scrollIndex > 0 && (
                  <button
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#a51d2d] hover:bg-[#d7263d] shadow-lg rounded-full p-3 transition-transform duration-200 active:scale-90 animate-pulse"
                    onClick={() => setScrollIndex((prev) => Math.max(prev - 1, 0))}
                    aria-label="Scroll left"
                    style={{ left: '-2rem' }}
                  >
                    <ChevronLeft className="w-6 h-6 text-white transition-transform duration-200" />
                  </button>
                )}
                <div className="overflow-hidden">
                  <div
                    className="flex gap-6 transition-transform duration-500"
                    style={{ transform: `translateX(-${scrollIndex * (100/3)}%)` }}
                  >
                    {valuablesCards.map((card) => (
                      <div
                        key={card.title}
                        className="min-w-[250px] max-w-[250px] h-[300px] group relative overflow-hidden rounded-2xl shadow-lg bg-white cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                      >
                        <img
                          src={card.img}
                          alt={card.title}
                          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110 group-hover:brightness-90"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 group-hover:opacity-60 transition-all duration-300"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="text-white font-semibold text-lg drop-shadow-lg">{card.title}</h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {scrollIndex < valuablesCards.length - 3 && (
                  <button
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#a51d2d] hover:bg-[#d7263d] shadow-lg rounded-full p-3 transition-transform duration-200 active:scale-90 animate-pulse"
                    onClick={() => setScrollIndex((prev) => Math.min(prev + 1, valuablesCards.length - 3))}
                    aria-label="Scroll right"
                    style={{ right: '-2rem' }}
                  >
                    <ChevronLeft className="w-6 h-6 text-white rotate-180 transition-transform duration-200" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plan & Grow Your Money Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
               Go further with your investments
              </h2>
              <p className="text-gray-600 text-base mb-3">
                Do you want to diversify your portfolio while minimising your risks? We are here for you.
              </p>
              <p className="text-gray-600 text-base">
                Our team of qualified portfolio & investment managers will ensure that you get the most out of your investment with us.
              </p>
            </div>
            
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Investment Solutions Card */}
                <div className="min-w-[250px] max-w-[250px] h-[300px] group relative overflow-hidden rounded-2xl shadow-lg bg-white cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <img src="/images/carousel/slide5.jpg" alt="Investment Solutions" className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110 group-hover:brightness-90" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 group-hover:opacity-60 transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-semibold text-lg drop-shadow-lg">Investment Solutions</h3>
                  </div>
                </div>

                {/* Savings Solution Card */}
                <div className="min-w-[250px] max-w-[250px] h-[300px] group relative overflow-hidden rounded-2xl shadow-lg bg-white cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <img src="https://www.ohea.on.ca/uploads/1/2/6/0/12605917/money-2724241-640_orig.jpg" alt="Savings Solution" className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110 group-hover:brightness-90" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 group-hover:opacity-60 transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-semibold text-lg drop-shadow-lg">Savings Solution</h3>
                  </div>
                </div>

                {/* Retirement Solutions Card */}
                <div className="min-w-[250px] max-w-[250px] h-[300px] group relative overflow-hidden rounded-2xl shadow-lg bg-white cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <img src="/images/carousel/slide2.webp" alt="Retirement Solutions" className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110 group-hover:brightness-90" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 group-hover:opacity-60 transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-semibold text-lg drop-shadow-lg">Retirement Solutions</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Protect Your Loved Ones Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Protect your most valued personnel
              </h2>
              <p className="text-gray-600 text-base mb-3">
                You have worked hard to get here.
              </p>
              <p className="text-gray-600 text-base">
                We want to take care of you, you deserve it. Our products have been designed to make sure that you can take the load off, and enjoy what you have worked for.
              </p>
            </div>
            
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Health Solutions Card */}
                <div className="min-w-[250px] max-w-[250px] h-[300px] group relative overflow-hidden rounded-2xl shadow-lg bg-white cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <img src="https://cdn-res.keymedia.com/cdn-cgi/image/w=840,h=504,f=auto/https://cdn-res.keymedia.com/cms/images/us/023/0270_638156165196814228.jpg" alt="Health Solutions" className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110 group-hover:brightness-90" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 group-hover:opacity-60 transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-semibold text-lg drop-shadow-lg">Health Solutions</h3>
                  </div>
                </div>

                {/* Life Protection Solutions Card */}
                <div className="min-w-[250px] max-w-[250px] h-[300px] group relative overflow-hidden rounded-2xl shadow-lg bg-white cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <img src="https://ug.cicinsurancegroup.com/wp-content/uploads/2021/09/family-life-plan-min.png" alt="Life Protection Solutions" className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110 group-hover:brightness-90" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 group-hover:opacity-60 transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-semibold text-lg drop-shadow-lg">Life Protection Solutions</h3>
                  </div>
                </div>

                {/* Accident Card */}
                <div className="min-w-[250px] max-w-[250px] h-[300px] group relative overflow-hidden rounded-2xl shadow-lg bg-white cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <img src="https://media.sciencephoto.com/f0/13/84/86/f0138486-800px-wm.jpg" alt="Accident" className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110 group-hover:brightness-90" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 group-hover:opacity-60 transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-semibold text-lg drop-shadow-lg">Accident</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Bar */}
      <div className="h-2 bg-gradient-to-r from-yellow-400 to-orange-500"></div>

      {/* Scroll*/}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gray-400 hover:bg-gray-500 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 opacity-70 hover:opacity-100"
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};

export default BusinessSolutions;