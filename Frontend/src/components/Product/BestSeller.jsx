import React from 'react'
import { Link } from 'react-router-dom'

const BestSeller = ({ data,title }) => {
  return (
    <div className="product-showcase">
      <h3 className="showcase-heading">{title}</h3>
      <div className="showcase-wrapper">
        <div className="showcase-container">

          {
            data ? data.map((item, idx) => {
              return (
                <div className="showcase" key={idx}>
                <Link to={`/product/${item.id}`}>
                 <a className="showcase-img-box">
                    <img
                      src={item.img}
                      alt={item.title}
                      width={75}
                      height={75}
                      className="showcase-img"
                    />
                  </a>
                  </Link>
                  <div className="showcase-content">
                  <Link to={`/product/${item.id}`}> 
                  <a >
                      <h4 className="showcase-title">{item.title}</h4>
                    </a>
                    </Link>
                    <div className="showcase-rating">

                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                    </div>

                    <div className="price-box">
                      <del>${item.priceOriginal}</del>
                      <p className="price">${item.priceOffer}</p>
                    </div>
                  </div>
                </div>
              )
            }) : ""
          }




        </div>
      </div>
    </div>
  )
}

export default BestSeller