import React from 'react';
import styles from "./services.module.css";

const ServicesButton = ({Icon ,text}) => {
    return (
        <>
            <div className={styles.text_icon_Wrapper}>
                <div className={styles.boxes}>
                    <Icon width='1.5rem'/>
                </div>
                <span>{text}</span>
            </div>
        </>
    );
};

export default ServicesButton;