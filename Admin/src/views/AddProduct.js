import axios from 'axios';
import { Formik, useFormik } from 'formik';
import React, { useEffect, useState } from 'react'

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




function AddProduct() {

  const categorySubcategoryMap = {
    Mens: ["Shirts","T-Shirts", "Jackets", "Pants","Footwears"],
    Womens: ["Tops", "Outwears", "Bottoms","Dresses","Footwears"],
    Kids: ["Shirts","T-Shirts", "Jackets", "Pants","Footwears"],
    Accessories: ["Mens Accessories", "Mens Wallets", "Womens Jewellery","Womens Handbags & Purses"],
  };

  const [selectedCategory, setSelectedCategory] = useState("Mens");
  const [selectedSubcategory, setSelectedSubcategory] = useState(categorySubcategoryMap.Mens[0]);


  const [images, setImages] = useState([]);

  const registerDataChange = (e) => {

    const files = Array.from(e.target.files);

    setImages([]);


    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });

  };

  const formik = useFormik({
    initialValues: {
      title: "",
      price: "",
      discount: "",
      stock: "",
      desc: "",
      detail: "",
      mfg: ""
    },
    onSubmit: (values) => {

      const formData = new FormData();
      for (let value in values) {
        formData.set(value, values[value]);
      }

      formData.set("category",selectedCategory)
      formData.set("subCategory",selectedSubcategory)

      images.forEach((image) => {
        formData.append("images", image);
      });


      const token = getCookie("token");

      axios.post(`${baseURL}` + '/api/v1/admin/product/new', formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            token: token
          }
        })
        .then(function (response) {

          alert("Product Added Succesfully")
          location.href = "/admin/products";

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
                <Form onSubmit={formik.handleSubmit} encType="multipart/form-data">


                  <Row>
                    <Col className="pr-1" md="12">
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
                        <Form.Control as="select" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                          {Object.keys(categorySubcategoryMap).map((category) => (
                            <option key={category} value={category}>{category}</option>
                          ))}
                        </Form.Control>
                        
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label style={{ fontWeight: 'bold' }}>Sub Category</label>
                        <Form.Control as="select" value={selectedSubcategory} onChange={(e) => setSelectedSubcategory(e.target.value)}>
                          {categorySubcategoryMap[selectedCategory].map((subcategory) => (
                            <option key={subcategory} value={subcategory}>{subcategory}</option>
                          ))}
                        </Form.Control>
                       
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col className="pl-1" md="6">
                      <Form.Group controlId="formFileMultiple">
                        <label style={{ fontWeight: 'bold' }}>Image</label>
                        <Form.Control
                          required
                          accept='image/*'
                          name="avatar"
                          onChange={registerDataChange}
                          multiple
                          type="file"

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
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label style={{ fontWeight: 'bold' }}>Detail</label>
                        <Form.Control
                          cols="80"
                          required
                          name="detail"
                          onChange={formik.handleChange}
                          value={formik.values.detail}
                          placeholder="Detail"
                          rows="4"
                          as="textarea"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label style={{ fontWeight: 'bold' }}>Manufacturer</label>
                        <Form.Control
                          cols="80"
                          required
                          name="mfg"
                          onChange={formik.handleChange}
                          value={formik.values.mfg}
                          placeholder="Manufacturer"
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

export default AddProduct;