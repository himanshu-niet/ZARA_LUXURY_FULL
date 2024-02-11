import React from 'react'
import { Link } from 'react-router-dom';

const Thank = () => {
  return (
    <>
 <div className='thank'>
 <div className="content">
 <div className="wrapper-1">
   <div className="wrapper-2">
     <h1>Thank you !</h1>
     <p>Thanks for subscribing to our news letter.</p>
     <p>you should receive a confirmation email soon</p>
     <Link to={"/"}><button className="go-home">go home</button></Link> 
   </div>
   <div className="footer-like">
     <p>
       Email not received?
       <Link to={"/"}>Click here to send again</Link>
     </p>
   </div>
 </div>
</div>
 </div>
  <link
    href="https://fonts.googleapis.com/css?family=Kaushan+Script|Source+Sans+Pro"
    rel="stylesheet"
  />
</>

  )
  }
export default Thank;