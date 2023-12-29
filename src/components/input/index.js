import {useState} from "react";
import styles from './input.module.css'

const Input = ({className, inputClassName, value, Icon, iconLeft, ...rest}) => {
    const [message, setMessage] = useState("");

    const handleChange = (event) => {
        setMessage(event.target.value)
    }

    return (
        <div className={className + " " + styles.wrapper}>
            {Icon ? <Icon className={styles.icon + " " + (iconLeft ? styles.iconLeft : "")}/> : null}
            <input
                value={message}
                onChange={handleChange}
                className={inputClassName + " " + styles.input}
                {...rest}
            />
        </div>
    );
};

export default Input;