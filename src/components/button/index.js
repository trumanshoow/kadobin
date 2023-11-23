import React from 'react';
import Styles from './button.module.css'
const Button = ({className ,text , onClick}) => {
    return (
        <>
            <button className={Styles.button+" "+className} onClick={onClick}>{text}</button>
        </>
    );
};

export default Button;