import React from "react";
import "./styles/herobanner.css";

function HeroBanner() {
    return (
        <div className="hero-banner-container">
            <div className="hero-banner-wrapper">
                <img
                    className="skyline"
                    src=" https://drive.google.com/thumbnail?id=15JxvAGMAKTI9H-_lWCQsRMH2M_ckTVEC"
                    alt="skyline"
                />

                <img
                    className="mapping"
                    src=" https://drive.google.com/thumbnail?id=1AjWsLbsinNCuYRDbfegMIQRo6NitwXs5"
                    alt="Map Ping"
                />
                <h1>GateKeeping LowKations 101</h1>
            </div>
        </div>
    );
}

export default HeroBanner;
