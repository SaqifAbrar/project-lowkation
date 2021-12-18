import React from "react";
import SearchResultsCard from "./searchResultsCard";
import "./styles/searchResultsRow.css";

function SearchResultsRow({ locations, label }) {
    return (
        <div className="searchResults-row-container">
            <p className="row-label">{label}</p>
            <div className="searchResults-row-wrapper">
                {locations.map((location) => {
                    return (
                        <SearchResultsCard
                            key={location.id}
                            place={location}
                            label={label}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default SearchResultsRow;
