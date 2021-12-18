import React from "react";
import LocationCard from "../common/locationCard";

const SearchTable = ({ locations, label }) => {
    return (
        <div className="search-row-container">
            <p className="row-label">{label}</p>
            <div className="search-row-wrapper">
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

export default SearchTable;

// if search state is not empty, then you will render this
// map all locations here
