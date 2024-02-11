import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getCookie, setCookie } from '../utils/cookies';
import { useFormik } from 'formik';
import Loding from '../components/Common/Loding';
import axios from 'axios';
import {BASE_URL} from '../utils/config'

const Login = () => {

  const cookie=getCookie("userToken");
 
  if(cookie){
   window.location.href="/cart";
    return <Loding/>
  }

    const formik = useFormik({
        initialValues: {
          email: "",
          password:""
        },
        onSubmit: (values) => {  
            axios.post(`${BASE_URL}`+'/api/v1/login', values)
              .then(function (response) {
                const data=response.data;
             
                setCookie("userToken", data.token,10);
                location.href="/cart";
              })
              .catch(function (error) {
                
                alert("Enter Correct Email or Password..")
              });
        },
      });


    const [hide,setHide]=useState(false);

  return (
    <section className="container-login forms">
    <div className="form login">
      <div className="form-content">
        <header>Login</header>
        <form onSubmit={formik.handleSubmit}>
          <div className="field input-field">
            <input type="email" placeholder="Email" className="input" 
            name='email'
            required
            onChange={formik.handleChange}
            value={formik.values.email}/>
          </div>
          <div className="field input-field">
            <input
              type={hide?'text':'password'}
              placeholder="Password"
              name='password'
              className="password"
              required
                    onChange={formik.handleChange}
                    value={formik.values.password}
            />
            <i className={hide?'bx-show bx eye-icon':'bx-hide bx eye-icon'} onClick={()=>setHide(!hide)} />
          </div>
          <div className="form-link">
            <a href="#" className="forgot-pass">
              Forgot password?
            </a>
          </div>
          <div className="field button-field">
            <button type='submit'>Login</button>
          </div>
        </form>
        <div className="form-link">
          <span>
            Don't have an account?{" "}
            <Link to={"/register"} className="link signup-link">
              Signup
            </Link>
          </span>
        </div>
      </div>
      <div className="line" />
     
      <div className="media-options">
      <a href="#" className="field google">
      <img src="images/google.png" alt="" className="google-img" />
      <span>Login with Google</span>
    </a>
      </div>
    </div>
    {/* Signup Form */}

  </section>
  )
}

export default Login