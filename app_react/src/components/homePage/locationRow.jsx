import React from "react";
import LocationCard from "./locationCard";
import "./styles/locationRow.css";

const LocationRow = ({ locations, label, header }) => {
    const className = header ? "-header" : "";
    console.log(label + className);
    return (
        <div className="location-row-container">
            <p className={"row-header " + label + className}>{header}</p>
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
