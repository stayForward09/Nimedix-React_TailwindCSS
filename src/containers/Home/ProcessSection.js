import React from 'react'
import ProcessBg from '../../assets/images/process/process_bg.png'
import CheckIcon from '../../assets/images/check.png'

const ProcessSection = () => {
  return (
    <div id="process-section" className="w-full bg-light-green py-20">
      <div className="container mx-auto grid gap-20 md:grid-cols-2 grid-cols-1 items-center">
        <div className="block md:order-first order-last">
          <img src={ProcessBg} alt="process-bg" className="" />
        </div>
        <div className="block word-wrap: break-words">
          <div className="flex space-x-1 items-center">
            <p className="title text-dark md:text-start text-center lg:text-7xl md:text-5xl sm:text-4xl text-3xl">
              Our Process
            </p>
            <hr className="border-2 border-secondary sm:w-1/6 w-1/3" />
          </div>
          <p className="text-grey md:text-2xl text-base my-8">
            Simplified and top-notch telemedicine health care for you.
          </p>
          <div className="flex gap-4 sm:my-8 my-4 items-center">
            <img
              src={CheckIcon}
              alt="check-icon"
              className="lg:h-8 md:h-6 h-4"
            />
            <p className="text-cark lg:text-2xl md:text-xl text-base">
              Sign up on web or in-app
            </p>
          </div>
          <div className="flex gap-4 sm:my-8 my-4 items-center">
            <img
              src={CheckIcon}
              alt="check-icon"
              className="lg:h-8 md:h-6 h-4"
            />
            <p className="text-cark lg:text-2xl md:text-xl text-base">
              Find a doctor & book appointment
            </p>
          </div>
          <div className="flex gap-4 sm:my-8 my-4 items-center">
            <img
              src={CheckIcon}
              alt="check-icon"
              className="lg:h-8 md:h-6 h-4"
            />
            <p className="text-cark lg:text-2xl md:text-xl text-base">
              Instant payment (Fiat/Crypto)
            </p>
          </div>
          <div className="flex gap-4 sm:my-8 my-4 items-center">
            <img
              src={CheckIcon}
              alt="check-icon"
              className="lg:h-8 md:h-6 h-4"
            />
            <p className="text-cark lg:text-2xl md:text-xl text-base">
              Enjoy your consultation
            </p>
          </div>
          <div className="flex gap-4 sm:my-8 my-4 items-center">
            <img
              src={CheckIcon}
              alt="check-icon"
              className="lg:h-8 md:h-6 h-4"
            />
            <p className="text-cark lg:text-2xl md:text-xl text-base">
              Access medical records as NFTs
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProcessSection
