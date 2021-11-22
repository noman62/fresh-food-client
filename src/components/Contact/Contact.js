import React from "react";
import { Col, Container, Image, Row, Table } from "react-bootstrap";
import {FiPhone} from 'react-icons/fi'
const Contact = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col md={6}>
            <h1>Fresh Food Shop</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              impedit nisi, reprehenderit molestiae atque id. Repellat nostrum
              quos ex. Facilis rerum libero sint illum soluta? Eum totam quidem
              ut vitae excepturi alias delectus id, enim odit numquam corrupti
              eos reprehenderit recusandae at repudiandae aspernatur commodi
              odio temporibus eaque necessitatibus ea.
            </p>
            <Table striped bordered hover text-center>
              <thead>
                <tr>
                  <th className="bg-warning text-center" colSpan={3}>
                    ---Contact Details---
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><FiPhone/></td>
                  <td>Mark</td>
                  <td>Otto</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={6} >
              <Image src="images/farmhouse.jpg" style={{width:'100%',height:'100%'}} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
