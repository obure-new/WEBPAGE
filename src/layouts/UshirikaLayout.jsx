import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import UshirikaHeader from "../components/data/UshirikaHeader";
import UshirikaFooter from "../components/data/UshirikaFooter";
import Form from "../components/Ushirika/Form";

const UshirikaLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleScheduleVisit = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <UshirikaHeader onScheduleVisit={handleScheduleVisit} />
      <main>
        <Outlet />
      </main>
      <UshirikaFooter />
      <Form 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </div>
  );
};

export default UshirikaLayout;