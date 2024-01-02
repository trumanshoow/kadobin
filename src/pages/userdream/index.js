import React from 'react';
import MainLayout from "../../layout/main";
import Back from "../../assets/icons/back-card-icon";
import SimpleSlider from "../../components/slider";
import UserDreamModule from "../../components/userdream"
import styles from "../../components/userdream/userdream.module.css";

const UserDream = () => {

    const data = [
        {
            src: "/assets/images/psfive.webp",
            subProductText: "Playstation 5 کنسول بازی سونی مدل ظرفیت 825 گیگابایت",
            price: "6.000.0",
            value: 32,
            subProgress: "کل مبلغ 20.000.050 تومان"
        },{
            src: "/assets/images/psfive.webp",
            subProductText: "Playstation 5 کنسول بازی سونی مدل ظرفیت 825 گیگابایت",
            price: "6.000.0",
            value: 32,
            subProgress: "کل مبلغ 20.000.050 تومان"
        },{
            src: "/assets/images/psfive.webp",
            subProductText: "Playstation 5 کنسول بازی سونی مدل ظرفیت 825 گیگابایت",
            price: "6.000.0",
            value: 32,
            subProgress: "کل مبلغ 20.000.050 تومان"
        }

    ]

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
                            <SimpleSlider>
                                {
                                    data.map((item, index) => (
                                        <UserDreamModule
                                            key={index}
                                            {...item}
                                        />
                                    ))
                                }
                            </SimpleSlider>
                        </div>
                    </div>
                </div>

        </MainLayout>
    );
};

export default UserDream;