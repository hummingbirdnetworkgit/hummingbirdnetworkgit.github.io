import React, { useState } from "react";
import "./styles.css";
import Footer from "./Footer";

const Body = () => {

    return (
        <div className="web-article-body w-100">
            <div className="w-100 web-comingsoon">
                <img className="web-comingsoon-img w-100" src="/img/comingsoon.png"></img>
                <div className="web-comingsoon-text">
                    <p className="web-comingsoon-desc">coming soon...</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Body;