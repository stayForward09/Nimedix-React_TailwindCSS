import React from 'react'
import JoinWaitlist from '../JoinWaitlist'
import AppButton from '../../components/AppButton'
import AppStoreIconDark from '../../assets/images/app_download/app_store_dark.png'
import GooglePlayIconDark from '../../assets/images/app_download/google_play_dark.png'
import ArrowRight from '../../assets/images/banner/arrow_right_long.png'

const BannerSection = () => {
  return (
    <div id="banner-section" className="w-full bg-primary">
      <div
        id="banner-section-container"
        className="container mx-auto bg-[url('/src/assets/images/banner/bg_banner_mobile.png')] py-16"
      >
        <div className="block md:w-1/2 w-full">
          <p className="p-0 text-tertiary-light text-4xl mb-8">Nimedix</p>
          <p className="title text-white lg:text-7xl md:text-5xl text-4xl mb-8 break-words">
            Better healthcare with technology
          </p>
          <p className="p-0 text-grey-light">
            Patient-centric and doctors driven digital healthcare platform
            leveraging Blockchain and A.I to challenge health care inequities
          </p>
          <div className="flex flex-row md:justify-start justify-center my-16">
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
            <p className="p-0 text-light mx-2">Join our waitlist</p>
            <button
              href="/waitlist"
              className="text-secondary underline"
              data-te-toggle="modal"
              data-te-target="#join-waitlist-modal"
            >
              Waitlist
            </button>
          </div>
        </div>
        <JoinWaitlist />
      </div>
    </div>
  )
}

export default BannerSection
