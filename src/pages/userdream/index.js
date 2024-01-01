import React, {useState} from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import Back from "../../assets/icons/back-card-icon";
import MainLayout from "../../layout/main";
import styles from "./userdream.module.css"
import Button from "../../components/button";
const UserDream = () => {

    const [value , setValue] = useState(32);

    return (

            <MainLayout
                title="آرزوهای علیرضا حسینی"
                subtitle="09032175822"
                headerColor="transparenty"
                icon={<Back width="2.5rem"/>}
            >

                <div className={styles.body}>
                    <div className={styles.section}>
                        <div className={styles.container}>
                            <div>
                                <img className={styles.productImg} src={require("../../assets/image/playstion.png")}
                                     alt="pes"/>
                                <span
                                    className={styles.subProduct}>Playstation 5 کنسول بازی سونی مدل ظرفیت 825 گیگابایت</span>
                                <span className={styles.sumcash}>مبلغ جمع شده</span>
                                <div className={styles.priceWrapper}>
                                    <span className={styles.price}>6.000.0</span>
                                    <span className={styles.toman}>تومان</span>
                                </div>
                                <div className={styles.progressWrap}>
                                    <ProgressBar
                                        completed={value}
                                        customLabel=" "
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

                                <span className={styles.subProgress}>کل مبلغ 25.005.000تومان</span>

                                <div className={styles.btnWrapper}>
                                    <Button className={styles.btn} text="برآورده کن"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </MainLayout>

    );
};

export default UserDream;