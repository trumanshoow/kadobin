import styles from "./header.module.css";
import {useContext} from "react";
import layoutDataContext from "../../contexts/layoutData";


const Header = () => {
    const layoutData = useContext(layoutDataContext);

    return (
        <>
            <div
                className={styles.header}
                style={{backgroundColor: layoutData?.headerColor}}
            >
                <div className={styles.container}>
                    <div>
                        <p className={styles.h2}>
                            {layoutData?.title}
                        <p>
                            {layoutData?.subtitle}
                        </p>
                        </p>
                    </div>
                {layoutData?.icon}
                </div>
            </div>
        </>
    );
};

export default Header;