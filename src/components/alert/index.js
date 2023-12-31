import React, {useEffect} from 'react';
import styles from './alert.module.css'


const Alert = ({text, onFinish, mode}) => {
    useEffect(() => {
        if(text) {
            setTimeout(onFinish, 3000)
        }
    }, [text]);


    if(!text) {
        return null
    }


    return (
        <div className={styles.box} data-mode={mode}>
            <p>{text}</p>
        </div>
    );
};

export default Alert;