import React from 'react';
import HeroSection from '../components/MainContent/HeroSection';
import GetAQuoteSection from '../sections/GetAQuoteSection';
import ProductGrid from '../sections/ProductGrid';
import NewsletterContactSection from '../components/MainContent/NewsletterContactSection';

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
