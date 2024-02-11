import React from 'react'
import { Link } from 'react-router-dom'

const HomeProduct = ({data}) => {
  return (
    <div className="showcase">
<Link to={`/product/${data.id}`}>
    <a  className="showcase-img-box">
      <img
        src={data.img}
        alt={data.title}
        className="showcase-img"
        width={70}
      />
    </a>
    </Link>
    <div className="showcase-content">
    <Link to={`/product/${data.id}`}>
    <a >
        <h4 className="showcase-title">
        {data.title}
        </h4>
      </a>
      </Link>
      
      <a href="#" className="showcase-category">
      {data.category}
      </a>
      <div className="price-box">
        <p className="price">${data.priceOffer}</p>
        <del>${data.priceOriginal}</del>
      </div>
    </div>
  </div>
  )
}

export default HomeProduct