import React from 'react'
import Footer from '../components/Common/Footer'
import Haeder from '../components/Common/Haeder'
import Bread from '../components/Common/Bread'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='bg-light'>
    <Haeder/>
    <Bread page={"About Us"}/>
  
  <section className="ftco-section ftco-no-pb ftco-no-pt bg-light">
  
    <div className="container">
   
      <div className="row">
        <div
          className="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center"
          style={{ backgroundImage: "url(images/about.jpg)" }}
        >
          <a
            href="https://vimeo.com/45830194"
            className="icon popup-vimeo d-flex justify-content-center align-items-center"
          >
            <span className="icon-play" />
          </a>
        </div>
        <div className="col-md-7 py-md-5 wrap-about pb-md-5 ">
          <div className="heading-section-bold mb-4 mt-md-5">
            <div className="ml-md-0">
              <h2 className="mb-4">Safeguarding Since 2015</h2>
            </div>
          </div>
          <div className="pb-md-5 pb-4">
            <p>
            Founded in 2015, our company has rapidly become a beacon of innovation and reliability in the lock industry. With a steadfast commitment to security and quality, we have dedicated ourselves to crafting locks that not only meet but exceed the expectations of modern safety standards. Our journey began with a simple vision: to provide unparalleled security solutions that homeowners and businesses can trust. Over the years, we have expanded our product line to include a wide range of locking mechanisms, from traditional designs to cutting-edge smart locks, ensuring that we offer something for every need.
            </p>
            <p>
            Our team, composed of seasoned engineers, designers, and security experts, works tirelessly to push the boundaries of what's possible in lock technology. We pride ourselves on our attention to detail, innovation, and the ability to offer personalized solutions that address the unique security challenges of our clients.
            </p>
            <p>
            As a company, we believe in the power of strong community ties and the importance of listening to our customers. Their feedback has been instrumental in our growth and continues to shape the way we evolve our products and services. Looking ahead, we are excited about the future of security and are committed to staying at the forefront of the industry, providing our customers with the peace of mind they deserve.
            <br/>
            <b>Thank you for choosing us as your partner in security. Together, we are creating safer spaces for everyone.</b>
           
            </p>
            <p>
              <Link to={"/products"} className="btn btn-primary">
                Shop now
              </Link>
            </p>
          </div>
        </div>
      </div>


    

      <div className="row mt-5 about bg-white p-5 mb-5">
  <div className="col-md-12 nav-link-wrap">
    <div
      className="nav nav-pills d-flex text-center"
      id="v-pills-tab"
      role="tablist"
      aria-orientation="vertical"
    >
      <a
        className="nav-link  active mr-lg-1"
        id="v-pills-1-tab"
        data-toggle="pill"
        href="#v-pills-1"
        role="tab"
        aria-controls="v-pills-1"
        aria-selected="true"
      >
        Vision
      </a>
      <a
        className="nav-link mr-lg-1"
        id="v-pills-2-tab"
        data-toggle="pill"
        href="#v-pills-2"
        role="tab"
        aria-controls="v-pills-2"
        aria-selected="false"
      >
      Mission
      </a>
      <a
        className="nav-link"
        id="v-pills-3-tab"
        data-toggle="pill"
        href="#v-pills-3"
        role="tab"
        aria-controls="v-pills-3"
        aria-selected="false"
      >
      Values
      </a>
    </div>
  </div>
  <div className="col-md-12 tab-wrap ">
    <div className="tab-content " id="v-pills-tabContent">
      <div
        className="tab-pane fade show active"
        id="v-pills-1"
        role="tabpanel"
        aria-labelledby="day-1-tab"
      >
        <div className="p-4">
          
          <p>
          Our mission is to enhance the safety and security of homes and businesses worldwide. We aim to achieve this by developing cutting-edge locking mechanisms that offer superior protection without compromising on ease of use. At Zara Luxury Locks, we believe that everyone deserves to feel safe and secure, and we are committed to making that a reality through our products and services.
          </p>
        </div>
      </div>
      <div
        className="tab-pane fade"
        id="v-pills-2"
        role="tabpanel"
        aria-labelledby="v-pills-day-2-tab"
      >
        <div className="p-4">
         
          <p>
          Our vision is to redefine the standards of security in the digital age. We aspire to be at the forefront of the lock and security industry by being innovators and pioneers in smart lock technology. Our goal is to create a safer, more connected world where access and security go hand in hand, empowering individuals and communities to protect what matters most to them.
          </p>
        </div>
      </div>
      <div
        className="tab-pane fade"
        id="v-pills-3"
        role="tabpanel"
        aria-labelledby="v-pills-day-3-tab"
      >
      <div className="p-4 ">
         
      <p>
      Our values center on innovation, quality, customer focus, integrity, and sustainability. We're dedicated to leading in security technology through continuous improvement, crafting locks of the highest reliability and durability. Our commitment to our customers drives us to exceed their expectations, conducting our business with integrity and respect for all. Moreover, we uphold sustainable practices to ensure our impact on the planet is positive.
      </p>
    </div>
      </div>
    </div>
  </div>
</div>

    </div>
  </section>
 
  <Footer/>
</div>

  )
}

export default About