import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect } from 'react'

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col
} from "react-bootstrap";
import { getCookie } from 'utils/cookie';
import { baseURL } from 'utils/useAxios';


function UpdateProduct() {

  const formik = useFormik({
    initialValues: {
      title: "",
      price: null,
      discount: null,
      category: "",
      stock: null,
      desc: ""
    },
    onSubmit: (values) => {

      const token = getCookie("token");

      axios.post(`${baseURL}` + '/admin/product/new', values,
        {
          headers: {
            token: token
          }
        })
        .then(function (response) {

          alert("Product Added Succesfully")

        })
        .catch(function (error) {
          alert("Product Not Added")
          console.log(error)
        });
    },
  });


  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Add Product</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={formik.handleSubmit}>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label style={{ fontWeight: 'bold' }}>Title</label>
                        <Form.Control
                          placeholder="Product Title"
                          type="text"
                          required
                          name="title"
                          onChange={formik.handleChange}
                          value={formik.values.title}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label style={{ fontWeight: 'bold' }}>Price</label>
                        <Form.Control
                          required
                          onChange={formik.handleChange}
                          value={formik.values.price}
                          placeholder="Product Price"
                          type="number"
                          name="price"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label style={{ fontWeight: 'bold' }}>Discount</label>
                        <Form.Control
                          required
                          name="discount"
                          onChange={formik.handleChange}
                          value={formik.values.discount}

                          placeholder="Product Discount"
                          type="number"

                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label style={{ fontWeight: 'bold' }}>Category</label>
                        <Form.Control
                          required
                          name="category"
                          onChange={formik.handleChange}
                          value={formik.values.category}
                          placeholder="Product Category"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label style={{ fontWeight: 'bold' }}>Stock</label>
                        <Form.Control
                          required
                          name="stock"
                          onChange={formik.handleChange}
                          value={formik.values.stock}
                          placeholder="Product Stock"
                          type="number"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label style={{ fontWeight: 'bold' }}>Description</label>
                        <Form.Control
                          cols="80"
                          required
                          name="desc"
                          onChange={formik.handleChange}
                          value={formik.values.desc}
                          placeholder="Product Description"
                          rows="4"
                          as="textarea"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button
                    className="btn-fill pull-right mt-2"
                    type="submit"
                    variant="info"
                  >
                    Add Product
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    </>
  );
}

export default UpdateProduct;
