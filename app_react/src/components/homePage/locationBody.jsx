import React, { Component } from "react";
import LocationRow from "./locationRow";
import Locations from "../../temp/locations.json";
import axios from "axios";

class LocationBody extends Component {
    constructor() {
        super();
        this.state = {
            locations: [],
        };
    }

    componentDidMount() {
        console.log("mounted");
        axios.get("/api").then((res) => {
            console.log(res);
            this.setState({ locations: res.data }, () => {
                console.log("Successfully set stated");
            });
        });
    }

    render() {
        const { locations } = this.state;
        return (
            <div className="location-body-container">
                <LocationRow locations={locations} />
            </div>
        );
    }
}

export default LocationBody;
