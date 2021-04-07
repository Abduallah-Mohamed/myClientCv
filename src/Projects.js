import React, { Component } from "react";
import Projectdetails from "./Projectdetails";
import colors from "./images/Colors.png";
import lights from "./images/Lights.png";
import dadjokes from "./images/Dadjokes.png";
import darkmode from "./images/DarkMode.png";
import playmusic from "./images/Playmusic.png";
import responsivedesign from "./images/ResponiveDesign.png";
import devcamper from "./images/devcamper.png";
import navAnimatedd from "./images/navAnimatedd.png";
import yahtzee from "./images/Yahtzee.png";
import { Row, Col, Container } from "react-bootstrap";
import "./styles/Projects.css";
import Slide from "react-reveal/Slide";

const pro = [
    {
        img: devcamper,
        heading: "Devcamper API",
        URL: "https://documenter.getpostman.com/view/10906004/TzCJgVTQ",
        desc:
            "Devcamper is a backend - it can be used with a front-end e-commerce API or bootcamps api, or any other similar front-end APIs.",
    },
    {
        img: colors,
        heading: "Colors Projects",
        URL: "https://awsomecolorapp.herokuapp.com/",
        desc:
            "The Big Color Project Ever, Get all color shades, Create palletes with any colors you want",
    },
    {
        img: dadjokes,
        heading: "Dad Jokes",
        URL: "https://jokesofdad.herokuapp.com/",
        desc:
            "Get Random 10 Jokes every fetch, Vote for any jokes, the most voted Joke will be on the top.",
    },
    {
        img: yahtzee,
        heading: "Yhatzee Game",
        URL: "https://yahtzeegame.herokuapp.com/",
        desc: "Play the yahtzee game live now.",
    },
    {
        img: playmusic,
        heading: "Music Player",
        URL: "https://abduallah-mohamed.github.io/Audio-Palyer/",
        desc: "Online Music Player Functionality.",
    },
    {
        img: darkmode,
        heading: "Dark Mode Website",
        URL: "https://abduallah-mohamed.github.io/Light-Dark-Mode/",
        desc: "Implement a single a dark mode on this website",
    },
    {
        img: responsivedesign,
        heading: "Barber Shop",
        URL: "https://abduallah-mohamed.github.io/Barber-Shop/",
        desc: "Responsive design for Barber shop.",
    },
    {
        img: lights,
        heading: "Lights Up Game",
        URL: "https://gameoflights.herokuapp.com/",
        desc: "Light All lights off to WIN!!! ",
    },
    {
        img: navAnimatedd,
        heading: "Simlpe Animation Nav",
        URL: "https://abduallah-mohamed.github.io/Animate-Navigation/",
        desc: "Animated Navbar Useful for all uses for any website.",
    },
];

export default class Projects extends Component {
    render() {
        const results = pro.map((val, index) => {
            return (
                <Projectdetails
                    img={val.img}
                    heading={val.heading}
                    url={val.URL}
                    desc={val.desc}
                    key={index}
                />
            );
        });

        return (
            <section className="Projects" id="portoflio">
                <Container>
                    <Slide right>
                        <Row>
                            <Col>
                                <div className="border-header">
                                    <h1>CREATIVE WORKS</h1>
                                    <p>
                                        Check out a sample of my creative works
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Slide>
                    <Slide bottom>
                        <Row id="first-row">
                            {/* Cards goes here */}
                            <Col sm={12} md={12} lg={4} className="col">
                                {results[0]}
                            </Col>
                            <Col sm={12} md={12} lg={4} className="col">
                                {results[1]}
                            </Col>
                            <Col sm={12} md={12} lg={4} className="col">
                                {results[2]}
                            </Col>
                        </Row>
                        {/* &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; */}
                        <Row id="second-row">
                            {/* Cards goes here */}
                            <Col sm={12} md={12} lg={4} className="col">
                                {results[3]}
                            </Col>
                            <Col sm={12} md={12} lg={4} className="col">
                                {results[4]}
                            </Col>
                            <Col sm={12} md={12} lg={4} className="col">
                                {results[5]}
                            </Col>
                        </Row>
                        {/* &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; */}
                        <Row id="third-row">
                            {/* Cards goes here */}
                            <Col sm={12} md={12} lg={4} className="col">
                                {results[6]}
                            </Col>
                            <Col sm={12} md={12} lg={4} className="col">
                                {results[7]}
                            </Col>
                            <Col sm={12} md={12} lg={4} className="col">
                                {results[8]}
                            </Col>
                        </Row>
                    </Slide>
                </Container>
            </section>
        );
    }
}
