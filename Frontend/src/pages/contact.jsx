import React from 'react'
import Haeder from '../components/Common/Haeder'
import Footer from '../components/Common/Footer'
import Bread from '../components/Common/Bread'

const Contact = () => {
  return (
    <>
    <Haeder/>
  
   <Bread page={"Contact Us"}/>

  <section className="ftco-section contact-section bg-light">

    <div className="container">
      <div className="row d-flex mb-5 contact-info">
        <div className="w-100" />
        <div className="col-md-4 d-flex">
          <div className="info bg-white p-4">
            <p>
              <span className='font-weight-bold'>Address:</span> 	G-35, Industrial Area, Anupshahar road, Aligarh, 202002.
            </p>
          </div>
        </div>
        <div className="col-md-4 d-flex">
          <div className="info bg-white p-4">
            <p>
              <span  className='font-weight-bold'>Phone:</span> <a href="tel://1234567920">+91 999-7718-844</a>
            </p>
          </div>
        </div>
        <div className="col-md-4 d-flex">
          <div className="info bg-white p-4">
            <p>
              <span  className='font-weight-bold'>Email:</span>{" "}
              <a href="mailto:info@yoursite.com">ZARALUXURYHELP@GMAIL.COM</a>
            </p>
          </div>
        </div>
     
      </div>
      <div className="row block-9">
        <div className="col-md-6 order-md-last d-flex">
          <form action="#" className="bg-white p-5 contact-form">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Your Email"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
              />
            </div>
            <div className="form-group">
              <textarea
                name=""
                id=""
                cols={30}
                rows={7}
                className="form-control"
                placeholder="Message"
                defaultValue={""}
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                defaultValue="Send Message"
                className="btn btn-primary py-3 px-5"
              />
            </div>
          </form>
        </div>
        <div className="col-md-6 d-flex">
         
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
              width="600"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              className="bg-white"
            />
        </div>
      </div>
    </div>
  </section>
  
  <Footer/>
</>

  )
}

export default Contact