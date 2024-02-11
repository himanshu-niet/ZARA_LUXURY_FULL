import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem'
import { BASE_URL } from '../../utils/config';
import axios from 'axios';
import Loding from '../Common/Loding';


const ShopProduct = ({category,subCategory}) => {

 


  const [products, setProducts] = useState([]);
  const [keyword,setKeyword]=useState("");
  const [searchbtn,setSearchbtn]=useState(0);

  useEffect(() => {
   
   const res= axios.get(`${BASE_URL}/api/v1/products?keyword=${keyword}&category=${category}&subCategory=${subCategory}`)
      .then((respose) => {
        setProducts(respose.data.products)
        console.log(respose)
      })
      .catch((error) => {
        console.log(error)
      })

      

  }, [searchbtn])

  if(!products) return <Loding/>

  return (

   

    <section className="ftco-section bg-light">
    <div className="container">
    
      <div className="row">

      <div className='mb-4 col-12' style={{display:'flex',justifyContent:'flex-end'}}>
      
      <form onSubmit={(e)=>{e.preventDefault(); setSearchbtn(searchbtn+1)}} className="search-form">
      <div className="form-group">
        <button type="submit" className="icon ion-ios-search serButton"></button>
        <input type="text" className="form-control"  onChange={(e)=>setKeyword(e.target.value)} placeholder="Type a keyword and hit enter"/>
      </div>
    </form>

   
      </div>

        <div className="col-md-8 col-lg-10 order-md-last">
          <div className="row">

          {products?.length==0?<h3 className='text-center col-12'>Product Not Found</h3>:""}

          {products?products.map((item,idx)=>{
            return <ProductItem key={idx} item={item}/>;
          }):""}

          </div>
          <div className="row mt-5">
            <div className="col text-center">
              <div className="block-27">
                <ul>
                  <li>
                    <a href="#">&lt;</a>
                  </li>
                  <li className="active">
                    <span>1</span>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">5</a>
                  </li>
                  <li>
                    <a href="#">&gt;</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-lg-2">
          <div className="sidebar">
            <div className="sidebar-box-2">
              <h2 className="heading">Categories</h2>
              <div className="fancy-collapse-panel">
                <div
                  className="panel-group"
                  id="accordion"
                  role="tablist"
                  aria-multiselectable="true"
                >
                  <div className="panel panel-default">
                  
                  <div className="panel-heading" role="tab" id="headingFive">
                  <h4 className="panel-title">
                        <a
                        className="collapsed"
                        
                        data-parent="#accordion"
                        aria-expanded="false"
                        
                          href="/products"
                        >
                         All Products
                        </a>
                      </h4>
                    </div>
                  
                  <div className="panel-heading" role="tab" id="headingOne">
                      <h4 className="panel-title">
                        <a
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          MEN'S 
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseOne"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingOne"
                    >
                      <div className="panel-body">
                        <ul>
                          <li>
                            <a href={"/products?category=mens&subCategory=shirts"}>Shirts</a>
                          </li>
                          <li>
                          <a href={"/products?category=mens&subCategory=tshirts"}>T-Shirts</a>
                          </li>
                         
                          <li>
                          <a href={"/products?category=mens&subCategory=jeans"}>Jeans</a>
                          </li>
                          
                          
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingTwo">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          WOMEN'S
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseTwo"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingTwo"
                    >
                      <div className="panel-body">
                        <ul>
                          <li>
                          <a href={"/products?category=womens&subCategory=tops"}>Tops</a>
                          </li>
                          <li>
                          <a href={"/products?category=womens&subCategory=jeans"}>Jeans</a>
                          </li>
                         
                          
                        </ul>
                      </div>
                    </div>
                  
                    </div>




                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingThree">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                        ACCESSORIES
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseThree"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingThree"
                    >
                      <div className="panel-body">
                        <ul>
                          <li>
                          <a href={"/products?category=accessories&subCategory=mens accessories"}>Mens Accessories</a>
                          </li>
                          
                          <li>
                          <a href={"/products?category=accessories&subCategory=womens jewellery"}>Womens Jewellery</a>
                          </li>
                          
                         
                        </ul>
                      </div>
                    </div>
                  </div>

                
                  
                </div>
              </div>
            </div>
          {/** 
            <div className="sidebar-box-2">
              <h2 className="heading">Price Range</h2>
              <form method="post" className="colorlib-form-2">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="guests">Price from:</label>
                      <div className="form-field">
                        <i className="icon icon-arrow-down3" />
                        <select
                          name="people"
                          id="people"
                          className="form-control"
                        >
                          <option value="#">1</option>
                          <option value="#">200</option>
                          <option value="#">300</option>
                          <option value="#">400</option>
                          <option value="#">1000</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="guests">Price to:</label>
                      <div className="form-field">
                        <i className="icon icon-arrow-down3" />
                        <select
                          name="people"
                          id="people"
                          className="form-control"
                        >
                          <option value="#">2000</option>
                          <option value="#">4000</option>
                          <option value="#">6000</option>
                          <option value="#">8000</option>
                          <option value="#">10000</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          */}  
            </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ShopProduct