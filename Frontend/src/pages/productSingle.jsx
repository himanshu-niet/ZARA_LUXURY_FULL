import React, { useEffect, useState } from 'react'
import Footer from '../components/Common/Footer'
import Haeder from '../components/Common/Haeder'
import Bread from '../components/Common/Bread'
import { useParams,Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../utils/config'
import Loding from '../components/Common/Loding'
import ProductImage from '../components/Product/ProductImage'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart ,calculateTotalAmount} from '../utils/cartSlice';



const ProductSingle = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);


 

  const {productId}=useParams();

  const [product, setProduct] = useState();

  const [quantity,setQuantity]=useState(1);


  useEffect(() => {

    axios.get(`${BASE_URL}/api/v1/product/${productId}`)
      .then((respose) => {
        setProduct(respose.data.product)
        console.log(respose.data.product)
      })
      .catch((error) => {
        console.log(error)
      })

  }, [])


  const plusQuantity=()=>{
    if(quantity<product.stock){
      setQuantity(quantity+1)
      dispatch(increaseQuantity(product._id))
      

    }
  }
  
  const minusQuantity=()=>{
    if(quantity>1){
    setQuantity(quantity-1)
    dispatch(decreaseQuantity(product._id))
    }
  }

  const handleAddToCart = () => {
    dispatch(addToCart({...product,quantity}));
    alert("Product Added To Cart")
  };

  const handleBuyNow = () => {
    dispatch(addToCart({...product}));
    navigate("/checkout");
    
  };

  if(!product) return <Loding/>;

  return (
    <>

    <Haeder/>
  
    
    <Bread page={"Product Detail"}/>
  
  <section className="ftco-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 mb-5 " >
          <ProductImage images={product.images}/>
        </div>
        <div className="col-lg-6 product-details pl-md-5 ">
          <h3>{product.title}</h3>
          <div className="rating d-flex">
            <p className="text-left mr-4">
              <a href="#" className="mr-2">
                5.0
              </a>
              <a href="#">
                <span className="ion-ios-star-outline" />
              </a>
              <a href="#">
                <span className="ion-ios-star-outline" />
              </a>
              <a href="#">
                <span className="ion-ios-star-outline" />
              </a>
              <a href="#">
                <span className="ion-ios-star-outline" />
              </a>
              <a href="#">
                <span className="ion-ios-star-outline" />
              </a>
            </p>
            <p className="text-left mr-4">
              <a href="#" className="mr-2" style={{ color: "#000" }}>
                100 <span style={{ color: "#bbb" }}>Rating</span>
              </a>
            </p>
            <p className="text-left">
              <a href="#" className="mr-2" style={{ color: "#000" }}>
                500 <span style={{ color: "#bbb" }}>Sold</span>
              </a>
            </p>
          </div>
          <p className="price">
            <span>₹{product.price}</span>
          </p>
          <p>
          {product.detail}
          </p>
        
          <div className="row mt-4">
            <div className="col-md-6">
              <div className="form-group d-flex">
                <div className="select-wrap">
                  <div className="icon">
                    <span className="ion-ios-arrow-down" />
                  </div>
                  <select name="" id="" className="form-control">
                    <option value="">Small</option>
                    <option value="">Medium</option>
                    <option value="">Large</option>
                    <option value="">Extra Large</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="w-100" />
            <div className="input-group col-md-6 d-flex mb-3">
              <span className="input-group-btn mr-2">
                <button
                  type="button"
                  className="quantity-left-minus btn"
                  data-type="minus"
                  data-field=""
                  onClick={minusQuantity}
                >
                  <i className="ion-ios-remove" />
                </button>
              </span>
              <input
                type="text"
                id="quantity"
                name="quantity"
                className="quantity form-control input-number"
                value={(cart.find((item) => item._id === product._id)?.quantity)?(cart.find((item) => item._id === product._id).quantity):quantity}
                disabled
                
              />
              <span className="input-group-btn ml-2">
                <button
                  type="button"
                  className="quantity-right-plus btn"
                  data-type="plus"
                  data-field=""
                  onClick={plusQuantity}
                >
                  <i className="ion-ios-add" />
                </button>
              </span>
            </div>
            <div className="w-100" />
            <div className="col-md-12">
              <p style={{ color: "#000" }}>
              {product.stock+" "}
              piece available</p>
            </div>
          </div>
          <p>
            <a style={{cursor:'pointer'}} onClick={handleAddToCart} className="btn btn-black py-3 px-5 mr-2">
              Add to Cart
            </a>
            <a onClick={handleBuyNow} className="btn btn-primary py-3 px-5">
              Buy now
            </a>
          </p>
        </div>
      </div>
      <div className="row mt-5">
      <div className="col-md-12 nav-link-wrap">
        <div
          className="nav nav-pills d-flex text-center"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <a
            className="nav-link ftco-animate active mr-lg-1"
            id="v-pills-1-tab"
            data-toggle="pill"
            href="#v-pills-1"
            role="tab"
            aria-controls="v-pills-1"
            aria-selected="true"
          >
            Description
          </a>
          <a
            className="nav-link ftco-animate mr-lg-1"
            id="v-pills-2-tab"
            data-toggle="pill"
            href="#v-pills-2"
            role="tab"
            aria-controls="v-pills-2"
            aria-selected="false"
          >
            Manufacturer
          </a>
          <a
            className="nav-link ftco-animate"
            id="v-pills-3-tab"
            data-toggle="pill"
            href="#v-pills-3"
            role="tab"
            aria-controls="v-pills-3"
            aria-selected="false"
          >
            Reviews
          </a>
        </div>
      </div>
      <div className="col-md-12 tab-wrap">
        <div className="tab-content bg-light" id="v-pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="v-pills-1"
            role="tabpanel"
            aria-labelledby="day-1-tab"
          >
            <div className="p-4">
              <h3 className="mb-4">{product.title}</h3>
              <p>
               {product.desc}
              </p>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-2"
            role="tabpanel"
            aria-labelledby="v-pills-day-2-tab"
          >
            <div className="p-4">
              
              <p>
              {product.mfg}
              </p>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-3"
            role="tabpanel"
            aria-labelledby="v-pills-day-3-tab"
          >
            <div className="row p-4">
              <div className="col-md-7">
                <h3 className="mb-4">0 Reviews</h3>
               
              </div>
              <div className="col-md-4">
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </div>
  </section>
  <Footer/>
</>

  )
}

export default ProductSingle