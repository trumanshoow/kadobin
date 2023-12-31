
import classNames from "classnames";
import styles from './button.module.css'

const Button = ({className, text , onClick, disabled}) => {
    return (
        <button className={classNames(styles.button, className, {[styles.disabled]: disabled})} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;