import React from 'react'
import StatusBarBg from '../assets/images/status_bar_bg.png'

const StatusBar = () => {
  return (
    <div className="w-full bg-primary">
      <div className="container mx-auto">
        <img src={StatusBarBg} alt="status-bar-bg" className="" />
      </div>
    </div>
  )
}

export default StatusBar
