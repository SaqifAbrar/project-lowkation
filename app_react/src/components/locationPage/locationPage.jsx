import React from "react";
import LowkationMap from "./lowkationMap";
import TestImage from "../../temp/tag-test.jpg";
//import LocationTable from "./locationTable";
import "./styles/locationPage.css";

const LocationPage = ({ location }) => {
    return (
        <div className="location-page-container">
            <div className="images-gallery">
                <img className="gallery-image" src={TestImage} alt="" />
            </div>
            <div className="location-info">
                <div className="title-container">
                    <div className="title-header">
                        <p className="location-title text">Title</p>
                    </div>
                    <div className="interactions">
                        <p className="save text">Save</p>
                        <p className="likes text">Likes</p>
                    </div>
                </div>
                <p className="location-address text">address</p>
                <p className="overview text">Overview</p>
                <p className="location-description"></p>
                <div className="map-container">
                    <LowkationMap />
                </div>
                <p className="location-history text">History</p>
                <p className="history-description"></p>
            </div>
        </div>
    );
};

export default LocationPage;
