import React, { useState } from "react";
import "./styles.css";
import Footer from "./Footer";

const Body = () => {

    return (
        <div className="web-service-body w-100">
            <iframe src="https://app.acuityscheduling.com/schedule.php?owner=32939124&ref=embedded_csp" title="Schedule Appointment" width="100%" height="800" frameBorder="0"></iframe><script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script>
            <Footer />
        </div>
    )
}

export default Body;