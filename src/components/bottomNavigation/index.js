import Styles from './bottomNavigation.module.css'
import MenuLink from "./MenuLink";
import Home_icon from '../../assets/icons/home_icon';
import Gift_icon from '../../assets/icons/gift_icon';
import Wallet_icon from '../../assets/icons/wallet_icon';
import Shop_icon from '../../assets/icons/shop_icon';
import Dreams_icon from '../../assets/icons/dreams_icon';
import Home_active_icon from '../../assets/icons/home_active_icon ';
import Gift_active_icon from '../../assets/icons/gift_active_icon';
import Wallet_active_icon from '../../assets/icons/wallet_active_icon';
import Shop_active_icon from '../../assets/icons/shop_active_icon';
import Dreams_active_icon from '../../assets/icons/dreamsActiveIcon';

const data = [
    {text: "آرزوها",textBold:"aa", to: "/dreams", Icon: Dreams_icon, ActiveIcon: Dreams_active_icon},
    {text: "فروشگاه",textBold:"aa", to: "/shop", Icon: Shop_icon, ActiveIcon: Shop_active_icon},
    {text: "خانه",textBold:"aa", to: "/", Icon: Home_icon, ActiveIcon: Home_active_icon},
    {text: "هدیه",textBold:"aa", to: "/gift", Icon: Gift_icon, ActiveIcon: Gift_active_icon},
    {text: "کیف پول",textBold:"aa", to: "/wallet", Icon: Wallet_icon, ActiveIcon: Wallet_active_icon},
]
const BottomNavigation = () => {
    return (
        <>
            <nav className={Styles.navMenu}>
                {
                    data.map((item, index) =>
                        <MenuLink
                            key={index}
                            {...item}
                        />
                    )
                }
            </nav>
        </>
    );
};

export default BottomNavigation;