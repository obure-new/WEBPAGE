import React from 'react';
import HeroSection from '../components/HeroSection';
import GetAQuoteSection from '../insurance/GetAQuoteSection';
import ProductGrid from '../insurance/ProductGrid';
import NewsletterContactSection from '../components/NewsletterContactSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <GetAQuoteSection />
      <ProductGrid />
      <NewsletterContactSection />
    </div>
  );
};

export default Home;
