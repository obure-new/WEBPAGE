import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/MainContent/Header";
import Footer from "../components/MainContent/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
