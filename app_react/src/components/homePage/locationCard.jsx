import React from "react";
import Image from "../../temp/test.jpeg";
import "./styles/locationCard.css";

const LocationCard = ({ place, label }) => {
    console.log(label);
    return (
        <div className={"location-card " + label}>
            <div className="location-image-container">
                <img src={Image} alt="" className="location-image" />
            </div>
            <div className="location-info-container">
                <p className="location-name">{place.name}</p>
                <p className="location-place">{place.location}</p>
            </div>
        </div>
    );
};

export default LocationCard;
