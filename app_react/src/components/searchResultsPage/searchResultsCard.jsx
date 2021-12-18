import React from "react";
/*import Image from "../../temp/test.jpeg";
import TagBadge from "../styles/TagBadge";*/
import "./styles/searchResultsCard.css";

const SearchResultsCard = ({ place, label }) => {
    return (
        <div className={"searchResults-card " + label}>
            {/*<div className="location-image-container">
                <img src={Image} alt="" className="location-image" />
    </div>*/}
            <div className="searchResults-info-container">
                <p className="location-name">{place.name}</p>
                <p className="location-address">{place.address}</p>
                <p className="location-description">{place.description}</p>
                {/*<div className="location-tag-container">
                    {place.tags.map((tag) => {
                        return (
                            <TagBadge
                                tag={tag}
                                key={
                                    Date.now() +
                                    Math.floor(Math.random() * 100000)
                                }
                            />
                        );
                    })}
                </div>*/}
            </div>
        </div>
    );
};

export default SearchResultsCard;
