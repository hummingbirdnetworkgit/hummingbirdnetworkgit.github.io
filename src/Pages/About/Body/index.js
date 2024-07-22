import React, { useState } from "react";
import "./styles.css";
import Footer from "./Footer";

const Body = () => {

    return (
        <div className="web-about-body w-100">
            <div className="about-first w-100">
                <img className="about-bg w-100" src="/img/aboutbg.png" />
                <img className="about-logo" src="/img/aboutlogo.png" />
                <img className="about-people" src="/img/aboutpeople.png" />
            </div>
            <div className="about-second w-100">
                <img className="about-floor" src="/img/aboutfloor.png" />
            </div>
            <Footer />
        </div>
    )
}

export default Body;