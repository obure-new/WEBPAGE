import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import UshirikaLayout from "./layouts/UshirikaLayout";
import Home from "./pages/Home";
import Pharmacy from "./pages/Pharmacy";
import Individual from "./pages/Individual";
import Business from "./pages/Business";
import Corporate from "./pages/Corporate";
import Cooperative from "./pages/Cooperative";
import Claims from "./pages/Claims";
import Ushirika from "./pages/Ushirika";
import UshirikaGardens from "./components/Ushirika/UshirikaGardens";
import UzuriPines from "./components/Ushirika/UzuriPines";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main site */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/pharmacy" element={<Pharmacy />} />
          <Route path="/individual" element={<Individual />} />
          <Route path="/business" element={<Business />} />
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/cooperative" element={<Cooperative />} />
          <Route path="/claims" element={<Claims />} />
        </Route>

        {/* Ushirika section */}
        <Route element={<UshirikaLayout />}>
          <Route path="/ushirika" element={<Ushirika />} />
          <Route path="/ushirika-gardens" element={<UshirikaGardens />} />
          <Route path="uzuripines" element={<UzuriPines />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
