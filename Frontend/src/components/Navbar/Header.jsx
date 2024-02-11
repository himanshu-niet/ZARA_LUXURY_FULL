import React from 'react'

import { categories } from '../../../data'
import { Link } from 'react-router-dom'

const Header = () => {




  return (
    <>




      <header>
        <div className="header-top">
          <div className="container">
            <ul className="header-social-container">
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-facebook" />
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-twitter" />
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-instagram" />
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-linkedin" />
                </a>
              </li>
            </ul>
            <div className="header-alert-news">
              <p>
                <b>Free Shipping</b>
                This Week Order Over - $55
              </p>
            </div>
            <div className="header-top-actions">
              <select name="currency">
                <option value="usd">INR</option>

              </select>
              <select name="language">
                <option value="en-US">English</option>

              </select>
            </div>
          </div>
        </div>

        <div className="header-main">
          <div className="container">
            <Link to={"/"}>
              <a className="header-logo">
                <img
                  src="/assets/images/logo/logo.svg"
                  alt="Zara Luxury's logo"
                  width={120}
                  height={36}
                />
              </a>
            </Link>
            <div className="header-search-container">
              <input
                type="search"
                name="search"
                className="search-field"
                placeholder="Enter your product name..."
              />
              <button className="search-btn">
                <ion-icon name="search-outline" />
              </button>
            </div>
            <div className="header-user-actions">
              <button className="action-btn">
                <ion-icon name="person-outline" />
              </button>
              <button className="action-btn">
                <ion-icon name="heart-outline" />
                <span className="count">0</span>
              </button>
              <button className="action-btn">
                <ion-icon name="bag-handle-outline" />
                <span className="count">0</span>
              </button>
            </div>
          </div>
        </div>

        <nav className="desktop-navigation-menu">
          <div className="container">
            <ul className="desktop-menu-category-list">
              <Link to={"/"}>
                <li className="menu-category">
                  <a className="menu-title">
                    Home
                  </a>
                </li>
              </Link>

              <Link to={"/about"}>
                <li className="menu-category">
                  <a className="menu-title">
                    About
                  </a>
                </li>
              </Link>



              <li className="menu-category">
                <a className="menu-title">
                  Category
                </a>
                <ul className="dropdown-list">

                  {categories?.map((item, idx) => {
                    return (

                      <li key={idx} className="dropdown-item" >
                        <a >{item.title}</a>
                      </li>
                    )
                  })}

                </ul>
              </li>

              <Link to={"/products"}>
                <li className="menu-category">
                  <a className="menu-title">
                    All Products
                  </a>
                </li>
              </Link>

              <Link to={"/contact"}>
                <li className="menu-category">
                  <a className="menu-title">
                    Contact
                  </a>
                </li>
              </Link>
            </ul>
          </div>
        </nav>

        <div className="mobile-bottom-navigation">
          <button className="action-btn" data-mobile-menu-open-btn>
            <ion-icon name="menu-outline" />
          </button>
          <button className="action-btn">
            <ion-icon name="bag-handle-outline" />
            <span className="count">0</span>
          </button>
          <button className="action-btn">
            <ion-icon name="home-outline" />
          </button>
          <button className="action-btn">
            <ion-icon name="heart-outline" />
            <span className="count">0</span>
          </button>
          <button className="action-btn" data-mobile-menu-open-btn>
            <ion-icon name="grid-outline" />
          </button>
        </div>

        <nav className="mobile-navigation-menu  has-scrollbar" data-mobile-menu>
          <div className="menu-top">
            <h2 className="menu-title">Menu</h2>
            <button className="menu-close-btn" data-mobile-menu-close-btn>
              <ion-icon name="close-outline" />
            </button>
          </div>
          <ul className="mobile-menu-category-list">
          <Link to={"/"}> 
          <li className="menu-category">
              <a href="#" className="menu-title">
                Home
              </a>
            </li>
            </Link>

            <Link to={"/about"}>
            <li className="menu-category">
              <a href="#" className="menu-title">
                About
              </a>
            </li>
            </Link>

            <li className="menu-category">
              <button className="accordion-menu" data-accordion-btn>
                <p className="menu-title">Category</p>
                <div>
                  <ion-icon name="add-outline" className="add-icon" />
                  <ion-icon name="remove-outline" className="remove-icon" />
                </div>
              </button>
              <ul className="submenu-category-list" data-accordion>

                {categories?.map((item, idx) => {
                  return (
                    <li className="submenu-category" key={idx}>
                      <a href="#" className="submenu-title">
                        {item.title}
                      </a>
                    </li>
                  )
                })}

              </ul>
            </li>
            <Link to={"/products"}>
            <li className="menu-category">
              <a href="#" className="menu-title">
                All Products
              </a>
            </li>
            </Link>

            <Link to={"/contact"}>
            <li className="menu-category">
              <a href="#" className="menu-title">
                Contact
              </a>
            </li>
            </Link>
          </ul>
          S
          <div className="menu-bottom">
            <ul className="menu-category-list">
              <li className="menu-category">
                <button className="accordion-menu" data-accordion-btn>
                  <p className="menu-title">Language</p>
                  <ion-icon name="caret-back-outline" className="caret-back" />
                </button>
                <ul className="submenu-category-list" data-accordion>
                  <li className="submenu-category">
                    <a  className="submenu-title">
                      English
                    </a>
                  </li>

                </ul>
              </li>
              <li className="menu-category">
                <button className="accordion-menu" data-accordion-btn>
                  <p className="menu-title">Currency</p>
                  <ion-icon name="caret-back-outline" className="caret-back" />
                </button>
                <ul className="submenu-category-list" data-accordion>
                  <li className="submenu-category">
                    <a className="submenu-title">
                      INR
                    </a>
                  </li>

                </ul>
              </li>
            </ul>
            <ul className="menu-social-container">
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-facebook" />
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-twitter" />
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-instagram" />
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </nav>

      </header>
    </>


  )
}

export default Header