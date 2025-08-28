import React from "react";
import { Outlet } from "react-router-dom";
import UshirikaHeader from "../components/data/UshirikaHeader";
import UshirikaFooter from "../components/data/UshirikaFooter"; 
import UzuriPines from "../components/Ushirika/UzuriPines";


const UshirikaLayout = () => {
  return (
    <div className="min-h-screen bg-white">
      <UshirikaHeader />
      <main>
        <Outlet />
      </main>
      <UshirikaFooter />
    </div>
  );
};

export default UshirikaLayout;
