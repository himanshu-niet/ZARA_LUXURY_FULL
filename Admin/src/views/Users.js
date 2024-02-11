import Loader from 'components/Loader';
import React, { useEffect, useState } from 'react'


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
import useAxios from "utils/useAxios";


function Users() {

  const token=getCookie("token");

  const { response, loading, error } = useAxios({
    method: 'Get',
    url: '/api/v1/admin/users',
    headers: { // no need to stringify
      accept: '*/*',
      token:token
    }
});



if(loading) <Loader/>;

if(error) <h1>Connect To Technical Team..</h1>;

 if(response) return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Users List</Card.Title>
                <p className="card-category">
                  Update Role and Delete User
                </p>
              </Card.Header>
              
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Email</th>
                      <th className="border-0">Role</th>
                      <th className="border-0">Update</th>
                    </tr>
                  </thead>
                  <tbody>
                  
                  {response.users.map((item,idx)=>{
                    return(
                      <tr key={idx}>
                      <td>{item._id}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.role}</td>
                      <td><a >Change Role</a></td>
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

export default Users;
