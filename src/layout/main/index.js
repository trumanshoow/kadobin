
import BottomNavigation from "../../components/bottomNavigation";
import {Outlet} from "react-router-dom";
import Styles from "./main.module.css";
import Header from "../../components/header";
import {useState} from "react";

const MainLayout = () => {

    const [value , setValue]=useState("3")

    return (
        <div className={Styles.layout}>
            <Header/>
            <Outlet value={value} set={setValue}/>
            <BottomNavigation/>
        </div>
    );
};

export default MainLayout;