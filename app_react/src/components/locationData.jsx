import React from "react";

function LocationData({ locationArray }) {
    return (
        <div>
            {locationArray.map((place) => {
                return (
                    <div key={place.id}>
                        <p>{place.name}</p>
                        <p>{place.location}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default LocationData;
