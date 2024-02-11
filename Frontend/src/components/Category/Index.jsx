import React from 'react'
import CatItem from './CatItem'

function CategoryIndex({data}) {
  return (
    <div className="category">
    <div className="container">
      <div className="category-item-container has-scrollbar">
        
      {data? data.map((item,idx)=>{
        return(
        
          <CatItem data={item} key={idx}/>
       
          )
      }) :""}

      </div>
    </div>
  </div>
  )
}

export default CategoryIndex