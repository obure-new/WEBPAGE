import React from 'react'

const StatsSection = () => {
  return (
    <div>
      <section className="py-16 bg-gradient-to-r from-yellow-300 via-white to-[#a51d2d]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-yellow-400 p-6 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold text-[#a51d2d] mb-2">125</h3>
              <p className="text-white font-semibold">Products</p>
            </div>
            <div className="bg-[#a51d2d] p-6 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold text-yellow-400 mb-2">23.68B</h3>
              <p className="text-white font-semibold">GWP</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold text-[#a51d2d] mb-2">46.7B</h3>
              <p className="text-yellow-500 font-semibold">Total Assets</p>
            </div>
            <div className="bg-yellow-400 p-6 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold text-[#a51d2d] mb-2">8.10%</h3>
              <p className="text-white font-semibold">Market Share</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default StatsSection
