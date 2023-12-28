
import styles from './button.module.css'
const Button = ({className ,text , onClick}) => {
    return (
        <>
            <button className={styles.button+" "+className} onClick={onClick}>{text}</button>
        </>
    );
};

export default Button;