import React, { useState } from 'react'
import Haeder from '../components/Common/Haeder'
import Footer from '../components/Common/Footer'
import Bread from '../components/Common/Bread'
import { Link } from 'react-router-dom';


import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart ,calculateTotalAmount} from '../utils/cartSlice';




const Cart = () => {

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);



  React.useEffect(() => {
    dispatch(calculateTotalAmount());

  }, [dispatch, cart]);

  const totalAmount = useSelector((state) => state.cart.totalAmount); // Updated to get totalAmount

 
  

  return (
    <>
    <Haeder/>
    <Bread page={"Cart"}/>

  <section className="ftco-section ftco-cart">
    <div className="container">
      <div className="row">
        <div className="col-md-12 ">
          <div className="cart-list">
            <table className="table">

            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <>
              <thead className="thead-primary">
              <tr className="text-center">
                <th>&nbsp;</th>
                <th>&nbsp;</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
            
           
             
          
                {cart.map((item) => (

                 
                     
            <tr className="text-center">
           
            <td className="product-remove">
              <a  onClick={() => dispatch(removeFromCart(item._id))}>
                <span className="ion-ios-close" />
              </a>
            </td>
            <td className="image-prod">
              <div
                className="img"
                style={{ backgroundImage: `url(${item.images[0].url})` }}
              />
            </td>
            <td className="product-name">
              <h3>{item.title}</h3>
              <p>
               {item.detail}
              </p>
            </td>
            <td className="price">₹{item.price}</td>

            

            <td className="quantity">
            <div className="input-group d-flex  mb-3">
            <span className="input-group-btn mr-2">
              <button
                type="button"
                className="quantity-left-minus btn"
                data-type="minus"
                data-field=""
                onClick={() => dispatch(decreaseQuantity(item._id))}
                
              >
                <i className="ion-ios-remove" />
              </button>
            </span>
            <button
              style={{padding:'3px 10px',border:'1px solid black',}}
              className="quantity ">
              {item.quantity}
              </button>
            <span className="input-group-btn ml-2">
              <button
                type="button"
                className="quantity-right-plus btn"
                data-type="plus"
                data-field=""
                onClick={() => dispatch(increaseQuantity(item._id))}
              >
                <i className="ion-ios-add" />
              </button>
            </span>
          </div>
            </td>
            <td className="total">₹{item.price*item.quantity}</td>
          </tr>

                 
                ))}
                </tbody>
                </>
            )}

            
            </table>
          </div>
        </div>
      </div>
      <div className="row justify-content-start">
        <div className="col col-lg-5 col-md-6 mt-5 cart-wrap ">
          <div className="cart-total mb-3">
            <h3>Cart Totals</h3>
            <p className="d-flex">
              <span>Subtotal</span>
              <span>₹{totalAmount}</span>
            </p>
            <p className="d-flex">
              <span>Delivery</span>
              <span>₹0.00</span>
            </p>
            {/*<p className="d-flex">
              <span>Discount</span>
              <span>₹0.00</span>
                </p>*/}
            <hr />
            
            <p className="d-flex total-price">
              <span>Total</span>
              <span>₹{totalAmount}</span>
            </p>
          </div>
          <p className="text-center">
            <Link to={"/checkout"} className="btn btn-primary py-3 px-4">
              Proceed to Checkout
            </Link>
          </p>
        </div>
      </div>
    </div>
  </section>
  <Footer/>
</>

  )
}

export default Cart