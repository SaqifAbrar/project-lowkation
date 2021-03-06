import React from "react";
import { Link } from "react-router-dom";
import Image from "../../temp/test.jpeg";
import TagBadge from "./tagBadge";
import "./locationCard.css";

const LocationCard = ({ place, label }) => {
    console.log(label);
    return (
        <Link to="/location" className={"location-card " + label}>
            <div className="location-image-container">
                <img src={Image} alt="" className="location-image" />
            </div>
            <div className="location-info-container">
                <p className="location-name">{place.name}</p>
                <p className="location-address">{place.address}</p>
                <p className="location-description">{place.description}</p>
                <div className="location-tag-container">
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
                </div>
            </div>
        </Link>
    );
};

export default LocationCard;
