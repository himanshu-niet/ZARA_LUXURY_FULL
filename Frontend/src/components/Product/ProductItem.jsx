import React from 'react'
import { Link } from 'react-router-dom'

const ProductItem = ({ data }) => {
  return (
    <div className="showcase">

      <div className="showcase-banner">
        <Link to={`/product/${data.id}`}>
          <img
            src={data.img}
            alt={data.title}
            width={300}
            className="product-img default"
          />
          <img
            src={data.img}
            alt={data.title}
            width={300}
            className="product-img hover"
          />
        </Link>
        <p className="showcase-badge">{data.discount}%</p>
        <div className="showcase-actions">
          <button className="btn-action">
            <ion-icon name="heart-outline" />
          </button>

          <button className="btn-action">
            <ion-icon name="bag-add-outline" />
          </button>
        </div>
      </div>
      <div className="showcase-content">
        <a href="#" className="showcase-category">
          {data.category}
        </a>
        <Link to={`/product/${data.id}`}>
          <a >
            <h3 className="showcase-title">
              {data.title}
            </h3>
          </a>
        </Link>

        <div className="showcase-rating">
          <ion-icon name="star" />
          <ion-icon name="star" />
          <ion-icon name="star" />
          <ion-icon name="star-outline" />
          <ion-icon name="star-outline" />
        </div>
        <div className="price-box">
          <p className="price">$ {data.priceOriginal}</p>
          <del>$ {data.priceOffer}</del>
        </div>
      </div>
    </div>
  )
}

export default ProductItem