
import Styles from "./home.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/button";
import React from "react";
import ServicesButton from "../../components/ServicesButton";
import Bill_card_icon from '../../assets/icons/bill_card_icon'
import Magnetic_card from '../../assets/icons/magnetic_card_icon'
import Sim_card_icon from '../../assets/icons/sim_card_icon'
import Radio_tower_card_icon from '../../assets/icons/radio_tower_card_icon'
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
                            <img src={require("../../assets/image/kado.png")} alt="kado"/>
                        </div>
                    </div>
                </div>

                <div className={Styles.container}>
                    <Button text={'ارسال کادو'}></Button>
                    <div className={Styles.boxWrapper}>
                        <ServicesButton icons={<Bill_card_icon/>} text={'پرداخت قبض'}/>
                        <ServicesButton icons={<Magnetic_card/>} text={'کارت به کارت'}/>
                        <ServicesButton icons={<Radio_tower_card_icon/>} text={'بسته اینترنت'}/>
                        <ServicesButton icons={<Sim_card_icon/>} text={'خرید شارژ'}/>
                    </div>
                    <img className={Styles.banner} src={require('../../assets/image/notification-banner.png')} alt=""/>
                </div>
            </div>
    );
};

export default home;