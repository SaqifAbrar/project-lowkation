import React from "react";
import { Link } from "react-router-dom";
import "./styles/footbar.css";

function FootBar() {
    return (
        <nav className="footbar">
            <div className="footbar">
                <Link to="/home" className="navbar-brand">
                    GateKeep tm
                </Link>
            </div>
        </nav>
    );
}

export default FootBar;
