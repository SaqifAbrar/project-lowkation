import React from "react";
import "./styles/herobanner.css";

function HeroBanner() {
    return (
        <div className="hero-banner-container">
            <div className="hero-banner-wrapper">
                <div className="hero-underlay">
                    <img
                        className="skyline"
                        src=" https://drive.google.com/thumbnail?id=1lWs9BdiA9jPehKblw7aMwVcIYyRof1nW"
                        alt="skyline"
                    />
                </div>
                <div className="hero-overlay">
                    <div className="hero-overlay-wrapper">
                        <div className="bg-ping">
                            <img
                                className="mapping"
                                src=" https://drive.google.com/thumbnail?id=1XLGpEUn8tziN5kmRLQoV0mIENgXL81mE"
                                alt="Map Ping"
                            />
                        </div>
                        <div className="title-desc">
                            <h1 className="hero-title">
                                GateKeeping LowKations 101
                            </h1>
                            <div className="description">
                                <p className="intro-para">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. In imperdiet sem a accumsan
                                    varius. Sed id laoreet sapien, ut
                                    scelerisque elit. Mauris rutrum felis arcu,
                                    ut efficitur quam rutrum facilisis. Duis
                                    euismod justo cu consectetur scelerisque.
                                    Praesent aliquam ut arcu a faucibus.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="skyline-break">
                    <img
                        className="white-skyline"
                        src=" https://drive.google.com/thumbnail?id=1pqGBPvJrXj11HlLHJ8FUvoeuBEhmijnx"
                        alt="White CIty Skyline"
                    />
                </div>
            </div>
        </div>
    );
}

export default HeroBanner;
