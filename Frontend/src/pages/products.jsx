import React from 'react'
import Haeder from '../components/Common/Haeder'
import Footer from '../components/Common/Footer'
import ShopProduct from '../components/Product/ShopProduct'
import Bread from '../components/Common/Bread'
import { useLocation } from 'react-router-dom';


const Products = () => {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get('category');
  const subCategory = searchParams.get('subCategory');
  

  return (
    <>
    <Haeder/>

    <Bread page={"Products"} />
 
  <ShopProduct category={category} subCategory={subCategory}/>



  <Footer/>
</>

  )
}

export default Products