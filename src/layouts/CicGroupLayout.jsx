import React from 'react'
import { Outlet } from "react-router-dom";
import MainHeader from '../general/headercontents/MainHeader';
import MainFooter from '../general/headercontents/MainFooter';

const CicGroupLayout = () => {
  return (
    <div className="min-h-screen bg-white">
      <MainHeader />
      <main>
        <Outlet /> 
      </main>
      <MainFooter />
    </div>
  )
}

export default CicGroupLayout;
