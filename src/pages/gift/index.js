import styles from './gift.module.css'
import Input from '../../components/input/index'
import { text } from '@fortawesome/fontawesome-svg-core';
import Telephon from '../../assets/icons/telephon'
import Button from '../../components/button'
import React from "react";
import Back from "../../assets/icons/back-card-icon";
import MainLayout from "../../layout/main";
const GiftPage = () => {


    return (
        <MainLayout
            icon={<Back width="2.5rem"/>}
            headerColor="white"
        >
        <div className={styles.body}>
            <div className={styles.whiteSection}>
                <div className={styles.container}>
                    <img className={styles.kadoImg} src={require("../../assets/image/kado.png")} alt="kado" />
                    <h3 className={styles.title}> به کی می خوای هدیه بدی ؟ </h3>
                    <div>
                        <Input className={styles.Input} type={text} placeholder=" نام و نام خانوادگی "/>
                    </div>
                    <div className={styles.parentInput}>
                        <button className={styles.button}><Telephon className={styles.Telephone}/></button>
                        <Input className={styles.Input2} type={Number} placeholder="_ _ _ _ _ _ _ _ _09 "/>
                    </div>
                    <h3 className={styles.name}> اسم و شماره تماس کسی که می خوای بهش کادو بدی رو وارد کن.</h3>
                </div>
            </div>
                    <Button className={styles.Button} text="ادامه"></Button>
        </div>

        </MainLayout>
    )
}
export default GiftPage;