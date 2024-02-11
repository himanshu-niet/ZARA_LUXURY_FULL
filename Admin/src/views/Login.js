import axios from 'axios';
import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import {baseURL} from 'utils/useAxios';
import { Redirect } from 'react-router-dom';
import Loader from 'components/Loader';
import { getCookie } from 'utils/cookie';
import { setCookie } from 'utils/cookie';



const Login = () => {

  const cookie=getCookie("token");
 
  if(cookie){
   window.location.href="/admin/dashboard";
    return <Loader/>
  }

    const formik = useFormik({
        initialValues: {
          email: "",
          password:""
        },
        onSubmit: (values) => {  
            axios.post(`${baseURL}`+'/api/v1/login', values)
              .then(function (response) {
                const data=response.data;

                if(data.user.role!="admin"){
                  alert("Provide Admin Credentials...")
                 return 
                }
                setCookie("token", data.token,10);
                location.href="/admin/dashboard";
              })
              .catch(function (error) {
                alert("Enter Correct Email or Password..")

              });
        },
      });



    return (

    <section className="h-100">
    <div className="container h-100">
      <div className="row justify-content-sm-center h-100">
        <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
         
          <div className="card shadow-lg my-5">
            <div className="card-body p-5">
              <h2 className="fs-3 card-title fw-bold mb-4">Admin Login</h2>
              <form
              onSubmit={formik.handleSubmit}
                className="needs-validation"
                noValidate=""
                autoComplete="off"
              >
                <div className="mb-3">
                  <label className="mb-2 text-muted" htmlFor="email">
                    E-Mail Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-control"
                    name="email"
                    required
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  <div className="invalid-feedback">Email is invalid</div>
                </div>
                <div className="mb-3">
                  <div className="mb-2 w-100">
                    <label className="text-muted" htmlFor="password">
                      Password
                    </label>
                    
                  </div>
                  <input
                    id="password"
                    type="password"
                    className="form-control"
                    name="password"
                    required
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                  <div className="invalid-feedback">Password is required</div>
                </div>
                <div className="d-flex align-items-center">
                
                  <button type="submit" className="btn btn-primary ms-auto">
                    Login
                  </button>
                </div>
              </form>
            </div>
            <div className="card-footer py-3 border-0">
              <div className="text-center">
              <a className="float-end">
              Forgot Password?
            </a>
              </div>
            </div>
          </div>
       
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Login