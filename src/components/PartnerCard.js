import React from 'react'
const PartnerCard = (props) => {
  return (
    <div className="bg-grey-light rounded-2xl shadow-xl shadow-grey-light border-2 border-grey-light pb-2 m-2">
      <div className="h-full flex py-10 px-16 bg-white rounded-2xl items-center justify-center">
        <img src={props.logo} alt="partner-logo" className="h-8 aspect-auto" />
        {props.label && <p className="p-0 text-2xl ml-2">{props.label}</p>}
      </div>
    </div>
  )
}

export default PartnerCard
