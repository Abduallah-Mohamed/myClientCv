import React, { Component } from "react";
import me from "./13055946_1710555015868324_6952085645705279428_o.jpg";
import "./styles/Home.css";
import Zoom from "react-reveal/Zoom";
import Typical from "react-typical";

export default class Home extends Component {
    render() {
        return (
            <div className="Home" id="home">
                <div id="overlay" />
                <Zoom top cascade>
                    <div className="Home-fix">
                        <img
                            className="Home-img"
                            src={me}
                            alt="Abduallah Mohamed"
                        />

                        <h1>Abduallah Mohamed</h1>
                        <p id="typing">
                            I'm a{" "}
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
                        </p>
                    </div>
                </Zoom>
            </div>
        );
    }
}
