import React from "react";
import { Link } from "react-router-dom";
import "./styles/footbar.css";

function NavBar() {
    return (
        <nav>
            <div className="footbar">
                <div className="logo-section">
                    <img
                        className="logo"
                        src=" https://drive.google.com/thumbnail?id=1U4CVwgL9seUvaw_1TCoiSh9iDUjcUHL9"
                        alt="LOGO"
                    />
                </div>

                {/* add logos leading to socials */}
                <div className="link-section">
                    <Link to="/search" className="navbar-links">
                        social
                    </Link>
                    <Link to="/signin" className="navbar-links">
                    icons
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
