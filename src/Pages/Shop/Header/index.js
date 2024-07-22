import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => {
    return (
        <div className="web-header">
            <div className="web-header-logo">
                <Link className="web-header-logo-container" to="/"><img className="web-header-logo-img" src="img/hblogo.svg" /></Link>
            </div>
            <div className="web-header-menu">
                <div className="web-header-menu-item">
                    <Link className="web-header-menu-link" to="/project">Project.</Link>
                </div>
                <div className="web-header-menu-item">
                    <Link className="web-header-menu-link" to="/service">Service.</Link>
                </div>
                <div className="web-header-menu-item">
                    <Link className="web-header-menu-link" to="/shop">Shop.</Link>
                </div>
                <div className="web-header-menu-item">
                    <Link className="web-header-menu-link" to="/support">Support.</Link>
                </div>
                <div className="web-header-menu-item">
                    <Link className="web-header-menu-link" to="/about">About.</Link>
                </div>
            </div>
        </div>
    )
}

export default Header;