import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./styles/navbar.css";

function NavBar() {
    return (
        <nav>
            <div className="navbar">

                <div className="logo-section">
                    <NavLink to="/newpage" className="navbar-links">
                        <img
                            className="logo"
                            src=" https://drive.google.com/thumbnail?id=1Ehc2G0_ScgvhFWMNiXVX4y6vcEinekLR"
                            alt="LOGO"
                        />
                    </NavLink>
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
