import React from 'react'
import Header from '../components/Navbar/Header'
import Footer from '../components/Navbar/Footer'
import { useParams } from 'react-router-dom';
import ProductFeatured from '../components/Product/ProductFeatured';

const SingleProduct = () => {
    const params = useParams();


  return (
    <>
    <Header/>
    <main>
   
<ProductFeatured/>




    </main>
    <Footer/>
    </>
  )
}

export default SingleProduct