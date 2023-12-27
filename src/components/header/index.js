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
                {layoutData?.icon}
                <div
                    {...layoutData?.containerProps}
                    className={styles.container}
                >
                    <div>
                        <h2
                            {...layoutData?.titleProps}>
                            {layoutData?.title}
                        </h2>
                        <h4
                            {...layoutData?.subTitleProps}>
                            {layoutData?.subtitle}
                        </h4>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Header;