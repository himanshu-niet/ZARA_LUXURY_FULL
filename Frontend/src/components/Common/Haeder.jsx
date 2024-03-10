import React from 'react'
import { Link } from 'react-router-dom/dist'
import { deleteCookie, getCookie } from '../../utils/cookies';
import Loding from './Loding';
import { useSelector } from 'react-redux';

const Haeder = () => {
  const cart = useSelector((state) => state.cart.items);


  const cookie=getCookie("userToken");

  const logout=()=>{
    deleteCookie("userToken")
    location.href="/";
    return <Loding/>
  }
  return (
    <>
      <div className="py-1 bg-black">
        <div className="container">
          <div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
            <div className="col-lg-12 d-block">
              <div className="row d-flex">
                <div className="col-md pr-4 d-flex topper align-items-center">
                  <div className="icon mr-2 d-flex justify-content-center align-items-center">
                    <span className="icon-phone2" />
                  </div>
                  <span className="text">+91 999-7718-844</span>
                </div>
                <div className="col-md pr-4 d-flex topper align-items-center">
                  <div className="icon mr-2 d-flex justify-content-center align-items-center">
                    <span className="icon-paper-plane" />
                  </div>
                  <span className="text">zaraluxuryhelp@gmail.com</span>
                </div>
                <div className="col-md-5 pr-4 d-flex topper align-items-center text-lg-right">
                  <span className="text">
                  Rapid Shipping on Bulk Orders
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav
        className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
        id="ftco-navbar"
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            Zara Luxury Locks
          </Link >
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="oi oi-menu" /> Menu
          </button>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  Home
                </Link >
              </li>

              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link >
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-link">
                  Shop
                </Link >
              </li>
             
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Category</a>
                <div className="dropdown-menu" aria-labelledby="dropdown04">
                <a className="dropdown-item" href={"/products?category=Pad Locks"}>Pad Locks</a>
                <a className="dropdown-item" href={"/products?category=Cylinder Locks"}>Cylinder Locks</a>
                <a className="dropdown-item" href={"/products?category=Smart Locks"}>Smart Locks</a>
                <a className="dropdown-item" href={"/products?category=Rim Locks"}>Rim Locks</a>
                <a className="dropdown-item" href={"/products?category=Mortice Handles"}>Mortice Handles</a>
                <a className="dropdown-item" href={"/products?category=Disc Locks"}>Disc Locks</a>
                <a className="dropdown-item" href={"/products?category=Furniture Locks"}>Furniture Locks</a>
                <a className="dropdown-item" href={"/products?category=Shutter Locks"}>Shutter Locks</a>
                <a className="dropdown-item" href={"/products?category=Hinges & Knobs"}>Hinges & Knobs</a>
                <a className="dropdown-item" href={"/products?category=Door Accessories"}>Door Accessories</a>

              
                </div>
              </li>
              
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link >
              </li>
              
              <li className="nav-item">
                <Link to="/order" className="nav-link">
                  Orders
                </Link >
              </li>
              <li className="nav-item ">
              {cookie?<a style={{cursor:'pointer'}} className="nav-link" onClick={logout}>Logout</a>:<Link to="/login" className="nav-link">
              Login
            </Link >}
              </li>

              

              <li className="nav-item cta cta-colored">
                <Link to="/cart" className="nav-link">
                  <span className="icon-shopping_cart" />
                   [{cart.length}]
                </Link >
              </li>

              

            

            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Haeder