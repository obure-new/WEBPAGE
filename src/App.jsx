import Header from './components/Header';
import HeroSection from './components/HeroSection';
import GetAQuoteSection from "./insurance/GetAQuoteSection";
import ProductGrid from './insurance/ProductGrid';
import Footer from './components/Footer';


function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <GetAQuoteSection />
      <ProductGrid />
      <Footer />
    </div>
  );
}

export default App;