import React, { useState } from "react";
import "./styles.css";
import Footer from "./Footer";

const Body = () => {

    return (
        <div className="web-shop-body w-100">
            <div className="w-100 shop-comingsoon">
                <img className="shop-comingsoon-img w-100" src="/img/shopbg.png"></img>
                <div className="shop-comingsoon-text">
                    <p className="shop-comingsoon-desc">coming soon...</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Body;