import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getCookie, setCookie } from '../utils/cookies';
import { useFormik } from 'formik';
import Loding from '../components/Common/Loding';
import axios from 'axios';
import {BASE_URL} from '../utils/config'

const Register = () => {

  const cookie=getCookie("userToken");
 
  if(cookie){
   window.location.href="/cart";
    return <Loding/>
  }

    const formik = useFormik({
        initialValues: {
          email: "",
          password:"",
          name:''
        },
        onSubmit: (values) => {  
            axios.post(`${BASE_URL}`+'/api/v1/register', values)
              .then(function (response) {
                const data=response.data;
                alert("Register Successfully")
                
                setCookie("userToken", data.token,10);
                location.href="/cart";
              })
              .catch(function (error) {
                alert("Enter Valid Data..")

              });
        },
      });



    const [hide,setHide]=useState(false);

  return (
    <section className="container-login forms show-signup">
   
    
    <div className="form signup ">
      <div className="form-content">
        <header>Signup</header>
        <form onSubmit={formik.handleSubmit}>
          <div className="field input-field">
            <input type="email" placeholder="Email" className="input"
            name='email'
            required
            onChange={formik.handleChange}
            value={formik.values.email} />
          </div>
          <div className="field input-field">
            <input type="text" placeholder="Name" className="input"
            name='name'
              required
                    onChange={formik.handleChange}
                    value={formik.values.name} />
          </div>
          
          <div className="field input-field">
            <input
            type={hide?'text':'password'}
              placeholder="Create Min 8 Char password"
              name='password'
              className="password"
              required
                    onChange={formik.handleChange}
                    value={formik.values.password}
            />
            <i className={hide?'bx-show bx eye-icon':'bx-hide bx eye-icon'} onClick={()=>setHide(!hide)} />

          </div>
          <div className="field button-field">
            <button type='submit'>Sign UP</button>
          </div>
        </form>
        <div className="form-link">
          <span>
            Already have an account?{" "}
            <Link to={"/login"} className="link show-signup login-link">
              Login
            </Link>
          </span>
        </div>
      </div>
      <div className="line" />
     
      <div className="media-options">
        <a href="#" className="field google">
          <img src="images/google.png" alt="" className="google-img" />
          <span>Register with Google</span>
        </a>
      </div>
    </div>
  </section>
  )
}

export default Register