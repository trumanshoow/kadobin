import React from "react";
import Slider from "react-slick";
import styles from "./slider.module.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SimpleSlider = ({children}) => {
    const settings = {
        rtl: true,
        speed: 500,
        className: styles.slider
    };
    return (
        <div style={{width: "100%"}}>
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    );
}
export default SimpleSlider;