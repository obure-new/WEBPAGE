import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Pharmacy from "./pages/Pharmacy";
import Individual from "./pages/Individual";
import Business from "./pages/Business";
import Corporate from "./pages/Corporate";
import Cooperative from "./pages/Cooperative";
import Claims from "./pages/Claims";
import Ushirika from "./pages/Ushirika";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pharmacy" element={<Pharmacy />} />
        <Route path="/individual" element={<Individual />} />
        <Route path="/business" element={<Business />} />
        <Route path="/corporate" element={<Corporate />} />
        <Route path="/cooperative" element={<Cooperative />} />
        <Route path="/claims" element={<Claims />} />
        <Route path="/ushirika" element={<Ushirika />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;