import React from 'react'
import BestSeller from './BestSeller'

import  ProductMinimal  from './ProductMinimal'
import ProductMain from './ProductMain'


const ProductIndex = ({data}) => {
  return (
    <div className="product-container">
      <div className="container">

        <div className="sidebar  has-scrollbar" data-mobile-menu>

       

          <BestSeller data={data.bestSeller} title={"Best Seller"}/>

        </div>
        
        <div className="product-box">

          <ProductMinimal data={data} />

        

          <ProductMain data={data}/>

        </div>
      </div>
    </div>
  )
}

export default ProductIndex