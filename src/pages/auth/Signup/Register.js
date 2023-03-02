import React from 'react'
import { useNavigate } from 'react-router-dom'
import BackButton from '../../../components/BackButton'

const Register = () => {
  const navigate = useNavigate()

  return (
    <div id="register-section">
      <BackButton
        onClick={() => {
          navigate(-1)
        }}
      />
    </div>
  )
}

export default Register
