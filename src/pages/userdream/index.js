import React from 'react';
import Back from "../../assets/icons/back-card-icon";
import MainLayout from "../../layout/main";
import styles from "./userdream.module.css"
const UserDream = () => {
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
                            <img className={styles.productImg} src={require("../../assets/image/playstion.png")} alt="pes"/>
                            <span className={styles.subProduct}>Playstation 5 کنسول بازی سونی مدل ظرفیت 825 گیگابایت</span>
                            <span className={styles.sumcash}>مبلغ جمع شده</span>
                            <div className={styles.priceWrapper}>
                                <span className={styles.price}>6.000.0</span>
                                <span className={styles.toman}>تومان</span>
                            </div>
                        </div>
                    </div>
                </div>


            </MainLayout>

    );
};

export default UserDream;