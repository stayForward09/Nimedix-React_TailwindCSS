import React from 'react'
import SearchIcon from '../assets/images/form/search_dark.png'
import ArrowIcon from '../assets/images/form/arrow_right.png'

const SearchBar = (props) => {
  return (
    <div className="w-full bg-white py-2">
      <div className="container mx-auto py-4">
        <div className="flex bg-grey-light rounded-full items-center justify-between p-2 gap-2">
          <div className="flex space-x-3 w-full">
            <img src={SearchIcon} className="w-8 h-8 ml-2" alt="search-icon" />
            <input
              type="text"
              value={props.value}
              onChange={(e) => {
                props.onChangeText(e.target.value)
              }}
              placeholder="Find doctor, symptoms, pharmacy, drugs and more"
              className="w-full text-dark bg-transparent border-transparent focus:border-transparent focus:outline-none placeholder-dark-light"
            />
          </div>
          <button className="py-2 px-4 rounded-full bg-primary">
            <div className="flex items-center">
              <p className="p-0 text-white">Send</p>
              <img src={ArrowIcon} alt="btn-icon" className="w-4 h-4 ml-2" />
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
