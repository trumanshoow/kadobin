import {NavLink} from "react-router-dom";
import Styles from "../bottomNavigation.module.css"

const MenuLink = ({to, Icon, ActiveIcon, text, selected}) => {
    return (
        <>
            <NavLink
                to={to}
                className={Styles.navLink}
            >
                {selected ? <ActiveIcon/> : <Icon width={"1.3rem"}/>}
                <div className={Styles.TextWrapper}>
                    {text}
                </div>
            </NavLink>
        </>
    );
};
export default MenuLink;