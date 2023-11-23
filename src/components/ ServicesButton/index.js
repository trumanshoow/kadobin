import React from 'react';
import Styles from "../../pages/home/home.module.css";

const ServicesButton = ({src ,text}) => {
    return (
        <>
            <div className={Styles.text_img_Wrapper}>
                <div className={Styles.boxes}>
                    <img src={src}/>
                </div>
                <span>{text}</span>
            </div>
        </>
    );
};

export default ServicesButton;