import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <section id="home-section" className="hero">
    <div className="home-slider owl-carousel">

    <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                <SwiperSlide>
                <div className="slider-item js-fullheight">
        <div className="overlay" />
        <div className="container-fluid p-0">
          <div
            className="row d-md-flex no-gutters slider-text align-items-center justify-content-end"
            data-scrollax-parent="true"
          >
            <img
              className="one-third order-md-last img-fluid"
              src="images/bg_1.png"
              alt=""
            />
            <div
              className="one-forth d-flex align-items-center ftco-animate"
              data-scrollax=" properties: { translateY: '70%' }"
            >
              <div className="text">
                <span className="subheading">#New</span>
                <div className="horizontal">
                  <h1 className=" mt-3">Launching <b>new styles</b>—shaped by your personal flair.</h1>
                  <p className="mb-4">
                  Our latest collections, ranging from Maximalist to Minimalist, are thoughtfully created to match your distinct style.
                  </p>
                  <p>
                    <Link to={"/products"} className="btn-custom">
                      Discover Now
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div></SwiperSlide>

                <SwiperSlide>
                <div className="slider-item js-fullheight">
                <div className="overlay" />
                <div className="container-fluid p-0">
                  <div
                    className="row d-flex no-gutters slider-text align-items-center justify-content-end"
                    data-scrollax-parent="true"
                  >
                    <img
                      className="one-third order-md-last img-fluid"
                      src="images/bg_2.png"
                      alt=""
                    />
                    <div
                      className="one-forth d-flex align-items-center ftco-animate"
                      data-scrollax=" properties: { translateY: '70%' }"
                    >
                      <div className="text">
                <span className="subheading">#Best</span>

                        <div className="horizontal">
                          <h1 className="mb-4 mt-3">What's the <b>best lock</b>  for your home?</h1>
                          <p className="mb-4">
                          Simplifying tough choices. Utilize our specialist help to discover the ideal match for you. </p>
                          <p>
                          <Link to={"/products?category=mens"}  className="btn-custom">
                              Discover Now
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                </SwiperSlide>
                  
                  
                  </Swiper>
      
  
    </div>
  </section>
  
  )
}

export default Hero