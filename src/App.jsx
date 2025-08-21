import Header from './components/Header';
import HeroSection from './components/HeroSection';
import GetAQuoteSection from "./insurance/GetAQuoteSection";
import StatsSection from './home/StatsSection';


function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <GetAQuoteSection />
      <StatsSection />
    </div>
  );
}

export default App;