import Styles from './bottomNavigation.module.css'
import MenuLink from "./MenuLink";

const bottomNavigation = () => {
    return (
        <>
            <nav className={Styles.navMenu}>

                <MenuLink to={'/dreams'}>
                    <img src={require('../../assets/dreams.png')}>
                    <span>آرزوها</span>
                </MenuLink>
                <MenuLink to={'/shop'}>فروشگاه</MenuLink>
                <MenuLink to={'/home'}>خانه</MenuLink>
                <MenuLink to={'/gift'}>هدیه</MenuLink>
                <MenuLink to={'/wallet'}>کیف پول</MenuLink>
            </nav>
        </>
    );
};

export default bottomNavigation;