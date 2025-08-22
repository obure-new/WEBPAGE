import React, { useState, useEffect } from "react";

const slides = [
  {
    image: "/images/carousel/slide1.jpeg",
    title: "We want to help you to <br />secure their future",
    
  },
  {
    image: "/images/carousel/slide5.jpg",
    title: "We are invested in your success",
    description: "Start your investement journey today.",
  },
  {
    image: "/images/carousel/slide1.jpeg",
    title: "Enjoy your sunset years, <br /> while enjoying the sunsets",
  },
  {
    image: "/images/carousel/slide3.jpg",
    title: "A dream worth having",
    description: "Reinvent the art of living in nature.Get your hands on a prestigious plot of land located less than 30 minutes from Nairobi to Ushirka Gardens..",
  },
  {
    image: "/images/carousel/slide4.jpg",
    title: "Welcome to CIC Pharmacy <br /> Caring Beyond Prescriptions",
    description: "",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
            idx === current ? "translate-x-0 z-10 opacity-100" : "translate-x-full z-0 opacity-0"
          }`}
        >
          {/* Background Image*/}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>

          <div className="relative z-20 flex flex-col items-start justify-center text-white text-left w-full h-full px-8 max-w-2xl">
            <h2
              className="text-4xl font-bold mb-4 drop-shadow-lg"
              dangerouslySetInnerHTML={{ __html: slide.title }}
            />
            <p className="text-lg mb-6 drop-shadow">{slide.description}</p>
            <a
              href="#"
              className="bg-yellow-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-full shadow transition"
            >
              Learn More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSection;