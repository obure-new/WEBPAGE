import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Pharmacy from './pages/Pharmacy';
import Individual from './pages/Individual';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pharmacy" element={<Pharmacy />} />
          <Route path="/individual" element={<Individual />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;