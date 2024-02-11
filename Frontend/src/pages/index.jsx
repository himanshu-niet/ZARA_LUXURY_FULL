import React from 'react'
import Haeder from '../components/Common/Haeder'
import Footer from '../components/Common/Footer'
import HomeProduct from '../components/Product/HomeProduct'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Deal from '../components/Product/Deal'
import Hero from '../components/Product/Hero'



const Index = () => {
  return (
    <>
      <Haeder />
      {/* END nav */}
      <Hero/>


      <section className="ftco-section ftco-no-pt ftco-no-pb">
        <div className="container">
          <div className="row no-gutters ftco-services">
            <div className="col-lg-4 text-center d-flex align-self-stretch ">
              <div className="media block-6 services p-4 py-md-5">
                <div className="icon d-flex justify-content-center align-items-center mb-4">
                  <div>
                  <img style={{height:'80px'}} src='/images/clothes.png'/>
                  </div>
                </div>
                <div className="media-body">
                  <h3 className="heading">Fashion for All Seasons</h3>
                  <p>
                  From summer to winter, discover year-round style in our seasonal selections. Stay ahead in the fashion game with our versatile collections.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 text-center d-flex align-self-stretch ">
              <div className="media block-6 services p-4 py-md-5">
                <div className="icon d-flex justify-content-center align-items-center mb-4">
                <div>
                <img style={{height:'80px'}} src='/images/accessory.png'/>
                </div>
                </div>
                <div className="media-body">
                  <h3 className="heading">Style Inspiration </h3>
                  <p>
                  Unlock style inspiration through our fashion blog and lookbook. Get the latest trends, outfit ideas, and fashion tips to craft your unique fashion statement.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 text-center d-flex align-self-stretch ">
              <div className="media block-6 services p-4 py-md-5">
                <div className="icon d-flex justify-content-center align-items-center mb-4">
                <div>
                <img style={{height:'80px'}} src='/images/slim-fit.png'/>
                </div>
                </div>
                <div className="media-body">
                  <h3 className="heading">Size and Fit Assistance</h3>
                  <p>
                  Cultivate confidence in your style with our size guides and personalized fit support. Shop assured that your selections will be the perfect fit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HomeProduct />

      <section className="ftco-section ftco-choose ftco-no-pb ftco-no-pt">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-lg-4">
              <div
                className="choose-wrap divider-one img p-5 d-flex align-items-end"
                style={{ backgroundImage: "url(images/choose-1.jpg)" }}
              >
                <div className="text text-center text-white px-2">

                  <h2>Men's Collection</h2>
                  <p>
                  Redefine your look with our versatile Men's Collection.
                  </p>
                  <p>
                    <Link to={"/products?category=mens"} className="btn btn-black px-3 py-2">
                      Shop now
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row no-gutters choose-wrap divider-two align-items-stretch">
                <div className="col-md-12">
                  <div
                    className="choose-wrap full-wrap img align-self-stretch d-flex align-item-center justify-content-end"
                    style={{ backgroundImage: "url(images/choose-2.jpg)" }}
                  >
                    <div className="col-md-7 d-flex align-items-center">
                      <div className="text text-white px-5">

                        <h2>Women's Collection</h2>
                        <p>
                        Discover chic and timeless fashion in our Women's Collection.
                        </p>
                        <p>
                          <Link to={"/products?category=womens"} className="btn btn-black px-3 py-2">
                            Shop now
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="row no-gutters">
                    <div className="col-md-6">
                      <div className="choose-wrap wrap img align-self-stretch bg-light d-flex align-items-center">
                        <div className="text text-center px-5">
                          <span className="subheading">Unbeatable Deals Await</span>
                          <h2>Up To 50% Off</h2>
                          <p>
                          Grab up to 50% off on your favorite fashion finds!
                          </p>
                          <p>
                            <Link to={"/products"} className="btn btn-black px-3 py-2">
                              Shop now
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="choose-wrap wrap img align-self-stretch d-flex align-items-center"
                        style={{ backgroundImage: "url(images/choose-3.jpg)" }}
                      >
                        <div className="text text-center text-white px-5">
                          <span className="subheading"></span>
                          <h2>Trend Setters</h2>
                          <p>
                          Discover what's trending with our best sellers.
                          </p>
                          <p>
                            <Link to={"/products"} className="btn btn-black px-3 py-2">
                              Shop now
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Deal/>

      <section className="ftco-section testimony-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="services-flow">
                <div className="services-2 p-4 d-flex ">
                  <div className="icon">
                    <span className="flaticon-bag" />
                  </div>
                  <div className="text">
                    <h3>Expedited Shipping</h3>
                    <p className="mb-0">
                    Fast-track your fashion game with Expedited Shipping, Style on your doorstep, pronto.
                    </p>
                  </div>
                </div>
                <div className="services-2 p-4 d-flex ">
                  <div className="icon">
                    <span className="flaticon-heart-box" />
                  </div>
                  <div className="text">
                    <h3>Gift Pack</h3>
                    <p className="mb-0">
                    Make gifting effortless with our elegant gift packs; we offer discreet gift delivery for that extra touch of thoughtfulness.
                    </p>
                  </div>
                </div>
                <div className="services-2 p-4 d-flex ">
                  <div className="icon">
                    <span className="flaticon-payment-security" />
                  </div>
                  <div className="text">
                    <h3>Shop Securely</h3>
                    <p className="mb-0">
                     Rest assured, our secure payment system ensures that your transactions are protected every time you shop with us.
                    </p>
                  </div>
                </div>
                <div className="services-2 p-4 d-flex ">
                  <div className="icon">
                    <span className="flaticon-customer-service" />
                  </div>
                  <div className="text">
                    <h3>Round-the-Clock Support</h3>
                    <p className="mb-0">
                    We're Here Around the Clock to Assist with All Your Style Emergencies and Fulfill Every Shopping Need You Have.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="heading-section  mb-5">
                <h2 className="mb-4">Pleased Shopper's Thoughts</h2>
                <p>
                Feedback fuels our commitment to quality and keeps our fashion community thriving – leave your review today.
                </p>
              </div>
              <div className="carousel-testimony">

                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide><div className="item">
                    <div className="testimony-wrap">
                      <div
                        className="user-img mb-4"
                        style={{ backgroundImage: "url(images/person_1.jpg)" }}
                      >
                        <span className="quote d-flex align-items-center justify-content-center">
                          <i className="icon-quote-left" />
                        </span>
                      </div>
                      <div className="text">
                        <p className="mb-4 pl-4">
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the blind
                          texts.
                        </p>
                        <p className="name">Bazla Khan</p>
                      </div>
                    </div>
                  </div></SwiperSlide>
                  <SwiperSlide> <div className="item">
                    <div className="testimony-wrap">
                      <div
                        className="user-img mb-4"
                        style={{ backgroundImage: "url(images/person_2.jpg)" }}
                      >
                        <span className="quote d-flex align-items-center justify-content-center">
                          <i className="icon-quote-left" />
                        </span>
                      </div>
                      <div className="text">
                        <p className="mb-4 pl-4 ">
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the blind
                          texts.
                        </p>
                        <p className="name">Suhail Malik</p>
                      </div>
                    </div>
                  </div></SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-gallery">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 heading-section text-center mb-4 ">
              <h2 className="mb-4">Follow Us On Instagram</h2>
              <p>
              Stay fashion-forward with us on Instagram for daily style inspiration and exclusive updates.
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid px-0">
          <div className="row no-gutters">
            <div className="col-md-4 col-lg-2 ">
              <a
                href="https://www.instagram.com/zaraluxuryfaishon?igsh=MWhnZnp4dmZseWhmbA=="
                target='_blank'
                className="gallery image-popup img d-flex align-items-center"
                style={{ backgroundImage: "url(images/gallery-1.jpg)" }}
              >
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram" />
                </div>
              </a>
            </div>
            <div className="col-md-4 col-lg-2 ">
              <a
              href="https://www.instagram.com/zaraluxuryfaishon?igsh=MWhnZnp4dmZseWhmbA=="
              target='_blank'
                className="gallery image-popup img d-flex align-items-center"
                style={{ backgroundImage: "url(images/gallery-2.jpg)" }}
              >
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram" />
                </div>
              </a>
            </div>
            <div className="col-md-4 col-lg-2 ">
              <a
              href="https://www.instagram.com/zaraluxuryfaishon?igsh=MWhnZnp4dmZseWhmbA=="
              target='_blank'
                className="gallery image-popup img d-flex align-items-center"
                style={{ backgroundImage: "url(images/gallery-3.jpg)" }}
              >
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram" />
                </div>
              </a>
            </div>
            <div className="col-md-4 col-lg-2 ">
              <a
              href="https://www.instagram.com/zaraluxuryfaishon?igsh=MWhnZnp4dmZseWhmbA=="
              target='_blank'
                className="gallery image-popup img d-flex align-items-center"
                style={{ backgroundImage: "url(images/gallery-4.jpg)" }}
              >
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram" />
                </div>
              </a>
            </div>
            <div className="col-md-4 col-lg-2 ">
              <a
              href="https://www.instagram.com/zaraluxuryfaishon?igsh=MWhnZnp4dmZseWhmbA=="
              target='_blank'
                className="gallery image-popup img d-flex align-items-center"
                style={{ backgroundImage: "url(images/gallery-5.jpg)" }}
              >
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram" />
                </div>
              </a>
            </div>
            <div className="col-md-4 col-lg-2 ">
              <a
              href="https://www.instagram.com/zaraluxuryfaishon?igsh=MWhnZnp4dmZseWhmbA=="
              target='_blank'
                className="gallery image-popup img d-flex align-items-center"
                style={{ backgroundImage: "url(images/gallery-6.jpg)" }}
              >
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>


  )
}

export default Index