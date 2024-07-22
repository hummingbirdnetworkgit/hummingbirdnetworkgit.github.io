import React from "react";
import "./styles.css";
import HBCarousel from "./HBCarousel";
import SlideShow from "./SlideShow";
import Footer from "./Footer";

const Body = () => {
    return (
        <div className="web-body">
            <HBCarousel />
            <SlideShow />
            <div className="web-partner">
                <div className="w-100 web-partner-title">
                    <span className="web-partner-title-a">OUR</span> <span className="web-partner-title-b">PARTNERS</span>
                </div>
                <div className="row mb-5">
                    <div className="col-2"></div>
                    <div className="col-4">
                        <img className="web-partner-img" src="/img/partner/partner1.png" />
                    </div>
                    <div className="col-2"></div>
                    <div className="col-4">
                        <img className="web-partner-img" src="/img/partner/partner1.png" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-3">
                        <img className="web-partner-img" src="/img/partner/partner1.png" />
                    </div>
                    <div className="col-1"></div>
                    <div className="col-3">
                        <img className="web-partner-img" src="/img/partner/partner1.png" />
                    </div>
                    <div className="col-1"></div>
                    <div className="col-3">
                        <img className="web-partner-img" src="/img/partner/partner1.png" />
                    </div>
                </div>
            </div>
            <div className="w-100 web-partner-transition"></div>
            <div className="w-100 web-comingsoon">
                <img className="web-comingsoon-img w-100" src="/img/comingsoon.png"></img>
                <div className="web-comingsoon-text">
                    <p className="web-comingsoon-title">AWARDS</p>
                    <p className="web-comingsoon-desc">coming soon...</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Body;