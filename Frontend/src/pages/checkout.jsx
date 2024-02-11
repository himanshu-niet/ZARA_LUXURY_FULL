import React, { useEffect } from 'react'
import Footer from '../components/Common/Footer'
import Haeder from '../components/Common/Haeder'
import Bread from '../components/Common/Bread'

import { useFormik } from 'formik';
import Loding from '../components/Common/Loding';
import axios from 'axios';
import {BASE_URL} from '../utils/config'

import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart ,calculateTotalAmount} from '../utils/cartSlice';


import { getCookie } from '../utils/cookies';


const Checkout = () => {

  const cookie=getCookie("userToken");
 
 useEffect(()=>{
  if(!cookie){
    window.location.href="/login";
     return <Loding/>
   }
 },[])

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  React.useEffect(() => {
    dispatch(calculateTotalAmount());
  }, [dispatch, cart]);

  const totalAmount = useSelector((state) => state.cart.totalAmount); // Updated to get totalAmount


  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName:"",
      country:"",
      address:"",
      city:"",
      pincode:"",
      phone:""
    },
    onSubmit: (values) => {  
      console.log(values)
        // axios.post(`${BASE_URL}`+'/api/v1/order', values)
        //   .then(function (response) {
        //     const data=response.data;
        //     alert("Order Created Successfully")
            
        //   })
        //   .catch(function (error) {
        //     alert("Something Went Wrong...")

        //   });
    },
  });

  return (
    <>

    <Haeder/>
  
    <Bread page={"Checkout"}/>

  <section className="ftco-section">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-10 ">
          <form onSubmit={formik.handleSubmit} className="billing-form">
            <h3 className="mb-4 billing-heading">Billing Details</h3>
            <div className="row align-items-end">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="firstname">Firt Name</label>
                  <input type="text" className="form-control" placeholder="" 
                  onChange={formik.handleChange}
                  name='firstName'
                  
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="lastname">Last Name</label>
                  <input type="text" className="form-control" placeholder="" 
                  onChange={formik.handleChange}
                  name='lastName'
                  />
                </div>
              </div>
              <div className="w-100" />
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="country">State / Country</label>
                  <div className="select-wrap">
                  <input
                  type="text"
                  className="form-control"
                  placeholder="Country"
                  onChange={formik.handleChange}
                name='country'
                
                />
                  </div>
                </div>
              </div>
              <div className="w-100" />
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="streetaddress">Street Address</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="House number and street name"
                    onChange={formik.handleChange}
                  name='address'
                  
                  />
                </div>
              </div>
             
              <div className="w-100" />
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="towncity">Town / City</label>
                  <input type="text" className="form-control" placeholder="" onChange={formik.handleChange}
                  name='city'
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="postcodezip">Postcode / ZIP *</label>
                  <input type="text" className="form-control" placeholder=""  onChange={formik.handleChange}
                  name='pincode'
                  />
                </div>
              </div>
              <div className="w-100" />
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input type="text" className="form-control" placeholder="" onChange={formik.handleChange}
                  name='phone'
                   />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                <button type='submit' className="btn btn-primary py-3 px-4">
                Update Address
              </button>
                </div>
              </div>
              
              
              <div className="w-100" />
             
            </div>
          </form>
          {/* END */}
          <div className="row mt-5 pt-3 d-flex">
            <div className="col-md-6 d-flex">
              <div className="cart-detail cart-total bg-light p-3 p-md-4">
                <h3 className="billing-heading mb-4">Cart Total</h3>
                <p className="d-flex">
                  <span>Subtotal</span>
                  <span>₹{totalAmount}</span>
                </p>
                <p className="d-flex">
                  <span>Delivery</span>
                  <span>₹0.00</span>
                </p>
                
                <hr />
                <p className="d-flex total-price">
                  <span>Total</span>
                  <span>₹{totalAmount}</span>
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="cart-detail bg-light p-3 p-md-4">
                <h3 className="billing-heading mb-4">Payment Method</h3>
                <div className="form-group">
                  <div className="col-md-12">
                    <div className="radio">
                      <label>
                        <input type="radio" name="optradio" className="mr-2" />{" "}
                        UPI / Debit Card / Credit Card / Net Banking
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-md-12">
                    <div className="radio">
                      <label>
                        <input type="radio" name="optradio" className="mr-2" />{" "}
                        Cash On Delivery
                      </label>
                    </div>
                  </div>
                </div>
               
                <p>
                  <a href="#" className="btn btn-primary py-3 px-4">
                    Place an order
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* .col-md-8 */}
      </div>
    </div>
  </section>{" "}
  {/* .section */}
<Footer/>
  </>

  )
}

export default Checkout