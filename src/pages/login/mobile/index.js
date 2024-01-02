import React, {useState} from 'react';
import Button from "../../../components/button";
import {Link, useNavigate} from "react-router-dom";
import styles from "./mobile.module.css";
import Input from "../../../components/input";

const Mobile = () => {

    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/login/mobile?error=true")
    }

    return (
        <>
            <h4 className={styles.textBox2}>شماره تماس خود را جهت دریافت کد فعالسازی وارد نمائید</h4>
            <Input type={'tel'} placeholder={'09 _ _ _ _ _ _ _ _ _'} maxLength={'11'} className={styles.input}/>
            <Button className={styles.button} onClick={()=>[
                handleClick(),
                navigate("/login/code"),
            ]}>ورود</Button>
            <Link to="/login/mobile/terms" className={styles.goDetailsText}>شرایط استفاده از کادوبین</Link>
        </>
    );
};

export default Mobile;