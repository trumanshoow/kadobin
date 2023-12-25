import Styles from "./header.module.css";
import {useSelector} from "react-redux";


const Header = () => {

    const pageData = useSelector(x => x.pageData);

    return (
        <>
            <div className={Styles.header} style={{backgroundColor: pageData?.headerColor}}>
                <div className={Styles.container}>
                    {pageData?.icon}
                    <h2 {...pageData?.titleProps}>{pageData?.title??"خوش آمدید"}</h2>
                    <h4 {...pageData?.subTitleProps}>{pageData?.subtitle}</h4>
                </div>
            </div>
        </>
    );
};

export default Header;