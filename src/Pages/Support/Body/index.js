import React, { useState } from "react";
import "./styles.css";
import Footer from "./Footer";
import Marquee from "react-fast-marquee";

const Body = () => {
    const sendMail = () => {
        var name = document.getElementById("support-name").value;
        var email = document.getElementById("support-email").value;
        var message = document.getElementById("support-message").value;
        window.location.href = 'mailto:info@thehummingbird.network?subject=The subject - ' + name + ' (' + email + ')' + '&body=' + message;
    };

    return (
        <div className="web-support-body w-100">
            <div className="support-questions">
                <div className="support-question">
                    <p className="support-question-title">
                        FREQUENTLY ASKED QUESTIONS
                    </p>
                </div>
                <div className="support-question">
                    <p className="support-question-text">
                        need to change booking date?
                    </p>
                    <p className="support-question-desc">
                        While bookings are non-refundable, you may be eligible to reschedule. Please contact our support team at least 48 hours before your scheduled appointment to discuss your options
                    </p>
                </div>
                <div className="support-question">
                    <p className="support-question-text">
                        Discounts/<br />promotions?
                    </p>
                    <p className="support-question-desc">
                        We occasionally offer promotions and discounts. Please subscribe to our newsletter or follow us on social media to stay updated on special offers.
                    </p>
                </div>
                <div className="support-question">
                    <p className="support-question-text">
                        prepare for the thb session?
                    </p>
                    <p className="support-question-desc">
                        Once your booking is confirmed, you'll receive a preparation guide via email. It includes all the details you'll need to know about your session, including what to bring and how to prepare.
                    </p>
                </div>
                <div className="support-question">
                    <p className="support-question-text">
                        prepare for the thb session?
                    </p>
                    <p className="support-question-desc">
                        Once your booking is confirmed, you'll receive a preparation guide via email. It includes all the details you'll need to know about your session, including what to bring and how to prepare.
                    </p>
                </div>
            </div>
            <div className="support-float-text">
                <Marquee>
                    <p className="float-text-p"><span style={{fontWeight: 700}}>Booking Cancellation Policy:</span> The Hummingbird Network committed to providing unparalleled music production experience. Please note that all bookings are <span style={{fontWeight: 700}}>non-refundable</span>. </p>
                </Marquee>
            </div>
            <div className="support-content">
                <img className="support-content-bg" src="/img/supportbg.png" />
                <div className="support-content-holder">
                    <img className="support-content-contact" src="/img/support-contact.png" />
                    <img className="support-content-logo" src="/img/support-logo.png" />
                    <input placeholder="Name" type="name" id="support-name" className="support-input"/>
                    <input placeholder="Email*" type="email" id="support-email" className="support-input" />
                    <input placeholder="Message" type="message" id="support-message" className="support-input" />
                    <div className="support-button" onClick={sendMail}>
                        <span className="support-button-text">SEND</span>
                        <img className="support-button-img" src="/img/support-button-img.png" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Body;