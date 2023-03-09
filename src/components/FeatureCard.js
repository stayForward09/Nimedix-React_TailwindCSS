import React from 'react'

const FeatureCard = (props) => {
  return (
    <div className="bg-white shadow-xl shadow-grey-light rounded-3xl text-center p-8">
      <img src={props.logo} alt="feature-card-logo" className="h-32 mx-auto" />
      <p className="title text-dark sm:text-4xl text-xl text-bold break-words my-4">
        {props.title}
      </p>
      <p className="p-0 text-grey sm:text-xl text-sm break-words my-4">
        {props.description}
      </p>
    </div>
  )
}

export default FeatureCard
