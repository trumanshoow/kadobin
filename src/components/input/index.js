import Styles from './input.module.css'
import {useState} from "react";

const Input = ({type, placeholder, maxLength, className , onClick}) => {
    
    const [message, setMessage] = useState("");
    const handleClick = () => {
        setMessage("");
    }
    const handleChange = (event) => {
        setMessage(event.target.value)
    }

    return (
        <>
            <input onChange={handleChange} value={message} type={type} placeholder={placeholder} maxLength={maxLength}
                   className={className + " " + Styles.input}
                   onClick={() => {
                       handleClick();
                       onclick();
                   }}
            />
        </>
    );
};

export default Input;