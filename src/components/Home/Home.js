import React from 'react';
import { Container,Row,Col, Collapse } from 'react-bootstrap';
import AllPizza from '../../pizza-data';
import Pizza from '../Pizza/Pizza';
const Home = () => {
    return (
        <>
            <Container>
                <Row>
                    {
                        AllPizza.map((pizza)=>(
                            <Col md={4}>
                                <Pizza pizza={pizza} />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </>
    );
};

export default Home;