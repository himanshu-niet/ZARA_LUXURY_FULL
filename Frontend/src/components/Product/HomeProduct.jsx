import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BASE_URL, getOfferPrice } from '../../utils/config'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../utils/cartSlice';



const HomeProduct = () => {

  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    alert("Product Added To Cart")

  };

  

  useEffect(() => {

    axios.get(`${BASE_URL}/api/v1/products?keyword=&category=null&subCategory=null`)
      .then((respose) => {
        setProducts(respose.data.products)
        console.log(respose.data.products)
      })
      .catch((error) => {
        console.log(error)
      })

  }, [])

  return (
    <section className="ftco-section bg-light">
      <div className="container">
        <div className="row justify-content-center mb-3 pb-3">
          <div className="col-md-12 heading-section text-center ">
            <h2 className="mb-4">Fresh Drops</h2>
            <p>
            Fresh arrivals for the fashion-forward you, explore what's new now.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">



          {products ? products.map((item, idx) => {

            if (item.discount > 0) return (
              <div key={idx} className="col-sm-12 col-md-6 col-lg-3 ftco-animate d-flex">
                <div className="product d-flex flex-column">
                  <Link to={`/product/${item._id}`} className="img-prod">
                    <img
                      className="img-fluid"
                      src={item.images[0].url}
                      alt="Colorlib Template"
                    />
                    <span className="status">{item.discount}% Off</span>
                    <div className="overlay" />
                  </Link>
                  <div className="text py-3 pb-4 px-3">
                    <div className="d-flex">
                      <div className="cat">
                        <span>{item.category+" "+item.subCategory}</span>
                      </div>
                      <div className="rating">
                        <p className="text-right mb-0">
                          <a >
                            <span className="ion-ios-star-outline" />
                          </a>
                          <a >
                            <span className="ion-ios-star-outline" />
                          </a>
                          <a>
                            <span className="ion-ios-star-outline" />
                          </a>
                          <a >
                            <span className="ion-ios-star-outline" />
                          </a>
                          <a>
                            <span className="ion-ios-star-outline" />
                          </a>
                        </p>
                      </div>
                    </div>
                    <h3>
                      <Link to={`/product/${item._id}`} >{item.title}</Link>
                    </h3>
                    <div className="pricing">
                      <p className="price">
                        <span className="mr-2 price-dc">₹{item.price}</span>
                        <span className="price-sale">₹{getOfferPrice(item.price, item.discount)}</span>
                      </p>
                    </div>
                    <p className="bottom-area d-flex px-3">

                      <a  style={{cursor:'pointer'}} onClick={()=>handleAddToCart(item)} className="add-to-cart text-center py-2 mr-1">
                        <span>
                          Add to cart <i className="ion-ios-add ml-1" />
                        </span>
                      </a>

                      <Link to={`/product/${item._id}`} className="buy-now text-center py-2">
                        Buy now
                        <span>
                          <i className="ion-ios-cart ml-1" />
                        </span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>);

            return (<div key={idx} className="col-sm-12 col-md-6 col-lg-3  d-flex">
              <div className="product d-flex flex-column">
                <Link to={`/product/${item._id}`} className="img-prod">
                  <img
                    className="img-fluid"
                    src={item.images.url}
                    alt="Colorlib Template"

                  />
                  <div className="overlay" />
                </Link>
                <div className="text py-3 pb-4 px-3">
                  <div className="d-flex">
                    <div className="cat">
                    <span>{item.category+" "+item.subCategory}</span>
                    </div>
                    <div className="rating">
                      <p className="text-right mb-0">
                        <a >
                          <span className="ion-ios-star-outline" />
                        </a>
                        <a >
                          <span className="ion-ios-star-outline" />
                        </a>
                        <a >
                          <span className="ion-ios-star-outline" />
                        </a>
                        <a >
                          <span className="ion-ios-star-outline" />
                        </a>
                        <a >
                          <span className="ion-ios-star-outline" />
                        </a>
                      </p>
                    </div>
                  </div>
                  <h3>
                    <Link to={`/product/${item._id}`}>{item.title}</Link>
                  </h3>
                  <div className="pricing">
                    <p className="price">
                      <span>₹{item.price}</span>
                    </p>
                  </div>
                  <p className="bottom-area d-flex px-3">

                    <Link to={`/product/${item._id}`} className="add-to-cart text-center py-2 mr-1">
                      <span>
                        Add to cart <i className="ion-ios-add ml-1" />
                      </span>
                    </Link>

                    <Link to={`/product/${item._id}`} className="buy-now text-center py-2">
                      Buy now
                      <span>
                        <i className="ion-ios-cart ml-1" />
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>);

          }) : ""}


        </div>
      </div>
    </section>
  )
}

export default HomeProduct