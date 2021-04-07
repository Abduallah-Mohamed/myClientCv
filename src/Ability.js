import React, { Component } from "react";
import "./styles/Ability.css";
// import hack from "./karl-pawlowicz-QUHuwyNgSA0-unsplash.jpg";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import Fade from "react-reveal/Fade";

export default class Ability extends Component {
    render() {
        return (
            <section className="Ability">
                <Container>
                    <Row>
                        <Col sm={12} md={12} lg={6}>
                            <Fade top>
                                <h2>Some About my Abilities</h2>
                                <p>
                                    I provide cost-effective and high quality
                                    products to meet my Clients’ needs of timely
                                    delivery World Wide. I want to be local in a
                                    global world to be where my Customers need
                                    my services.
                                </p>
                            </Fade>
                        </Col>
                        <Col sm={12} md={12} lg={6}>
                            <Fade bottom>
                                <Row>
                                    <Col>
                                        <span>Javascript</span>
                                        <ProgressBar
                                            variant="secondary"
                                            now={80}
                                            label={`${80}%`}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <span>Nodejs</span>
                                        <ProgressBar
                                            variant="secondary"
                                            now={77}
                                            label={`${77}%`}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <span>HTML</span>
                                        <ProgressBar
                                            variant="secondary"
                                            now={85}
                                            label={`${85}%`}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <span>CSS</span>
                                        <ProgressBar
                                            variant="secondary"
                                            now={80}
                                            label={`${80}%`}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <span>ReactJS</span>
                                        <ProgressBar
                                            variant="secondary"
                                            now={75}
                                            label={`${75}%`}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <span>Express</span>
                                        <ProgressBar
                                            variant="secondary"
                                            now={78}
                                            label={`${78}%`}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <span>MongoDB</span>
                                        <ProgressBar
                                            variant="secondary"
                                            now={75}
                                            label={`${75}%`}
                                        />
                                    </Col>
                                </Row>
                            </Fade>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}
