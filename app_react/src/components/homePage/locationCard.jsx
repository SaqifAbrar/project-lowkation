import React from "react";
import "./styles/locationCard.css";

const LocationCard = ({ place }) => {
    return (
        <div className="location-card top-locations">
            <p className="location-name">{place.name}</p>
            <p className="location-place">{place.location}</p>
        </div>
    );
};

export default LocationCard;
