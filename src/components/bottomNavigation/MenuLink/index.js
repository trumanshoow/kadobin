import {NavLink} from "react-router-dom";
import className from "classnames";
import Styles from "../bottomNavigation.module.css"

const MenuLink = ({to, Icon, ActiveIcon, text}) => {
    return (
        <>
            <NavLink
                to={to}
                className={({isActive})=> className(Styles.navLink, {[Styles.activeNavLink]: isActive})}
            >
                {({isActive})=> (
                    <>
                        {isActive ? <ActiveIcon/> : <Icon width={"1.3rem"}/>}
                        <div className={Styles.TextWrapper}>
                            <p>{text}</p>
                        </div>
                    </>
                )}
            </NavLink>
        </>
    );
};
export default MenuLink;