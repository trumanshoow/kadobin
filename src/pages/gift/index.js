import React, { useState } from "react";
import Input from '../../components/input/index'
import { text } from '@fortawesome/fontawesome-svg-core';
import Telephon from '../../assets/icons/telephon'
import Button from '../../components/button'
import Back from "../../assets/icons/back-card-icon";
import MainLayout from "../../layout/main";
import styles from './gift.module.css'

const GiftPage = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setNumber] = useState('');

    return (
        <MainLayout
            icon={<Back width="2.5rem" />}
            headerColor="white"
        >
            <div className={styles.body}>
                <div className={styles.whiteSection}>
                    <div className={styles.container}>
                        <img className={styles.kadoImg} src={require("../../assets/image/kado.png")} alt="kado" />
                        <h3 className={styles.title}> به کی می خوای هدیه بدی ؟ </h3>
                        <div>
                            <Input
                                type={text}
                                value={name}
                                onChange={event => setName(event.currentTarget.value)}
                                inputClassName={styles.Input}
                                placeholder="نام و نام خانوادگی"
                            />
                        </div>
                        <div className={styles.parentInput}>
                            <button className={styles.button}><Telephon className={styles.Telephone} /></button>
                            <Input
                                value={phoneNumber}
                                onChange={event => setNumber(event.currentTarget.value)}
                                inputClassName={styles.Input2}
                                type={Number}
                                placeholder="_ _ _ _ _ _ _ _ _09"
                            />
                        </div>
                        <h3 className={styles.name}> اسم و شماره تماس کسی که می خوای بهش کادو بدی رو وارد کن.</h3>
                    </div>
                </div>
                <Button className={styles.Button} text="ادامه" disabled={!name || !phoneNumber}></Button>
            </div>

        </MainLayout>
    )
}
export default GiftPage;