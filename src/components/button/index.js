import classNames from "classnames";
import styles from './button.module.css'

const Button = ({className , onClick, disabled, children}) => {

    return (
        <button className={classNames(styles.button, className, {[styles.disabled]: disabled})} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;