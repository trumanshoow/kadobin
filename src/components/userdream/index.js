import React from 'react';
import Button from "../button";
import ProgressBar from "@ramonak/react-progress-bar";
import styles from "./userdream.module.css"

const UserDream = ({src ,subProductText ,price ,value ,subProgress}) => {
    return (

        <div>
            <img className={styles.productImg} src={src} alt="pes"/>
            <span className={styles.subProduct}>{subProductText}</span>
            <span className={styles.sumcash}>مبلغ جمع شده</span>
            <div className={styles.priceWrapper}>
                <span className={styles.price}>{price}</span>
                <span className={styles.toman}>تومان</span>
            </div>
            <div className={styles.progressWrap}>
                <ProgressBar
                    completed={value}
                    customLabel=" "
                    width="95%"
                    height=".5rem"
                    margin=".3rem 0 0 0"
                    borderRadius=".5rem"
                    baseBgColor="#eee"
                    bgColor="#4bff59"
                    labelColor="white"
                    labelSize=".3rem"
                />
                <span className={styles.valueSpan}>%{value}</span>
            </div>

            <span className={styles.subProgress}>{subProgress}</span>

            <div className={styles.btnWrapper}>
                <Button className={styles.btn}>برآورده کن</Button>
            </div>
        </div>
    );
};

export default UserDream;