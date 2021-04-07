import React, { Component } from "react";
import "./styles/Services.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

export default class Services extends Component {
    render() {
        return (
            <section className="Services" id="services">
                <Container>
                    <Slide left>
                        <Row className="first-row">
                            <Col>
                                <h2>AMAZING SERVICES</h2>
                                <small>Meet my amazing services</small>
                            </Col>
                        </Row>
                    </Slide>
                    <Row>
                        <Col sm={12} md={12} lg={4} className="colCards">
                            <Fade bottom>
                                <Card style={{ width: "18rem" }}>
                                    <Card.Body>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="50"
                                            height="50"
                                            fill="currentColor"
                                            className="bi bi-code"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z" />
                                        </svg>

                                        <Card.Title>Web Development</Card.Title>

                                        <Card.Text>
                                            Great web design without
                                            functionality is like a sports car
                                            with no engine so we make sure that
                                            you have the best engine ever.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Fade>
                        </Col>

                        <Col sm={12} md={12} lg={4} className="colCards">
                            <Fade top>
                                <Card style={{ width: "18rem" }}>
                                    <Card.Body>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="50"
                                            height="50"
                                            fill="currentColor"
                                            className="bi bi-easel"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M8 0a.5.5 0 0 1 .473.337L9.046 2H14a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1.85l1.323 3.837a.5.5 0 1 1-.946.326L11.092 11H8.5v3a.5.5 0 0 1-1 0v-3H4.908l-1.435 4.163a.5.5 0 1 1-.946-.326L3.85 11H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4.954L7.527.337A.5.5 0 0 1 8 0zM2 3v7h12V3H2z" />
                                        </svg>

                                        <Card.Title>Web Design</Card.Title>

                                        <Card.Text>
                                            Websites promote you 24/7: No
                                            employee will do that, and we make
                                            sure that it's a good one.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Fade>
                        </Col>

                        <Col sm={12} md={12} lg={4} className="colCards">
                            <Fade bottom>
                                <Card style={{ width: "18rem" }}>
                                    <Card.Body>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="50"
                                            height="50"
                                            fill="currentColor"
                                            className="bi bi-gear-wide-connected"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5zm0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065l.087-.065zm-.431.355A4.984 4.984 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8 4.617 4.322zm.344 7.646.087.065-.087-.065z" />
                                        </svg>

                                        <Card.Title>
                                            Software Solutions
                                        </Card.Title>

                                        <Card.Text>
                                            We build a different software
                                            solution that fit all your needs no
                                            matter your company size you will
                                            always need software to help you, so
                                            we are here to help you and your
                                            company.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Fade>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}
