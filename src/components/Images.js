import React from 'react'

const Images = ({album,imgs,title}) => {
    return (
        
            <div className="mt-[20px] ">

            <img className="object-contain " src={imgs} alt="" />
            </div>
        
    )
}

export default Images
