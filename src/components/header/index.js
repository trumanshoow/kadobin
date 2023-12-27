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
                    <div className={styles.wrapperText}>
                        <h2 className={styles.title}>
                            {layoutData?.title}
                        </h2>

                        <p className={styles.subtitle}>
                            {layoutData?.subtitle}
                        </p>
                    </div>
                {layoutData?.icon}
                </div>
            </div>
        </>
    );
};

export default Header;