import React from 'react'
import Images from './Images'

import { useSelector } from 'react-redux';
const RelatedImages = () => {
    const {info}= useSelector(state => state.counter);
    
    return (
        <div className=" flex  space-x-5 space-y-5 p-5  grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-25 mx-auto">
            {info && info.map((items)=>{
            return(
             <Images key={items.id} id={items.id} imgs={items.img} title={items.title} album={items.album}/>)
            })}
            
                      
          </div>
        
    )
}

export default RelatedImages
