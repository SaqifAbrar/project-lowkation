import React from "react";
import LocationCard from "./locationCard";
import "./styles/locationRow.css";

const LocationRow = ({ locations }) => {
    console.log(locations);
    return (
        <div className="location-row-container">
            <div className="location-row-wrapper">
                {locations.map((location) => {
                    return <LocationCard key={location.id} place={location} />;
                })}
            </div>
        </div>
    );
};

export default LocationRow;
