import React from 'react'
import HomeProduct from './HomeProduct'

const ProductMinimal = ({ data }) => {
  return (
    <div className="product-minimal">

      <div className="product-showcase">
        <h2 className="title">New Arrivals</h2>
        <div className="showcase-wrapper has-scrollbar">

          <div className="showcase-container">

            {
              data?.newArrivals?.map((item, idx) => {
                return (
                 <HomeProduct data={item} key={idx}/>
                )
              })
            }

          </div>


        </div>
      </div>


      <div className="product-showcase">
        <h2 className="title">Trending</h2>
        <div className="showcase-wrapper  has-scrollbar">
          <div className="showcase-container">

          {
            data?.trending?.map((item, idx) => {
              return (
               <HomeProduct data={item} key={idx}/>
              )
            })
          }

       

          </div>
         
        </div>
      </div>
      <div className="product-showcase">
        <h2 className="title">Top Rated</h2>
        <div className="showcase-wrapper  has-scrollbar">
          <div className="showcase-container">
          {
            data?.topRated?.map((item, idx) => {
              return (
               <HomeProduct data={item} key={idx}/>
              )
            })
          }
          </div>
        
        </div>
      </div>

    </div>
  )
}

export default ProductMinimal