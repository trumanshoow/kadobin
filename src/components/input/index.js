import {useState} from "react";
import styles from './input.module.css'

const Input = ({className, inputClassName, Icon, iconLeft, ...rest}) => {
    return (
        <div className={className + " " + styles.wrapper}>
            {Icon ? <Icon className={styles.icon + " " + (iconLeft ? styles.iconLeft : "")}/> : null}
            <input
                className={inputClassName + " " + styles.input}
                {...rest}
            />
        </div>
    );
};

export default Input;