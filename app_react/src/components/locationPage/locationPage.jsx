import React from "react";
import LowkationMap from "./lowkationMap";

const LocationPage = ({ location }) => {
    return (
        <div className="location-page-container">
            <div className="images-gallery"></div>
            <div className="location-info">
                <div className="location-title-container">
                    <div className="title-container">
                        <p className="location-title"></p>
                    </div>
                    <div className="interactions-container">
                        <p className="save"></p>
                        <p className="likes"></p>
                    </div>
                    <p className="location-address">lorem ipsum</p>
                    <p className="overview">Overview</p>
                    <p className="location-description"></p>
                    <div className="map-container">
                        <LowkationMap />
                    </div>
                    <p>History</p>
                    <p className="location-address">lorem ipsum</p>
                </div>
            </div>
        </div>
    );
};

export default LocationPage;
