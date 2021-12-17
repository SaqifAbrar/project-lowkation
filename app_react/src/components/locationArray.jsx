import React from "react";

function LocationArray({ locationArray }) {
    return (
        <div>
            {locationArray.map((place) => {
                <div key={place.id}>
                    <p>{place.name}</p>
                    <p>{place.location}</p>
                </div>;
            })}
        </div>
    );
}

export default LocationArray;
