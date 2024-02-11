import React from 'react'
import { Link } from 'react-router-dom'

const BannerIndex = ({data}) => {
  return (
    <div className="banner">
    <div className="container">
      <div className="slider-container has-scrollbar">
       
      {data ? data.map((item,id)=>{
return(
  <div className="slider-item" key={id}>
          <img
            src={item.bannerImg}
            alt={item.bannerTitle}
            className="banner-img"
          />
          <div className="banner-content">
            <p className="banner-subtitle">{item.bannerSubtitle}</p>
            <h2 className="banner-title">{item.bannerTitle}</h2>
            <p className="banner-text">
              starting at $ <b>{item.bannerText}</b>
            </p>
            <Link to={"/products"}>
            <a className="banner-btn">
              Shop now
            </a>
            </Link>
          </div>
        </div>
)
      }):""}
      
      

        

      </div>
    </div>
  </div>
  )
}

export default BannerIndex