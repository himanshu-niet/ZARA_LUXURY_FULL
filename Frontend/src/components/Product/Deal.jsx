import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Deal = () => {
    return (

        <section className="ftco-section ftco-deal bg-primary">
            <div className="container">

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
                  <SwiperSlide> <div className="row">
                  <div className="col-md-6">
                      <img src="images/prod-1.png" className="img-fluid" alt="" />
                  </div>
                  <div className="col-md-6">
                      <div className="heading-section heading-section-white">
                          <span className="subheading">Deal of the month</span>
                          <h2 className="mb-3">Deal of the month</h2>
                      </div>
                    
                      <div className="text-deal">
                          <h2>
                              <a href="#">Nike Free RN 2019 iD</a>
                          </h2>
                          <p className="price">
                              <span className="mr-2 price-dc">₹120.00</span>
                              <span className="price-sale">₹80.00</span>
                          </p>
                          <ul className="thumb-deal d-flex mt-4">
                              <li
                                  className="img"
                                  style={{ backgroundImage: "url(images/product-6.png)" }}
                              />
                              <li
                                  className="img"
                                  style={{ backgroundImage: "url(images/product-2.png)" }}
                              />
                              <li
                                  className="img"
                                  style={{ backgroundImage: "url(images/product-4.png)" }}
                              />
                          </ul>
                      </div>
                  </div>
              </div></SwiperSlide>
                  <SwiperSlide>
                  <div className="row">
                  <div className="col-md-6">
                      <img src="images/prod-1.png" className="img-fluid" alt="" />
                  </div>
                  <div className="col-md-6">
                      <div className="heading-section heading-section-white">
                          <span className="subheading">Deal of the Year</span>
                          <h2 className="mb-3">Deal of the Year</h2>
                      </div>
                    
                      <div className="text-deal">
                          <h2>
                              <a href="#">Nike Free RN 2019 iD</a>
                          </h2>
                          <p className="price">
                              <span className="mr-2 price-dc">₹120.00</span>
                              <span className="price-sale">₹80.00</span>
                          </p>
                          <ul className="thumb-deal d-flex mt-4">
                              <li
                                  className="img"
                                  style={{ backgroundImage: "url(images/product-6.png)" }}
                              />
                              <li
                                  className="img"
                                  style={{ backgroundImage: "url(images/product-2.png)" }}
                              />
                              <li
                                  className="img"
                                  style={{ backgroundImage: "url(images/product-4.png)" }}
                              />
                          </ul>
                      </div>
                  </div>
              </div>
                  </SwiperSlide>

                  </Swiper>
               
           

            </div>
        </section>

    )
}

export default Deal