import BottomNavigation from "../../components/bottomNavigation";
import Header from "../../components/header";
import {Provider} from "../../contexts/layoutData";
import styles from "./main.module.css";

const MainLayout = ({children, ...props}) => {
    return (
        <Provider value={props}>
            <div className={styles.layout}>
                <Header/>
                    {children}
                <BottomNavigation/>
            </div>
        </Provider>
    );
};

export default MainLayout;