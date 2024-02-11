import React from 'react'
import BestSeller from './BestSeller'

import {product,productData} from '../../../data'

const ProductFeatured = () => {

  return (
    <div className="product-container">
    <div className="container">

      <div className="sidebar  has-scrollbar " data-mobile-menu>

     
      <BestSeller data={productData.bestSeller} title={"Other Products"}/>

       
      </div>
      
      <div className="">

      <div className="product-featured container" style={{marginBottom:'20px',marginTop:'20px'}}>
     
      <div className="showcase-wrapper ">
        <div className="showcase-container">
          <div className="showcase">
            <div className="showcase-banner">
              <img
                src={product.img}
                alt={product.title}
                className="showcase-img"
              />
            </div>
            <div className="showcase-content">
              <div className="showcase-rating">
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star-outline" />
                <ion-icon name="star-outline" />
              </div>
              <a href="#">
                <h1 className="showcase-title" style={{fontSize:'20px'}}>
                {product.title}
                </h1>
              </a>
              <p className="showcase-desc">
              {product.desc}
              </p>
              <div className="price-box">
                <p className="price">${product.priceOffer}</p>
                <del>${product.priceOriginal}</del>
              </div>
             
              <div className="showcase-status">
                <div className="wrapper">
                  
                  <p>
                    available: <b>{product.stock}</b>
                  </p>
                </div>
               
              </div>
              <div className="countdown-box">
              {product.stock<=5? <p className="countdown-desc">Hurry Up! Item will out of stock</p>:""}
              <button className="add-cart-btn">add to cart</button>
              <button className="add-cart-btn">buy Now</button>
           
                {/*  <div className="countdown">
                  <div className="countdown-content">
                    <p className="display-number">360</p>
                    <p className="display-text">Days</p>
                  </div>
                  <div className="countdown-content">
                    <p className="display-number">24</p>
                    <p className="display-text">Hours</p>
                  </div>
                  <div className="countdown-content">
                    <p className="display-number">59</p>
                    <p className="display-text">Min</p>
                  </div>
                  <div className="countdown-content">
                    <p className="display-number">00</p>
                    <p className="display-text">Sec</p>
                  </div>
                </div>
              */} 
              </div>
            </div>
          </div>
        </div>
     
      </div>
    </div>
      </div>
    </div>
  </div>
  
        
   
  )
}

export default ProductFeatured