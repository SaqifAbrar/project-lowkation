import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "./navbar";

class Landing extends Component {
    render() {
        return (
            <div>
                <Link to="/home"></Link>
                <NavBar />
                <h1>This is the landing page</h1>
            </div>
        );
    }
}

export default Landing;
