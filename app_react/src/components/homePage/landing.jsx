import React, { Component } from "react";
import HeroBanner from "./heroBanner";
import LocationBody from "./locationBody";
import "./styles/landing.css";
import "./styles/locationRow.css";

class Landing extends Component {
    render() {
        return (
            <div className="landing-body-container">
                {/*<Link to="/home"></Link>*/}
                <HeroBanner />
                <LocationBody />
            </div>
        );
    }
}

export default Landing;
