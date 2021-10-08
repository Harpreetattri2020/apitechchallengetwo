import React from 'react'

const Slider = () => {
    return (
        <div className="w-90% h-50vh flex relative flex-col">
            <div className="flex text-center absolute left-[50%] top-24">
            <h1>Album Title</h1>
            </div>
           
            <div className="flex items-center my-48 justify-between ">
            {/**left Arrow */}
            <div className="cursor-pointer ml-20 ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
</svg> 
            </div>
            {/**Image */}
            <div>
                
                    <img className="object-contain w-screen h-[300px] justify-center items-center " src="https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2017/11/04133712/waterfall-750x500.jpg" alt="" />
                
            </div>
            {/**Right Arrow */}
            <div className="z-50 absolute mr-20 right-0 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
            </div>
            
           
            </div>

            <h1 className=" mx-auto absolute top-[550px] left-[50%]">Selected Photo</h1>            
            
        </div>
    )
}

export default Slider
