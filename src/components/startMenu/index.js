import { NavLink } from "react-router-dom";
import Styles from "./start.module.css"


const StartMenu = ({ Icon, title, to }) => {
    return (
        <>
            <NavLink to={to} className={Styles.NavLink}>
                <div className={Styles.Parent}>
                    <span>
                        {title}
                    </span>
                    <div>
                        <Icon style={{ width: "1rem", }} />
                    </div>
                </div>
            </NavLink>
        </>
    )
}
export default StartMenu;