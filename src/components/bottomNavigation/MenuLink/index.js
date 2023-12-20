import {NavLink} from "react-router-dom";
import className from "classnames";
import Styles from "../bottomNavigation.module.css"

const MenuLink = ({to, Icon, ActiveIcon, text, selected}) => {
    return (
        <>
            <NavLink
                to={to}
                className={className(Styles.navLink, {[Styles.activeNavLink]: selected})}
            >
                {selected ? <ActiveIcon/> : <Icon width={"1.3rem"}/>}
                <div className={Styles.TextWrapper}>
                    <p>{text}</p>
                </div>
            </NavLink>
        </>
    );
};
export default MenuLink;