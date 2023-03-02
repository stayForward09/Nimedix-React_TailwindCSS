import React from 'react'

const SocialButton = (props) => {
  return (
    <button
      className="rounded-full bg-primary-lighter p-2 m-3"
      onClick={() => {
        console.log('button clicked!')
      }}
    >
      {props.img && (
        <img src={props.img} alt="social-btn" className="sm:w-8 w-6" />
      )}
    </button>
  )
}

export default SocialButton
