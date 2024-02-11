import React from 'react'
import { Link } from 'react-router-dom';
import { getOfferPrice } from '../../utils/config';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../utils/cartSlice';



const ProductItem = ({ item }) => {

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(item));
    alert("Product Added To Cart")
    
  };


  if (item.discount > 0) return (
    <div className="col-sm-12 col-md-12 col-lg-4 ftco-animate d-flex">
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
                <a href="#"><span className="ion-ios-star-outline"></span></a>
                <a href="#"><span className="ion-ios-star-outline"></span></a>
                <a href="#"><span className="ion-ios-star-outline"></span></a>
                <a href="#"><span className="ion-ios-star-outline"></span></a>
                <a href="#"><span className="ion-ios-star-outline"></span></a>
              </p>
            </div>
          </div>
          <h3><Link to={`/product/${item._id}`} >{item.title}</Link></h3>
          <div className="pricing">
            <p className="price">
             <span className="mr-2 price-dc">₹{item.price}</span>
            <span className="price-sale">₹{getOfferPrice(item.price, item.discount)}</span>
            </p>
          </div>
          <p className="bottom-area d-flex px-3">
          
          <a style={{cursor:'pointer'}} onClick={handleAddToCart} className="add-to-cart text-center py-2 mr-1">
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
    </div>
  );

  return (
    <div className="col-sm-12 col-md-12 col-lg-4  d-flex">
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

            <a style={{cursor:'pointer'}} onClick={handleAddToCart} className="add-to-cart text-center py-2 mr-1">
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
    </div>
  )
}

export default ProductItem