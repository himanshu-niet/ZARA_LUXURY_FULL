import axios from 'axios';
import Loader from 'components/Loader';
import React, { useEffect } from 'react'


// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { getCookie } from 'utils/cookie';
import useAxios from 'utils/useAxios';
import { baseURL } from 'utils/useAxios';

function Products() {
 
  const deleteProduct=(_id)=>{
    const token = getCookie("token");
    axios.delete(`${baseURL}` + `/api/v1/admin/product/${_id}`,
      {
        headers: {
          token: token
        }
      })
      .then(function (response) {

        alert("Product Deleted...")
        location.href="/admin/products";

      })
      .catch(function (error) {
        alert("Product Not Deleted....")
        console.log(error)
      });
  }
  
  const token=getCookie("token");

  const { response, loading, error } = useAxios({
    method: 'Get',
    url: '/api/v1/admin/products',
    headers: { // no need to stringify
      accept: '*/*',
      token:token
    }
});
console.log(response)



if(loading) <Loader/>;

if(error) <h1>Connect To Technical Team..</h1>;

 if(response) return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Product List</Card.Title>
                <p className="card-category">
                  Update and Delete Product
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Title</th>
                      <th className="border-0">Category</th>
                      <th className="border-0">Price</th>
                      <th className="border-0">Discount</th>
                      <th className="border-0">Stock</th>
                      <th className="border-0">Update</th>
                      <th className="border-0">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                 {response.products.map((item,idx)=>{
                  return(
                    <tr key={idx}>
                    <td>{item._id}</td>
                    <td>{item.title}</td>
                    <td>{item.category}</td>
                    <td>{item.price}</td>
                    <td>{item.discount}%</td>
                    <td>{item.stock}</td>
                    
                    <td>Update</td>
                    <td><span onClick={()=>deleteProduct(item._id)} className='py-2 px-3' style={{background:'red', color:'white' , borderRadius:'10px', cursor:'pointer'}}>Delete</span></td>
                    </tr>
                  )
                 })}
                    
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        
        </Row>
      </Container>
    </>
  );
}

export default Products;
