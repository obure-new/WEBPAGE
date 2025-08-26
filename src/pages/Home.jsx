import React from 'react';
import HeroSection from '../components/HeroSection';
import GetAQuoteSection from '../sections/GetAQuoteSection';
import ProductGrid from '../sections/ProductGrid';
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
