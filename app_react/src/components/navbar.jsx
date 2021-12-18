import React from "react";
import { Link } from "react-router-dom";
import "./styles/navbar.css";

function NavBar() {
    return (
        <nav>
            <div className="navbar">
                {/* make a div for pic - 70%, div for links - 30% */}
                <div className="logo-section">
                    {/* <a href="/home"/> */}
                    {/* <Link to="/home" className="navbar-links"/> */}
                    <img
                        className="logo"
                        src=" https://drive.google.com/thumbnail?id=1Ehc2G0_ScgvhFWMNiXVX4y6vcEinekLR"
                        alt="LOGO"
                    />
                </div>
                <div className="link-section">
                    <Link to="/search" className="navbar-links">
                        SEARCH
                    </Link>
                    <Link to="/signin" className="navbar-links">
                        SIGN IN
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
