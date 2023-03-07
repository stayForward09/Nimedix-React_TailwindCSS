import React from 'react'
import DtsBg from '../../assets/images/dts/dts_bg.png'

const DigitalTwinSection = () => {
  return (
    <div id="digital-twin-section" className="w-full bg-white py-16">
      <div className="container mx-auto text-center">
        <p className="title text-dark lg:text-7xl md:text-5xl text-4xl text-2xl mb-16">
          Digital Twin (DTs)
        </p>
        <img src={DtsBg} alt="dts-bg" className="w-full" />
      </div>
    </div>
  )
}

export default DigitalTwinSection
