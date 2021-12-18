import React from "react";
import { Link } from "react-router-dom";
import "./styles/navbar.css";

function NavBar() {
    return (
        <nav>
            <div className="navbar">
                {/* Import the Logo */}

                <Link to="/search" className="navbar-links">
                    SEARCH
                </Link>
                <Link to="/signin" className="navbar-links">
                    SIGN IN
                </Link>
            </div>
        </nav>
    );
}

export default NavBar;
