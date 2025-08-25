import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import GetAQuoteSection from "./insurance/GetAQuoteSection";
import ProductGrid from "./insurance/ProductGrid";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Pharmacy from "./pages/Pharmacy";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Pharmacy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
