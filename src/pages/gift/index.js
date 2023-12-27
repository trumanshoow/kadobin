import Styles from './gift.module.css'
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
        <div className={Styles.body}>
            <div className={Styles.whiteSection}>
                <div className={Styles.container}>
                    <img className={Styles.kadoImg} src={require("../../assets/image/kado.png")} alt="kado" />
                    <h3 className={Styles.title}> به کی می خوای هدیه بدی ؟ </h3>
                    <div>
                        <Input className={Styles.Input} placeholder=" نام و نام خانوادگی "/>
                    </div>
                    <div className={Styles.parentInput}>
                        <button className={Styles.button}><Telephon className={Styles.Telephone}/></button>
                        <Input className={Styles.Input2} type="number" placeholder=" +98 _ _ _ _ _ _  _ _ _ _ "/>
                    </div>
                    <h3 className={Styles.name}> اسم و شماره تماس کسی که می خوای بهش کادو بدی رو وارد کن.</h3>
                </div>
            </div>
                    <Button className={Styles.Button} text="ادامه"></Button>
        </div>

        </MainLayout>
    )
}
export default GiftPage;