import React from "react";
import LocationCard from "../common/locationCard";
import "./styles/locationRow.css";

const LocationRow = ({ locations, label }) => {
    return (
        <div className="location-row-container">
            <p className="row-label">{label}</p>
            <div className="location-row-wrapper">
                {locations.map((location) => {
                    return (
                        <LocationCard
                            key={location.id}
                            place={location}
                            label={label}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default LocationRow;
