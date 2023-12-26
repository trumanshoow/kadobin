import styles from "./header.module.css";
import {useContext} from "react";
import layoutData from "../../contexts/layoutData";


const Header = () => {
    const layoutDataContext = useContext(layoutData);

    return (
        <>
            <div className={styles.header} style={{backgroundColor: layoutDataContext?.headerColor}}>
                <div className={styles.container}>
                    {layoutDataContext?.icon}
                    <div>
                        <h2 {...layoutDataContext?.titleProps}>{layoutDataContext?.title}</h2>
                        <h4 {...layoutDataContext?.subTitleProps}>{layoutDataContext?.subtitle}</h4>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;