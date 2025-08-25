import React, { useState, useEffect } from "react";

const slides = [
  {
    image: "/images/carousel/slide1.jpeg",
    title: "We want to help you to <br />secure their future",
    buttonText: "Learn More",
    buttonLink: "#", // Replace with actual link if needed
  },
  {
    image: "/images/carousel/slide5.jpg",
    title: "We are invested in your success",
    description: "Start your investment journey today.",
    buttonText: "Get Started",
    buttonLink: "#", // Replace with actual link if needed
  },
  {
    image: "/images/carousel/slide1.jpeg",
    title: "Enjoy your sunset years, <br /> while enjoying the sunsets",
    buttonText: "Get Started",
    buttonLink: "#", // Replace with actual link if needed
  },
  {
    image: "/images/carousel/slide3.jpg",
    title: "A dream worth having",
    description: "Reinvent the art of living in nature. Get your hands on a prestigious plot of land located less than 30 minutes from Nairobi to Ushirika Gardens.",
    buttonText: "Visit Website",
    buttonLink: "https://ushirkagardens.co.ke", // Example external link
  },
  {
    image: "/images/carousel/slide4.jpg",
    title: "Welcome to CIC Pharmacy <br /> Caring Beyond Prescriptions",
    description: "",
    buttonText: "Learn More",
    buttonLink: "/pharmacy", // Internal pharmacy page
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

  const handleButtonClick = (link) => {
    if (link.startsWith("http")) {
      // External link
      window.open(link, "_blank", "noopener noreferrer");
    } else if (link.startsWith("/")) {
      // Internal link - you can customize this behavior
      // For now, we'll just log it or handle it as needed
      console.log("Navigate to:", link);
      // If you want to use React Router later, uncomment the line below:
      // navigate(link);
    } else {
      // Hash link or other
      window.location.href = link;
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            idx === current 
              ? "translate-x-0 z-10 opacity-100" 
              : idx < current 
                ? "-translate-x-full z-0 opacity-0" 
                : "translate-x-full z-0 opacity-0"
          }`}
        >
          {/* Background Image */}
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
            {slide.description && (
              <p className="text-lg mb-6 drop-shadow">{slide.description}</p>
            )}
            {slide.buttonLink.startsWith("/") ? (
              <a
                href={slide.buttonLink}
                className="bg-yellow-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-full shadow transition"
              >
                {slide.buttonText}
              </a>
            ) : (
              <a
                href={slide.buttonLink}
                target={slide.buttonLink.startsWith("http") ? "_blank" : undefined}
                rel={slide.buttonLink.startsWith("http") ? "noopener noreferrer" : undefined}
                className="bg-yellow-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-full shadow transition"
              >
                {slide.buttonText}
              </a>
            )}
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === current ? "bg-yellow-500 scale-125" : "bg-white bg-opacity-50"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full transition-all duration-300 z-30"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full transition-all duration-300 z-30"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default HeroSection;