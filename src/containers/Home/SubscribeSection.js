import React from 'react'
import SubscribeBar from '../../components/SubscribeBar'

const SubscribeSection = () => {
  return (
    <div id="subscribe-section" className="w-full bg-white py-24">
      <div className="container mx-auto text-center">
        <p className="title text-primary font-black md:text-6xl text-4xl mb-4">
          Lets keep you updated
        </p>
        <p className="text-grey md:text-2xl text-xl mb-8">
          Subscribe to our newsletter to get feeds, offers and promos.
        </p>
        <SubscribeBar />
      </div>
    </div>
  )
}

export default SubscribeSection
