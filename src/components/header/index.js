import HamburgMenu_icon from "../../assets/icons/hamburgMenu_icon";
import {useSelector} from "react-redux";
import Styles from "./header.module.css";


const Header = () => {
    const pageData = useSelector(x => x.pageData);

    return (
        <>
            <div className={Styles.header} style={{backgroundColor: pageData?.headerColor}}>
                <div className={Styles.container}>
                    <HamburgMenu_icon width="2.5rem"/>
                    <h2>{pageData?.title??"خوش آمدید"}</h2>
                </div>
            </div>
        </>
    );
};

export default Header;