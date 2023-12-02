
import BottomNavigation from "../../components/bottomNavigation";
import {Outlet} from "react-router-dom";
import Styles from "./main.module.css";

const MainLayout = () => {
    return (
        <div className={Styles.layout}>
            <Outlet/>
            <BottomNavigation/>
        </div>
    );
};

export default MainLayout;