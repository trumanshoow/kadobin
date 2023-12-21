
import Styles from "./header.module.css";
import HamburgMenu_icon from "../../assets/icons/hamburgMenu_icon";
import {useLocation} from "react-router-dom";

const setting = [
    {path: "/", className: Styles.white, text:'خوش آمدید'},
    {path: "/shop", className: Styles.gray, text:'فروشگاه کادوبین'},
    {path: "/wallet", className: Styles.gray, text:'کیف پول'},
    {path: "/dreams", className: Styles.white, text:'آرزوها'},
    {path: "/gift", className: Styles.white, text:''},
]
const Header = ({title}) => {

    const Location = useLocation()
    console.log(Location.pathname)
    const handelSetting = setting.find((item) => {
        if (item.path === Location.pathname)
            return [
                item.className,
                item.text,
            ]
    })

    return (
        <>
            <div className={Styles.header + " " + handelSetting.className}>
                <div className={Styles.container}>
                    <HamburgMenu_icon width="2.5rem"/>
                    <h2>{handelSetting.text}</h2>
                </div>
            </div>
        </>
    );
};

export default Header;