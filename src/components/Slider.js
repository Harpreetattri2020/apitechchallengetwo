import React from 'react'

const Slider = () => {
    return (
        <div className="w-90% h-50vh flex relative">
            <div className="flex items-center my-48 justify-between ">
            {/**left Arrow */}
            <div className="cursor-pointer ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
</svg> 
            </div>
            {/**Right Arrow */}
            <div className="absolute right-0 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
            </div>
            </div>
        </div>
    )
}

export default Slider
