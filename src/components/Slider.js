import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/counter';

const Slider = () => {
const {info,count}= useSelector(state => state.counter);


const dispatch = useDispatch();

    return (
        <div className="w-90% h-50vh flex relative flex-col">
            <div className="flex text-center absolute left-[50%] top-24">
            
            <h1>{info[count].Album}</h1>
           
            </div>
           
            <div className="flex items-center my-48 justify-between ">
            {/**left Arrow */}
            <div onClick={()=>dispatch(decrement())} className="cursor-pointer ml-20 ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
</svg> 
            </div>
            {/**Image */}
            <div>
                
                    <img className="object-contain w-screen h-[300px] justify-center items-center " src={info[count].img} alt="" />
                
            </div>
            {/**Right Arrow */}
            <div onClick={()=>dispatch(increment())} className="z-50 absolute mr-20 right-0 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
            </div>
            
           
            </div>

            <h1 className=" mx-auto absolute top-[550px] left-[50%]">{info[count].title}</h1>            
            
        </div>
    )
}

export default Slider
