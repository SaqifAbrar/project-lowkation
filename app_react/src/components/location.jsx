import React, { Component } from "react";
import LocationData from "./locationData";
import axios from "axios";

class Location extends Component {
    state = {
        locationArray: [],
    };

    componentDidMount() {
        console.log("mounted");
        axios.get("/api").then((res) => {
            console.log(res);
            this.setState({ locationArray: res.data }, () => {
                console.log("Successfully set stated");
            });
        });
    }

    render() {
        return (
            <div>
                <LocationData locationArray={this.state.locationArray} />
            </div>
        );
    }
}

export default Location;

//array displays location data location name
