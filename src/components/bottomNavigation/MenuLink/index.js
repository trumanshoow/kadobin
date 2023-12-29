import {NavLink} from "react-router-dom";
import className from "classnames";
import styles from "../bottomNavigation.module.css"

const MenuLink = ({to, Icon, ActiveIcon, text}) => {
    return (
        <>
            <NavLink
                to={to}
                className={({isActive})=> className(styles.navLink, {[styles.activeNavLink]: isActive})}
            >
                {({isActive})=> (
                    <>
                        {isActive ? <ActiveIcon width="1.2rem"/> : <Icon width="1.2rem" className={styles.paddingIcon}/>}
                        <div className={styles.TextWrapper}>
                            <p>{text}</p>
                        </div>
                    </>
                )}
            </NavLink>
        </>
    );
};
export default MenuLink;