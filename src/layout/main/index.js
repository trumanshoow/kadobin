
import BottomNavigation from "../../components/bottomNavigation";
import {Outlet} from "react-router-dom";
import Styles from "./main.module.css";
import Header from "../../components/header";
import {useState} from "react";

const MainLayout = () => {

    return (
        <div className={Styles.layout}>
            <Header/>
            <div className={Styles.WrapperOutlet}>
                <Outlet/>
            </div>
            <BottomNavigation/>
        </div>
    );
};

export default MainLayout;