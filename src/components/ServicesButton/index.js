import React from 'react';
import Styles from "../../pages/home/home.module.css";

const ServicesButton = ({icons ,text}) => {
    return (
        <>
            <div className={Styles.text_img_Wrapper}>
                <div className={Styles.boxes}>
                    {icons}
                </div>
                <span>{text}</span>
            </div>
        </>
    );
};

export default ServicesButton;