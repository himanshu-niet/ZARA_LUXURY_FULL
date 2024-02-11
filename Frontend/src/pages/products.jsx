import React from 'react'
import Header from '../components/Navbar/Header'
import Footer from '../components/Navbar/Footer'
import ProductMain from '../components/Product/ProductMain'

import {productData} from '../../data'
import BestSeller from '../components/Product/BestSeller'
import Sidebar from '../components/Category/Sidebar'
import BannerIndex from '../components/Banner/Index'


const Products = () => {




  return (
    <>

    <Header/>

 
    <BannerIndex data={productData.bannerData}/>


    <div className="product-container">
    <div className="container">
      <div className="sidebar  has-scrollbar" data-mobile-menu>
     <Sidebar/>
      </div>
      <div className="product-box">
      <ProductMain data={productData}/>
      </div>
    </div>
  </div>



    <Footer/>

    </>
  )
}

export default Products