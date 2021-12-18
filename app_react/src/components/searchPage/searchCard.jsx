import React from "react";
import SearchResults from "../searchResultsPage/searchResults";
import { Link } from "react-router-dom";

function SearchCard({ label }) {
    console.log(label);

    const [isShow, setIsShow] = React.useState(true);

    const handleClick = () => {
        setIsShow(!isShow);
    };

    if (!isShow) {
        return (
            <div className={label}>
                {/*<div className="location-image-container">
        <img src={Image} alt="" className="location-image" />
</div>*/}
                <SearchResults />

                <div className="category-info-container">
                    <button className="category-name" onClick={handleClick}>
                        {label}
                    </button>
                </div>
            </div>
        );
    } else {
        return (
            <div className={label}>
                {/*<div className="location-image-container">
            <img src={Image} alt="" className="location-image" />
    </div>*/}
                <div className="category-info-container">
                    <button className="category-name" onClick={handleClick}>
                        {label}
                    </button>
                </div>
            </div>
        );
    }
}

export default SearchCard;
