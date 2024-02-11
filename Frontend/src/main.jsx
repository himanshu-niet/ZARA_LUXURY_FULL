import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './pages/index.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./errorPage";
import About from './pages/about.jsx';
import Contact from './pages/contact.jsx';
import Products from './pages/products.jsx';
import SingleProduct from './pages/singleProduct.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Index/>,
    errorElement: <ErrorPage />,
  },
  ,
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/contact",
    element: <Contact/>
  },
  {
    path: "/products",
    element: <Products/>
  },
  {
    path: "/product/:productId",
    element: <SingleProduct/>
  },
 
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
