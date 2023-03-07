import React from 'react'
import AppButton from '../../components/AppButton'
import DownloadBgIcon from '../../assets/images/download/download_bg.png'
import AppStoreIconDark from '../../assets/images/app_download/app_store_dark.png'
import GooglePlayIconDark from '../../assets/images/app_download/google_play_light.png'

const DownloadSection = () => {
  return (
    <div id="download-section" className="bg-white sm:py-24 py-12">
      <div className="container mx-auto">
        <div className="bg-primary rounded-3xl md:p-16 p-8 border-box grid md:gap-32 gap-16 lg:grid-cols-2 grid-cols-1 items-center">
          <div className="block">
            <p className="text-secondary md:text-2xl sm:text-xl text-base">
              Ready to get started?
            </p>
            <p className="title text-white lg:text-7xl md:text-5xl text-4xl text-2xl text-start my-10 break-words">
              Download the App to start exploring
            </p>
            <p className="text-grey-light my-10 md:text-2xl text-base">
              Get full access to affordable and easy to use digital health care
              platform. Unlimited access to top-rated providers and better
              health care services designed for your health needs and security.
            </p>
            <div className="flex md:justify-start justify-center">
              <AppButton
                variant="secondary"
                icon={AppStoreIconDark}
                bgColor="white"
                labelColor="amber-500"
                label="App Store"
              />
              <AppButton
                icon={GooglePlayIconDark}
                bgColor="transparent"
                labelColor="white"
                label="Google Play"
                variant="outline"
              />
            </div>
          </div>
          <div className="bg-primary-light rounded-3xl">
            <img
              src={DownloadBgIcon}
              alt="download-bg"
              className="w-4/5 mx-auto my-4"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DownloadSection
