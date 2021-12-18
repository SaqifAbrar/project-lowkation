import React, { Component } from "react";
import HeroBanner from "./heroBanner";
import LocationBody from "./locationBody";

class Landing extends Component {
    render() {
        return (
            <div>
                {/*<Link to="/home"></Link>*/}
                <HeroBanner />
                <LocationBody />
            </div>
        );
    }
}

export default Landing;
