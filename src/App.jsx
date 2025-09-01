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
import UshirikaContactUs from "./components/Ushirika/ContactUs";
import News from "./components/Ushirika/News";
import AboutUs from "./components/Ushirika/AboutUs";
import Resources from "./components/Ushirika/Resources";
import Asset from "./cicproducts/Asset";
import LifeInsurance from "./cicproducts/LifeInsurance";
import GeneralInsurance from "./cicproducts/GeneralInsurance";
import Complaint from "./contact/Complaint";
import HomeContactUs from "./contact/HomeContactUs";
import Career from "./contact/Career";
import Blog from "./contact/Blog";
import CicGroup from "./pages/CicGroup";
import CicGroupLayout from "./layouts/CicGroupLayout";

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
          <Route path="/products" element={<Asset />} />
          <Route path="/assetmanagement" element={<Asset />} />
          <Route path="/lifeinsurance" element={<LifeInsurance />} />
          <Route path="/generalinsurance" element={<GeneralInsurance />} />
          <Route path="/complaints" element={<Complaint />} />
          <Route path="/homecontactus" element={<HomeContactUs />} />
          <Route path="/career" element={<Career />} />
          <Route path="/blog" element={<Blog />} />
        </Route>

        {/* Ushirika section */}
        <Route element={<UshirikaLayout />}>
          <Route path="/ushirika" element={<Ushirika />} />
          <Route path="/ushirika-gardens" element={<UshirikaGardens />} />
          <Route path="/uzuri-pines" element={<UzuriPines />} />
          <Route path="/contact" element={<UshirikaContactUs />} />
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/resources" element={<Resources />} />
        </Route>

        {/* CIC GROUP MAIN LAYOUT */}
        <Route element={<CicGroupLayout />}>
          <Route path="/cic-group" element={<CicGroup />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
