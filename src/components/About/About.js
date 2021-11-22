import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <>
            <Container style={{ marginTop: '50px' }}>
                <h1>Who we are</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eum sunt nulla commodi sapiente neque accusamus fuga provident, sed officia placeat, earum aperiam eveniet porro! Nostrum nisi nihil error sit maiores non dolore ullam commodi, ea totam. Cupiditate maxime soluta minima, magnam animi, repellendus sint recusandae rem impedit facere provident repudiandae voluptatem eaque hic, quibusdam dolor! Dignissimos, ad mollitia, velit vero maxime soluta odit doloribus minus, provident ab aliquam eius voluptatum quos enim? Quidem, aut maiores exercitationem eum iusto voluptate porro tempore sed cumque. Deleniti beatae quos debitis modi iusto minus saepe
                    aspernatur quam esse sit inventore, veritatis labore optio
                </p>
                <h1>Our Speciality</h1>
                <Row>
                    <Col md={6}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione unde nobis tempore fugiat adipisci perferendis officia odit iure quisquam! Atque eius in suscipit exercitationem minima, beatae, explicabo quasi, nisi architecto neque quia quos! Voluptatibus nihil corrupti repellat nobis et tempore accusantium necessitatibus quia reprehenderit, consectetur quasi rem iste temporibus nisi!</p>
                    </Col>
                    <Col md={6}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolorem asperiores, recusandae tenetur assumenda debitis dicta autem dignissimos excepturi reprehenderit dolores eius nihil et repellendus. Eaque, delectus modi maiores officia fugiat rem consequatur alias repudiandae ullam ea at ducimus excepturi quae accusantium vitae numquam corporis accusamus. Similique voluptates aperiam laborum.</p>
                    </Col>
                </Row>
                <Row>
                    <h1>Our Cheif</h1>
                    <Col md={3}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, nulla ut esse dolores aliquid sapiente facere aperiam eligendi laboriosam, culpa alias saepe harum aliquam tempore?</Col>
                    <Col md={3}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, nulla ut esse dolores aliquid sapiente facere aperiam eligendi laboriosam, culpa alias saepe harum aliquam tempore?</Col>
                    <Col md={3}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, nulla ut esse dolores aliquid sapiente facere aperiam eligendi laboriosam, culpa alias saepe harum aliquam tempore?</Col>
                    <Col md={3}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, nulla ut esse dolores aliquid sapiente facere aperiam eligendi laboriosam, culpa alias saepe harum aliquam tempore?</Col>
                </Row>
            </Container>
        </>
    );
};

export default About;