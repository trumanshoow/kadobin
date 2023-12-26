import BottomNavigation from "../../components/bottomNavigation";
import {Outlet} from "react-router-dom";
import Styles from "./main.module.css";
import Header from "../../components/header";
import {Provider} from "../../contexts/layoutData";

const MainLayout = (props) => {

    return (
        <Provider value={props}>
            <div className={Styles.layout}>
                <Header/>
                <div className={Styles.WrapperOutlet}>
                    <Outlet/>
                </div>
                <BottomNavigation/>
            </div>
        </Provider>
    );
};

export default MainLayout;