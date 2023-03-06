import React from 'react'
import StatusBarLogo from '../assets/images/status_bar.png'

const StatusBar = () => {
  return (
    <div className="w-full bg-primary">
      <div className="container mx-auto py-8 flex sm:flex-row flex-col items-center gap-8">
        <div className="flex items-center gap-8 sm:items-center items-start">
          <div className="rounded-full border-4 border-secondary p-1">
            <div className="rounded-full bg-white w-4 h-4"></div>
          </div>
          <div>
            <p className="title text-white lg:text-3xl md:text-2xl sm:text-xl text-base">
              Digital health tools have immense potential to bring affordable,
              quality health care to people across geographies — not just the
              unserved, but also the underserved. - EDISON Alliance 2021
            </p>
          </div>
        </div>
        <img src={StatusBarLogo} alt="status-bar-bg" className="w-64 h-64" />
      </div>
    </div>
  )
}

export default StatusBar
