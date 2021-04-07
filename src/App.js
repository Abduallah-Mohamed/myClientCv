import React, { Component } from "react";
import TopNavbar from "./TopNavbar";
import Home from "./Home";
import About from "./About";
import Ability from "./Ability";
import Services from "./Services";
import Projects from "./Projects";
import Sidebar from "./Sidebar";
import Contact from "./Contact";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BounceLoader from "react-spinners/BounceLoader";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            isLoading: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.setState({ isLoading: true }, () => {
            console.log("inside the com");
            setTimeout(() => this.setState({ isLoading: false }), 5000);
        });
    }

    handleClick() {
        if (this.state.isOpen) {
            this.setState({ isOpen: false });
        } else {
            this.setState({ isOpen: true });
        }
    }
    render() {
        let button;
        if (this.state.isOpen) {
            button = (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-arrow-left-square-fill"
                    viewBox="0 0 16 16"
                >
                    <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z" />
                </svg>
            );
        } else {
            button = (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-arrow-right-square-fill"
                    viewBox="0 0 16 16"
                >
                    <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z" />
                </svg>
            );
        }
        const { isLoading } = this.state;
        return (
            <div className={isLoading ? "isLoading" : "App"}>
                {isLoading ? (
                    <BounceLoader
                        color={"#e3872d"}
                        loading={isLoading}
                        size={150}
                    />
                ) : (
                    <div>
                        <div
                            onClick={this.handleClick}
                            id="svg"
                            className={`${
                                this.state.isOpen ? "handle_button_place" : ""
                            }`}
                        >
                            {button}
                        </div>
                        <div className="displayNavbar">
                            <TopNavbar />
                        </div>
                        <Home />
                        <About />
                        <Ability />
                        <Services />
                        <Projects />
                        <Contact />
                        <div className="displaySidebar">
                            <Sidebar isOpen={this.state.isOpen} />
                        </div>
                    </div>
                )}
            </div>
        );
    }
}
