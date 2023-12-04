
import BottomNavigation from "../../components/bottomNavigation";
import {Outlet} from "react-router-dom";
import Styles from "./main.module.css";
import Header from "../../components/header";
import ServicesButton from "../../components/ServicesButton";

const MainLayout = () => {
    return (
        <div className={Styles.layout}>
            <Header/>
            <Outlet/>
            <BottomNavigation/>
        </div>
    );
};

export default MainLayout;