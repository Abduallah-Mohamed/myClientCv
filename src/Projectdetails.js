import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "./styles/Projectdetails.css";

export default class Projectdetails extends Component {
    render() {
        const { img, heading, desc, url } = this.props;
        return (
            <div>
                <Card style={{ width: "18rem" }} className="Prodetails">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{heading}</Card.Title>
                        <Card.Text>{desc}</Card.Text>
                        <a variant="primary" href={url}>
                            {heading}
                        </a>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
