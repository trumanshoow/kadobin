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
                        {isActive ? <ActiveIcon width="1.2rem"/> : <Icon width="1.2rem" className={Styles.paddingIcon}/>}
                        <div className={Styles.TextWrapper}>
                            {/*<p className={({isActive})=> className({[Styles.activeNavLink]: isActive})}>{text}</p>*/}
                            <p>{text}</p>
                        </div>
                    </>
                )}
            </NavLink>
        </>
    );
};
export default MenuLink;