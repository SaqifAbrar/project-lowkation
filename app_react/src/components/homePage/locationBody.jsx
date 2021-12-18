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
        axios.get("/api/locations").then((res) => {
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
                <LocationRow locations={locations} label={"top-locations"} />
                <LocationRow
                    locations={locations}
                    label={"recommended-locations"}
                />
                <LocationRow locations={locations} label={"viewed-locations"} />
            </div>
        );
    }
}

export default LocationBody;
