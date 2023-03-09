import React, { useState } from 'react'
import JoinWaitlist from '../JoinWaitlist'
import AppButton from '../../components/AppButton'
import AppStoreIconDark from '../../assets/images/app_download/app_store_dark.png'
import GooglePlayIconDark from '../../assets/images/app_download/google_play_dark.png'
import ArrowRight from '../../assets/images/banner/arrow_right_long.png'

const BannerSection = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div id="banner-section" className="w-full bg-primary">
      <div
        id="banner-section-container"
        className="container mx-auto lg:py-16 md:py-14 py-8"
      >
        <div className="block md:w-1/2 w-full">
          <p className="p-0 text-tertiary-light lg:text-3xl md:text-3xl sm:text-2xl text-xl sm:mb-8 mb-4 font-bold">
            NiMEDix
          </p>
          <p className="title text-white lg:text-7xl md:text-5xl sm:text-4xl text-3xl sm:mb-8 mb-4 break-words">
            Better healthcare with technology
          </p>
          <p className="p-0 text-grey-light md:text-lg text-sm">
            Patient-centric and doctors driven digital healthcare platform built
            on Blockchain and A.I for better care delivery.
          </p>
          <div className="flex flex-row justify-start md:my-16 my-4">
            <AppButton
              variant="primary"
              icon={AppStoreIconDark}
              bgColor="success-light"
              labelColor="amber-500"
              label="App Store"
            />
            <AppButton
              variant="secondary"
              icon={GooglePlayIconDark}
              bgColor="white"
              labelColor="dark"
              label="Google Play"
            />
          </div>
          <div className="flex items-center mb-24">
            <img src={ArrowRight} alt="arrow-icon" className="h-4" />
            <p className="p-0 text-light mx-2">Join our</p>
            <button
              className="text-secondary underline"
              onClick={() => {
                setShowModal(true)
              }}
            >
              Waitlist
            </button>
          </div>
          <div className="sm:hidden block w-[90vw] h-[30vh]"></div>
        </div>
        {showModal && (
          <JoinWaitlist
            dismiss={() => {
              setShowModal(false)
            }}
          />
        )}
      </div>
    </div>
  )
}

export default BannerSection
