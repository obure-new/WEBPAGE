import React from 'react';
import HeroSection from '../components/HeroSection';
import GetAQuoteSection from '../insurance/GetAQuoteSection';
import ProductGrid from '../insurance/ProductGrid';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <GetAQuoteSection />
      <ProductGrid />
    </div>
  );
};

export default Home;
