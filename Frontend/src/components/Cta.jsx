import React from 'react'

const Cta = ({data}) => {
  return (
    <div className="cta-container">
          <img
            src={data.ctaImg}
            alt="no img"
            className="cta-banner"
          />
          <a href="#" className="cta-content">
            <p className="discount">{data.ctaDiscount}</p>
            <h2 className="cta-title">{data.ctaTitle}</h2>
            <p className="cta-text">{data.ctaText}</p>
            <button className="cta-btn">Shop now</button>
          </a>
        </div>
  )
}

export default Cta