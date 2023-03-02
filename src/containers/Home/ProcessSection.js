import React from 'react'
import ProcessBg from '../../assets/images/process/process_bg.png'
import CheckIcon from '../../assets/images/check.png'

const ProcessSection = () => {
  return (
    <div id="process-section" className="w-full bg-light-green py-20">
      <div className="container mx-auto grid gap-20 md:grid-cols-2 grid-cols-1 items-center">
        <div className="block">
          <img src={ProcessBg} alt="process-bg" className="" />
        </div>
        <div className="block word-wrap: break-words">
          <p className="title text-dark md:text-start text-center lg:text-7xl md:text-5xl text-4xl">
            Our Process
          </p>
          <p className="text-grey md:text-2xl text-base my-8">
            Simplified and top-notch telemedicine health care for you.
          </p>
          <div className="flex gap-4 my-8 items-center">
            <img src={CheckIcon} alt="check-icon" className="lg:h-8 h-6" />
            <p className="text-cark lg:text-2xl text-xl">
              Sign up on web or in-app
            </p>
          </div>
          <div className="flex gap-4 my-8 items-center">
            <img src={CheckIcon} alt="check-icon" className="lg:h-8 h-6" />
            <p className="text-cark lg:text-2xl text-xl">
              Find a doctor & book appointment
            </p>
          </div>
          <div className="flex gap-4 my-8 items-center">
            <img src={CheckIcon} alt="check-icon" className="lg:h-8 h-6" />
            <p className="text-cark lg:text-2xl text-xl">
              Instant payment (Fiat/Crypto)
            </p>
          </div>
          <div className="flex gap-4 my-8 items-center">
            <img src={CheckIcon} alt="check-icon" className="lg:h-8 h-6" />
            <p className="text-cark lg:text-2xl text-xl">
              Enjoy your consultation
            </p>
          </div>
          <div className="flex gap-4 my-8 items-center">
            <img src={CheckIcon} alt="check-icon" className="lg:h-8 h-6" />
            <p className="text-cark lg:text-2xl text-xl">
              Access medical records as NFTs
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProcessSection
