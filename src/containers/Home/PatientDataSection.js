import React from 'react'
import PatientBg from '../../assets/images/patient_data/patient_data_bg.png'

const PatientDataSection = () => {
  return (
    <div id="patient-data-section" className="w-full bg-white py-16">
      <div className="container mx-auto text-center">
        <p className="title text-dark lg:text-7xl md:text-5xl text-4xl mb-16">
          Patient Data
        </p>
        <p className="text-grey md:text-2xl text-base mb-24">
          To better treat patients, all current patient data are converted into
          Non Fungible Tokens, Digital Twins NFT with visual summary for
          providers with live links to X- Rays, MRI’s, and other important
          patient data.
        </p>
        <img src={PatientBg} alt="patient-data-bg" className="w-full" />
        <p className="text-grey md:text-2xl text-base mt-24">
          This new platform is positioned to become a “right-hand” for busy
          primary practice doctors, nurses and stakeholders, as well as
          emergency medical care providers that often had much less than 90
          seconds to view any kind of existing patient data. This system is
          Integration with EHR systems for our BioNFTs and PHR system for
          Digital Twins. NiMEDix is determined to alleviate another common
          frustration by eliminating the need to log in to separate record
          systems to make decision.
        </p>
      </div>
    </div>
  )
}

export default PatientDataSection
