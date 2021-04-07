import React, { Component } from "react";
import me from "./13055946_1710555015868324_6952085645705279428_o.jpg";
import "./styles/About.css";
import { Container, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Typical from "react-typical";

export default class About extends Component {
    render() {
        return (
            <div className="About" id="about">
                <Container>
                    <Row>
                        <Col>
                            <Fade top>
                                <div className="About-heading">
                                    <h3>About Me</h3>
                                    <span>Some Information About Me</span>
                                </div>
                            </Fade>
                        </Col>
                    </Row>
                    <Row id="about-content">
                        <Col sm={12} md={12} lg={5}>
                            <Fade left>
                                <img
                                    className="About-content-img"
                                    src={me}
                                    alt="Iam Here Again"
                                    id="about-content-img"
                                />
                            </Fade>
                        </Col>
                        <Col sm={12} md={12} lg={7}>
                            <Fade right>
                                <h4 id="typing">
                                    I'm Abduallah Mohamed and{" "}
                                    <span>
                                        <Typical
                                            steps={[
                                                "Software Engineer.",
                                                2000,
                                                "Javascript Developer.",
                                                2000,
                                                "Nodejs Developer.",
                                                2000,
                                                "Freelancer.",
                                                2000,
                                            ]}
                                            loop={Infinity}
                                            wrapper="span"
                                        />{" "}
                                    </span>
                                </h4>
                                <p>
                                    Hi! My name is{" "}
                                    <span className="About-name">
                                        Abduallah Mohamed.
                                    </span>{" "}
                                    I am a Web Developer, and I'm very
                                    passionate and dedicated to my work. With +2
                                    years experience as a professional Web
                                    developer, I have acquired the skills and
                                    knowledge necessary to make your project a
                                    success. I enjoy every step of the design
                                    process, from discussion and collaboration
                                    to concept and execution, but I find the
                                    most satisfaction in seeing the finished
                                    product do everything for you that it was
                                    created to do.
                                </p>
                                <ul>
                                    <Row>
                                        <Col sm md={6} lg={6}>
                                            <li>
                                                <label>
                                                    Birthday:
                                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                                </label>
                                                27/01/1996
                                            </li>
                                            <li>
                                                <label>
                                                    Age:
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                </label>
                                                25
                                            </li>
                                            <li>
                                                <label>
                                                    City:
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                </label>
                                                Cairo, Egypt
                                            </li>
                                            <li>
                                                <label>
                                                    Intersts:
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                </label>
                                                Reading, Chess
                                            </li>
                                        </Col>
                                        <Col sm md={6} lg={6}>
                                            <li>
                                                <span>
                                                    <label>
                                                        Study:
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    </label>
                                                    Akhbar Alyoum Academy
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    <label>
                                                        Degree: &nbsp;&nbsp;
                                                    </label>
                                                    BSc. in computer science
                                                </span>
                                            </li>

                                            <li>
                                                <span>
                                                    <label>
                                                        Mail:
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    </label>
                                                    abduallahmohamed066@gmail.com
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    <label>
                                                        Phone:
                                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                                    </label>
                                                    (+202)01204484436
                                                </span>
                                            </li>
                                        </Col>
                                    </Row>
                                </ul>
                                <div className="About-buttons">
                                    <Row id="About-buttons">
                                        <Col sm md={6} lg={6}>
                                            <a
                                                className="btn-a mutualbtn"
                                                href="./Abdallah2.pdf"
                                                download
                                            >
                                                Download CV
                                            </a>
                                        </Col>

                                        <Col sm md={6} lg={6}>
                                            {/* <button className="btn mutualbtn">
                                                <a
                                                    href="#contact"
                                                    style={{
                                                        width: "100%",
                                                        height: "100%",
                                                    }}
                                                >
                                                    Send Message
                                                </a>
                                            </button> */}

                                            <a
                                                className="btn-a"
                                                href="#contact"
                                            >
                                                Send Me a Message
                                            </a>
                                        </Col>
                                    </Row>
                                </div>
                            </Fade>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
