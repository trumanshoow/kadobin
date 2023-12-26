import BottomNavigation from "../../components/bottomNavigation";
import Header from "../../components/header";
import {Provider} from "../../contexts/layoutData";
import Styles from "./main.module.css";

const MainLayout = ({children, ...props}) => {
    return (
        <Provider value={props}>
            <div className={Styles.layout}>
                <Header/>
                <div className={Styles.WrapperOutlet}>
                    {children}
                </div>
                <BottomNavigation/>
            </div>
        </Provider>
    );
};

export default MainLayout;