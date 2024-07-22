import React from "react";
import './styles.css';

const Footer = () => {
    return (
        <div className="w-100 web-footer">
            <div className="web-footer-social">
                <a className="web-footer-social-link"><img className="web-footer-social-img" src="/img/icons/twittericon.png"></img></a>
            </div>
            <div className="web-footer-social">
                <a className="web-footer-social-link" target="_blank" href="https://www.youtube.com/@TheHummingbirdOfficial"><img className="web-footer-social-img" src="/img/icons/youtubeicon.png"></img></a>
            </div>
            <div className="web-footer-social">
                <a className="web-footer-social-link" target="_blank" href="https://www.instagram.com/thehummingbirdnetwork/"><img className="web-footer-social-img" src="/img/icons/instagramicon.png"></img></a>
            </div>
        </div>
    )
};

export default Footer;