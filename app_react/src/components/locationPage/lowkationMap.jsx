import React, { Component } from "react";
import "./styles/lowkationMap.css";

class LowkationMap extends Component {
    componentDidMount() {
        this.renderMap();
    }

    initMap = () => {
        const map = new window.google.maps.Map(document.getElementById("map"), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8,
        });
    };

    renderMap = () => {
        const apiKey = process.env.REACT_APP_API_KEY;
        const apiURL = process.env.REACT_APP_API_URL;

        console.log(apiKey);

        loadScript(
            `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`
        );
        window.initMap = this.initMap;
    };

    render() {
        return (
            <main>
                <div id="map"></div>
            </main>
        );
    }
}

function loadScript(url) {
    const index = window.document.getElementsByTagName("script")[0];
    var script = window.document.createElement("script");
    script.src = url;
    script.async = true;
    script.defer = true;
    index.parentNode.insertBefore(script, index);
}

export default LowkationMap;
