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
                        <div>
                            {isActive ? <ActiveIcon width="1.2rem"/> : <Icon width="1.2rem" className={styles.paddingIcon}/>}
                        </div>
                        <div className={styles.TextWrapper}>
                            <p style={{marginTop: isActive ? 10 : 1 ,color: isActive ? '#8F6DF4' : null}}>{text}</p>
                            {/*<p className={({isActive})=> className({[styles.activeText]: isActive})}>{text}</p>*/}
                        </div>
                    </>
                )}
            </NavLink>
        </>
    );
};
export default MenuLink;