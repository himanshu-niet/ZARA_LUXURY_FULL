import React from 'react'
import ProductItem from './ProductItem'

const ProductMain = ({data}) => {
  return (
    <div className="product-main">
          <h2 className="title">New Products</h2>
          <div className="product-grid">

           {data?.newProduct?.map((item,idx)=>{
            return(
              <ProductItem data={item} key={idx}/>
            )
           })}
          </div>


  <center><div className="w3-bar" style={{marginTop:'20px',}}>
  <a href="#" className="w3-button">1</a>
  <a href="#" className="w3-button">2</a>
  <a href="#" className="w3-button">3</a>
  <a href="#" className="w3-button">4</a>
  <a href="#" className="w3-button">5</a>
</div></center>
        </div>
  )
}

export default ProductMain