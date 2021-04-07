import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./styles/Contact.css";

import axios from "axios";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            phone: "",
            message: "",
            sent: false,
        };
        this.handleName = this.handleName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
        this.handleMessage = this.handleMessage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Handle Inputs
    handleName(e) {
        console.log(e.target.name);
        this.setState({ name: e.target.value });
    }

    handleEmail(e) {
        this.setState({ email: e.target.value });
    }

    handlePhone(e) {
        this.setState({ phone: e.target.value });
    }

    handleMessage(e) {
        this.setState({ message: e.target.value });
    }
    // End of Handling inputs

    // handling on submit
    handleSubmit(e) {
        e.preventDefault();

        // data that to be sent with axios
        let data = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            message: this.state.message,
        };

        axios
            .post("/api/forma", data)
            .then(this.setState({ sent: true }, this.resetForm()))
            .catch(() => {
                console.log("message not sent for porpuses reasons");
            });
    }

    // reset the form
    resetForm() {
        this.setState({
            name: "",
            email: "",
            phone: "",
            message: "",
        });

        setTimeout(() => {
            this.setState({ sent: false });
        }, 3000);
    }

    render() {
        return (
            <section className="Contact" id="contact">
                <Container>
                    <Row>
                        <Col sm md={12} lg={12} className="Contact-heading">
                            <h1>CONTACT ME</h1>
                            <p>Get in touch with me</p>
                        </Col>
                    </Row>
                    <br />
                    <br />
                    <br />
                    <br />
                    <Row>
                        <Col sm={12} md={12} lg={6}>
                            <h3>Get In Touch</h3>
                            <br />
                            <ul>
                                <li>
                                    <label>Address: &nbsp;</label>
                                    Helwan - Cairo - Egypt
                                </li>

                                <li>
                                    <label>Email: &nbsp;</label>
                                    abduallahmohamed966@gmail.com
                                </li>

                                <li>
                                    <label>Phone: &nbsp;</label>
                                    (+202)01204484436
                                </li>
                            </ul>
                        </Col>
                        <Col sm={12} md={12} lg={6}>
                            <form id="contact" onSubmit={this.handleSubmit}>
                                <fieldset>
                                    <input
                                        placeholder="Your name"
                                        type="text"
                                        tabIndex="1"
                                        required
                                        autoFocus
                                        name="username"
                                        value={this.state.username}
                                        onChange={this.handleName}
                                    />
                                </fieldset>
                                <fieldset>
                                    <input
                                        placeholder="Your Email Address"
                                        type="email"
                                        tabIndex="2"
                                        required
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.handleEmail}
                                    />
                                </fieldset>
                                <fieldset>
                                    <input
                                        placeholder="Your Phone Number (optional)"
                                        type="tel"
                                        tabIndex="3"
                                        name="phone"
                                        value={this.state.phone}
                                        onChange={this.handlePhone}
                                    />
                                </fieldset>

                                <fieldset>
                                    <textarea
                                        placeholder="Type your message here...."
                                        tabIndex="5"
                                        required
                                        name="message"
                                        value={this.state.message}
                                        onChange={this.handleMessage}
                                    ></textarea>
                                </fieldset>
                                <fieldset>
                                    <div
                                        className={
                                            this.state.sent
                                                ? "success"
                                                : "faild"
                                        }
                                    >
                                        {/* {console.log(this.state.sent)} */}
                                        Message Sent Successfully
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <button
                                        name="submit"
                                        type="submit"
                                        id="contact-submit"
                                        data-submit="...Sending"
                                    >
                                        Submit
                                    </button>
                                </fieldset>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Contact;
