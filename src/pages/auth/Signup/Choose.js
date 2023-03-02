import React from 'react'
import { useNavigate } from 'react-router-dom'
import BackButton from '../../../components/BackButton'

const Choose = () => {
  const navigate = useNavigate()

  return (
    <div id="auth-choose">
      <BackButton
        onClick={() => {
          navigate(-1)
        }}
      />
    </div>
  )
}

export default Choose
