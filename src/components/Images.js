import React from 'react'
import { useDispatch } from 'react-redux'
import { clickon } from '../redux/counter';
const Images = ({id,album,imgs,title}) => {
    
    const dispatch=useDispatch();
    return (
        
            <div className="mt-[20px] ">

            <img onClick={()=>dispatch(clickon(id))} className="object-contain " src={imgs} alt="" />
            </div>
        
    )
}

export default Images
