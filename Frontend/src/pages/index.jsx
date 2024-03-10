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
                  <img style={{height:'80px'}} src='/img/lock.png'/>
                  </div>
                </div>
                <div className="media-body">
                  <h3 className="heading">Lock Which Makes Life Simpler</h3>
                  <p>
                  Enjoy total convenience and unmatched simplicity with the innovative locks from Zara Luxury. </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 text-center d-flex align-self-stretch ">
              <div className="media block-6 services p-4 py-md-5">
                <div className="icon d-flex justify-content-center align-items-center mb-4">
                <div>
                <img style={{height:'80px'}} src='/img/key.png'/>

                </div>
                </div>
                <div className="media-body">
                  <h3 className="heading">Lakhs of Key Combination</h3>
                  <p>Explore vast key combination options for tailored security, ensuring personalized protection for your space with our wide selection. </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 text-center d-flex align-self-stretch ">
              <div className="media block-6 services p-4 py-md-5">
                <div className="icon d-flex justify-content-center align-items-center mb-4">
                <div>
                <img style={{height:'80px'}} src='/img/blacksmith.png'/>
                </div>
                </div>
                <div className="media-body">
                  <h3 className="heading">Crafted with toughest materials</h3>
                  <p>
                  Engineered with unparalleled durability, our locks are designed to withstand the test of time. </p>
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

                  <h2>Smart Locks</h2>
                  <p>
                  Offering keyless convenience and remote access for a seamless and secure entry experience.
                  </p>
                  <p>
                    <Link to={"/products?category=Smart Locks"} className="btn btn-black px-3 py-2">
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

                        <h2>Hinges & Knobs</h2>
                        <p>
                        Enhance your doors with our premium Hinges & Knobs
                        </p>
                        <p>
                          <Link to={"/products?category=Hinges & Knobs"} className="btn btn-black px-3 py-2">
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
                          Snag up to 50% off on your top lock selections!
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
                          <h2>Door Accessories</h2>
                          <p>
                          The perfect finishing touch for your entryway's functionality and aesthetics.
                          </p>
                          <p>
                            <Link to={"/products?category=Door Accessories"} className="btn btn-black px-3 py-2">
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
                    <img src='img/screwdriver.png' style={{height:'70px'}}/>
                  </div>
                  <div className="text">
                    <h3>How-To & Installation</h3>
                    <p className="mb-0">
                    Leverage the expertise of our seasoned professionals for guidance and support.</p>
                  </div>
                </div>
                <div className="services-2 p-4 d-flex ">
                  <div className="icon">
                 
                  <img src='img/warranty.png' style={{height:'80px'}}/>

                  </div>
                  <div className="text">
                    <h3>Guaranteed Warranty</h3>
                    <p className="mb-0">
                    Enjoy peace of mind with our assured warranty coverage on every purchase.</p>
                  </div>
                </div>
                <div className="services-2 p-4 d-flex ">
                  <div className="icon">
                  <img src='img/warranty.png' style={{height:'80px'}}/>

                  </div>
                  <div className="text">
                    <h3>Understand your requirements for locks.</h3>
                    <p className="mb-0">
                    We are Here Around the Clock to Assist With All Your Security Concerns.</p>
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
                <h2 className="mb-4">Feedback from Our Valued Selling Partners</h2>
                <p>
                Feedback powers our dedication to excellence and supports our security community </p>
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
                        style={{ backgroundImage: "url(img/1.jpeg)" }}
                      >
                        <span className="quote d-flex align-items-center justify-content-center">
                          <i className="icon-quote-left" />
                        </span>
                      </div>
                      <div className="text">
                        <p className="mb-4 pl-4">
                        The quality and reliability of these locks are unmatched. After incorporating them into our inventory, customer satisfaction has noticeably increased. Truly a game-changer in the security products market.
                        </p>
                        <p className="name">Rajesh Kumar</p>
                      </div>
                    </div>
                  </div></SwiperSlide>

                  <SwiperSlide> <div className="item">
                    <div className="testimony-wrap">
                      <div
                        className="user-img mb-4"
                        style={{ backgroundImage: "url(img/2.jpeg)" }}
                      >
                        <span className="quote d-flex align-items-center justify-content-center">
                          <i className="icon-quote-left" />
                        </span>
                      </div>
                      <div className="text">
                        <p className="mb-4 pl-4 ">
                        We've been partners for over a year now, and I must say, the innovation and durability in these locks are exceptional. Our clients appreciate the advanced security features, making it a top choice for us to recommend.
                        </p>
                        <p className="name">Ahmad Mirza</p>
                      </div>
                    </div>
                  </div></SwiperSlide>

                  <SwiperSlide> <div className="item">
                    <div className="testimony-wrap">
                      <div
                        className="user-img mb-4"
                        style={{ backgroundImage: "url(img/3.jpeg)" }}
                      >
                        <span className="quote d-flex align-items-center justify-content-center">
                          <i className="icon-quote-left" />
                        </span>
                      </div>
                      <div className="text">
                        <p className="mb-4 pl-4 ">
                        From smart locks to traditional designs, the range and quality offered have greatly enhanced our product lineup. Our customers trust the brand, and the positive feedback has been overwhelming. Excellent support from the team as well!
                        </p>
                        <p className="name">Vijay Patil</p>
                      </div>
                    </div>
                  </div></SwiperSlide>

                  <SwiperSlide> <div className="item">
                    <div className="testimony-wrap">
                      <div
                        className="user-img mb-4"
                        style={{ backgroundImage: "url(img/4.jpeg)" }}
                      >
                        <span className="quote d-flex align-items-center justify-content-center">
                          <i className="icon-quote-left" />
                        </span>
                      </div>
                      <div className="text">
                        <p className="mb-4 pl-4 ">
                        These locks have set a new standard in the market. The detailed craftsmanship and robust security features have made them a favorite among our customers. It's a pleasure to be a distributor of such a reputable brand.
                        </p>
                        <p className="name">Suresh Gupta</p>
                      </div>
                    </div>
                  </div></SwiperSlide>

                  <SwiperSlide> <div className="item">
                    <div className="testimony-wrap">
                      <div
                        className="user-img mb-4"
                        style={{ backgroundImage: "url(img/5.jpeg)" }}
                      >
                        <span className="quote d-flex align-items-center justify-content-center">
                          <i className="icon-quote-left" />
                        </span>
                      </div>
                      <div className="text">
                        <p className="mb-4 pl-4 ">
                        The diversity and technological advancement in these locks are impressive. It's been a pleasure to introduce them to our market. The feedback from our customers is consistently positive, appreciating the blend of tradition and innovation.
                        </p>
                        <p className="name">Faisal Khan</p>
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
              Stay secure with us on Instagram for daily lock solutions, security tips, and exclusive updates.
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