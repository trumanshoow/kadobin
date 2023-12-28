import { NavLink } from "react-router-dom";
import styles from "./start.module.css"


const StartMenu = ({ Icon, title, to }) => {
    return (
        <>
            <NavLink to={to} className={styles.NavLink}>
                <div className={styles.wrapper}>
                    <div className={styles.Parent}>
                        <div className={styles.Icon}>
                            <Icon width="1rem" />
                        </div>
                        <span className={styles.Page}>
                            {title}
                        </span>
                    </div>
                </div>
            </NavLink>
        </>
    )
}
export default StartMenu;