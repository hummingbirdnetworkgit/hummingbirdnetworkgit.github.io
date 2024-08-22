import React from "react";
import { isMobile } from "react-device-detect";
import "./styles.css";

const SlideShow = () => {
    const iWidth = isMobile ? "280" : "420";
    const iHeight = isMobile ? "200" : "315";
 
    return (
        <div className="slide-show position-relative">
            <div className="slide-show-top position-absolute w-100 left-0">
            </div>
            <div className="slide-item">
                <iframe width={iWidth} height={iHeight} src="https://www.youtube.com/embed/wASH111mKj4?si=ZdAQLd2OF4uJ0dUP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <span className="slide-item-desc">
                    <span className="slide-item-desc-title">TheHummingbirdNetwork </span>
                    Meet our new artist: 3ee
                </span>
            </div>
            <div className="slide-item">
                <iframe width={iWidth} height={iHeight} src="https://www.youtube.com/embed/QGVVZ0ULZ2o?si=FPGkyDZFH04G-JWj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <span className="slide-item-desc">
                    <span className="slide-item-desc-title">TheHummingbirdNetwork </span>
                    Meet our new artist: G2
                </span>
            </div>
            <div className="slide-item">
                <iframe width={iWidth} height={iHeight} src="https://www.youtube.com/embed/xLUYgisqh3c?si=c6vELjnY6mDPOfEM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <span className="slide-item-desc">
                    <span className="slide-item-desc-title">TheHummingbirdNetwork </span>
                    Meet our new artist: Keemapatra
                </span>
            </div>
            <div className="slide-item">
                <iframe width={iWidth} height={iHeight} src="https://www.youtube.com/embed/MqG6buwSb80?si=PGTrFZMEJpI9B5wa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <span className="slide-item-desc">
                    <span className="slide-item-desc-title">TheHummingbirdNetwork </span>
                    Meet our new artist: Luh Brazy
                </span>
            </div>
            <div className="slide-item">
                <iframe width={iWidth} height={iHeight} src="https://www.youtube.com/embed/Udh87vmc-Yg?si=VF32RyNVTFCwcqXI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <span className="slide-item-desc">
                    <span className="slide-item-desc-title">TheHummingbirdNetwork </span>
                    Meet our new artist: JAE WOLFSBANE
                </span>
            </div>
            <div className="slide-item">
                <iframe width={iWidth} height={iHeight} src="https://www.youtube.com/embed/NbKB3OAEjno?si=lSOCGXykudbwsd6c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <span className="slide-item-desc">
                    <span className="slide-item-desc-title">TheHummingbirdNetwork </span>
                    Meet our new artist: GhosTMG
                </span>
            </div>
            <div className="slide-item">
                <iframe width={iWidth} height={iHeight} src="https://www.youtube.com/embed/UOB8w2OYZYI?si=0KhSyc5TyQtT2v1J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <span className="slide-item-desc">
                    <span className="slide-item-desc-title">TheHummingbirdNetwork </span>
                    Meet our new artist: Chris Col.
                </span>
            </div>
            <div className="slide-item">
                <iframe width={iWidth} height={iHeight} src="https://www.youtube.com/embed/MNyS8DWlFVs?si=02FhnLafyjdW9Qr5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <span className="slide-item-desc">
                    <span className="slide-item-desc-title">TheHummingbirdNetwork </span>
                    Meet our new artist: Zzqc_Jessie
                </span>
            </div>
        </div>
    )
}

export default SlideShow;