import React, { Component } from "react";
import LocationRow from "./locationRow";
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
                console.log("Successfully setted state");
            });
        });
    }

    render() {
        const { locations } = this.state;
        return (
            <div className="location-body-container">
                <LocationRow
                    locations={locations}
                    label={"top-locations"}
                    header={"TOP LOWKATIONS OF THE MONTH"}
                />
                <LocationRow
                    locations={locations}
                    label={"recommended-locations"}
                    header={"RECOMMENDED LOWKATIONS"}
                />
                <LocationRow
                    locations={locations}
                    label={"viewed-locations"}
                    header={"RECENTLY VIEWED LOWKATIONS"}
                />
            </div>
        );
    }
}

export default LocationBody;
