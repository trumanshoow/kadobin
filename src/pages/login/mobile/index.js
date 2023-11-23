import React from 'react';
import Button from "../../../components/button";
import {Link, useNavigate} from "react-router-dom";
import Styles from "./mobile.module.css";
import Input from "../../../components/input";

const Mobile = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/login/mobile?error=true")
    }
    return (
        <>
            <h4 className={Styles.textBox2}>شماره تماس خود را جهت دریافت کد فعالسازی وارد نمائید</h4>
            <Input type={'tel'} placeholder={'09 _ _ _ _ _ _ _ _ _'} maxLength={'11'} className={Styles.input}/>
            <Button className={Styles.button} text={"ورود"} onClick={handleClick}></Button>
            <Link to="#" className={Styles.goDetailsText}>شرایط استفاده از کادو بین</Link>
        </>
    );
};

export default Mobile;