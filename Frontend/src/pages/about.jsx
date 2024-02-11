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
              <h2 className="mb-4">Stablished Sinced 1975</h2>
            </div>
          </div>
          <div className="pb-md-5 pb-4">
            <p>
              But nothing the copy said could convince her and so it didn’t take
              long until a few insidious Copy Writers ambushed her, made her
              drunk with Longe and Parole and dragged her into their agency,
              where they abused her for their.
            </p>
            <p>
              But nothing the copy said could convince her and so it didn’t take
              long until a few insidious Copy Writers ambushed her.
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
            On her way she met a copy. The copy warned the Little Blind Text,
            that where it came from it would have been rewritten a thousand
            times and everything that was left from its origin would be the word
            "and" and the Little Blind Text should turn around and return to its
            own, safe country. But nothing the copy said could convince her and
            so it didn’t take long until a few insidious Copy Writers ambushed
            her, made her drunk with Longe and Parole and dragged her into their
            agency, where they abused her for their.
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
            On her way she met a copy. The copy warned the Little Blind Text,
            that where it came from it would have been rewritten a thousand
            times and everything that was left from its origin would be the word
            "and" and the Little Blind Text should turn around and return to its
            own, safe country. But nothing the copy said could convince her and
            so it didn’t take long until a few insidious Copy Writers ambushed
            her, made her drunk with Longe and Parole and dragged her into their
            agency, where they abused her for their.
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
        On her way she met a copy. The copy warned the Little Blind Text,
        that where it came from it would have been rewritten a thousand
        times and everything that was left from its origin would be the word
        "and" and the Little Blind Text should turn around and return to its
        own, safe country. But nothing the copy said could convince her and
        so it didn’t take long until a few insidious Copy Writers ambushed
        her, made her drunk with Longe and Parole and dragged her into their
        agency, where they abused her for their.
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