import React from 'react'
import { Outlet } from 'react-router-dom'

const SignUp = () => {
  return (
    <div
      id="sign-up"
      className="w-screen h-screen fixed top-0 left-0 grid grid-cols-2"
    >
      <div className="w-full h-full bg-primary">
        <p>Create Account</p>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default SignUp
