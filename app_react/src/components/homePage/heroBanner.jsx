import React from "react";
import "./styles/herobanner.css";

function HeroBanner() {
    return (
        <div className="hero-banner-container">
            <div className="hero-banner-wrapper">
                <img
                    className="skyline"
                    src=" https://drive.google.com/thumbnail?id=1sQXpOQhqGXnDQ3qQvPS2o6ThqgwVMTW7"
                    alt="skyline"
                />

                <img
                    className="heroBanner"
                    src=" https://drive.google.com/thumbnail?id=AjWsLbsinNCuYRDbfegMIQRo6NitwXs5"
                    alt="heroBanner"
                />
                <h1>This is the landing page</h1>
            </div>
        </div>
    );
}

export default HeroBanner;
