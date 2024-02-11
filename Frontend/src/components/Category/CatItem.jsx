import React from 'react'

const CatItem = ({data}) => {
  return (
    <div className="category-item">
    <div className="category-img-box">
      <img
        src={data.img}
        alt="hat & caps"
        width={30}
      />
    </div>
    <div className="category-content-box">
      <div className="category-content-flex">
        <h3 className="category-item-title">{data.title}</h3>
        <p className="category-item-amount">({data.count})</p>
      </div>
      
      <a className="category-btn">
        Show all
      </a>
      
    </div>
  </div>
  )
}

export default CatItem