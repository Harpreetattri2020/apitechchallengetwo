import React from 'react'
import Images from './Images'
import data from "./data.json";
const RelatedImages = () => {
    return (
        <div className=" flex  space-x-5 space-y-5 p-5  grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-25 mx-auto">
            {data && data.map((items)=>{
            return(
             <Images key={items.id} imgs={items.img} title={items.title} album={items.album}/>)
            })}
            
                      
          </div>
        
    )
}

export default RelatedImages
