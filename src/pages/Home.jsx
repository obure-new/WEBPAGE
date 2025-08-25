import React from 'react';
import HeroSection from '../components/HeroSection';
import GetAQuoteSection from '../components/GetAQuoteSection';
import ProductGrid from '../components/ProductGrid';

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
