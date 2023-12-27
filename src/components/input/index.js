import Styles from './input.module.css'
import {useState} from "react";

const Input = ({className, value, ...rest}) => {
    const [message, setMessage] = useState("");

    const handleChange = (event) => {
        setMessage(event.target.value)
    }

    return (
        <>
            <input
                onChange={handleChange}
                value={message}
                className={className + " " + Styles.input}
                {...rest}
            />
        </>
    );
};

export default Input;