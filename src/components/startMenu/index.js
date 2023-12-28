import { NavLink } from "react-router-dom";
import Styles from "./start.module.css"


const StartMenu = ({ Icon, title, to }) => {
    return (
        <>
            <NavLink to={to} className={Styles.NavLink}>
                <div className={Styles.wrapper}>
                    <div className={Styles.Parent}>
                        <div className={Styles.Icon}>
                            <Icon width="1rem" />
                        </div>
                        <span className={Styles.Page}>
                            {title}
                        </span>
                    </div>
                </div>
            </NavLink>
        </>
    )
}
export default StartMenu;