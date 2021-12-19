import React from "react";

function SearchCard({ place, label }) {
    console.log(label);
    return (
        <div className={"search-card " + label}>
            {/*<div className="location-image-container">
                <img src={Image} alt="" className="location-image" />
    </div>*/}
            <div className="search-info-container">
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
}

export default SearchCard;
