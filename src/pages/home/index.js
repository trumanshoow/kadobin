import styles from "./home.module.css";
import Button from "../../components/button";
import ServicesButton from "../../components/ServicesButton";

import Bill_card_icon from '../../assets/icons/bill_card_icon'
import Magnetic_card from '../../assets/icons/magnetic_card_icon'
import Sim_card_icon from '../../assets/icons/sim_card_icon'
import Radio_tower_card_icon from '../../assets/icons/radio_tower_card_icon'
import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setPageData} from "../../redux/slices/pageData";
import HamburgMenu_icon from "../../assets/icons/hamburgMenu_icon";
import MainLayout from "../../layout/main";


const data = [
    {text: "پرداخت قبض", Icon: Bill_card_icon},
    {text: "کارت به کارت", Icon: Magnetic_card},
    {text: "بسته اینترنت", Icon: Radio_tower_card_icon},
    {text: "خرید شارژ", Icon: Sim_card_icon},
]
const Home = () => {

    return (
        <MainLayout
            title="سلام خوش اومدی"
            titleProps="var(--babyPurple)"
            subtitle=""
            headerColor="white"
            icon={<HamburgMenu_icon width="2.5rem"/>}
        >

            <div className={styles.body}>
                <div className={styles.section}>
                    <div className={styles.container}>
                        <div className={styles.kadoImg}>
                            <img src={require("../../assets/image/kado.png")} alt="kado"/>
                        </div>
                    </div>
                </div>

                <div className={styles.container}>
                    <Button children={'ارسال کادو'} className={styles.button}></Button>
                    <div className={styles.boxWrapper}>
                        {
                            data.map((item, index) =>
                                <ServicesButton
                                    key={index}
                                    {...item}
                                />
                            )
                        }
                    </div>
                    <img className={styles.banner} src={require('../../assets/image/notification-banner.png')} alt=""/>
                </div>
            </div>
        </MainLayout>
    );
};

export default Home;