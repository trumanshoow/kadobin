import HomeLayout from "../../leyout/main";
import Styles from "./home.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/button";
import React from "react";
import ServicesButton from "../../components/ ServicesButton";
import BottomNavigation from "../../components/bottomNavigation";

const home = () => {
    return (

            <div className={Styles.body}>

                <div className={Styles.section}>
                    <div className={Styles.container}>
                        <div className={Styles.header}>
                            <FontAwesomeIcon icon={faBars} className={Styles.hamburgMenu}/>
                            <h2>سلام خوش اومدی</h2>
                        </div>
                        <div className={Styles.kadoImg}>
                            <img src={require("../../assets/kado.png")} alt="kado"/>
                        </div>
                    </div>
                </div>


                <div className={Styles.container}>
                    <Button text={'ارسال کادو'}></Button>
                    <div className={Styles.boxWrapper}>
                        <ServicesButton src={require('../../assets/notebook.png')} text={'پرداخت قبض'}/>
                        <ServicesButton src={require('../../assets/Magnetic_Card.png')} text={'کارت به کارت'}/>
                        <ServicesButton src={require('../../assets/radio_tower.png')} text={'بسته اینترنت'}/>
                        <ServicesButton src={require('../../assets/sim_card.png')} text={'خرید شارژ'}/>
                    </div>
                    <img className={Styles.banner} src={require('../../assets/notification-banner.png')} alt=""/>
                    <BottomNavigation/>
                </div>
            </div>
    );
};

export default home;