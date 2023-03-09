import React from 'react'
const PartnerCard = (props) => {
  return (
    <div className="bg-grey-light rounded-2xl shadow-xl shadow-grey-light border-t-[1px] border-[#f5f5f5] pb-2 m-2">
      <div className="h-full flex md:py-10 py-4 md:px-16 px-0 bg-white md:rounded-2xl rounded-lg items-center justify-center">
        <img
          src={props.logo}
          alt="partner-logo"
          className="md:h-8 sm:h-4 h-4 aspect-auto"
        />
        {props.label && (
          <p className="p-0 md:text-2xl text-sm ml-2">{props.label}</p>
        )}
      </div>
    </div>
  )
}

export default PartnerCard
