import {useState} from "react";
import styles from './input.module.css'

const Input = ({className, value, Icon, ...rest}) => {
    const [message, setMessage] = useState("");

    const handleChange = (event) => {
        setMessage(event.target.value)
    }

    return (
        <div className={className + " " + styles.wrapper}>
            {Icon ? <Icon className={styles.icon}/> : null}
            <input
                onChange={handleChange}
                value={message}
                className={className +" "+ styles.input}
                {...rest}
            />
        </div>
    );
};

export default Input;