import React from 'react';
import Styles from "./services.module.css";

const ServicesButton = ({Icon ,text}) => {
    return (
        <>
            <div className={Styles.text_icon_Wrapper}>
                <div className={Styles.boxes}>
                    <Icon width='1.8rem'/>
                </div>
                <span>{text}</span>
            </div>
        </>
    );
};

export default ServicesButton;