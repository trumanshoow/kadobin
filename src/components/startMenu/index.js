import { NavLink } from "react-router-dom";
import Styles from "./start.module.css"


const StartMenu = ({ Icon, title, to }) => {
    return (
        <>
            <NavLink to={to} className={Styles.NavLink}>
                <div className={Styles.wrapper}>
                    <div className={Styles.Parent}>
                        <span className={Styles.Page}>
                            {title}
                        </span>
                        <div className={Styles.Icon}>
                            <Icon width="1rem" />
                        </div>
                    </div>
                </div>
            </NavLink>
        </>
    )
}
export default StartMenu;