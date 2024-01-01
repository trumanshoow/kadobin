import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import Button from "../../components/button";
import styles from "./dream.module.css";
import HamburgMenu_icon from "../../assets/icons/hamburgMenu_icon";
import MainLayout from "../../layout/main";



const DreamPage = () => {
    const navigation = useNavigate();

    const [value , setValue] = useState(3)



    return (
        <MainLayout
            title="آرزو ها"
            titleProps=""
            subtitle=""
            headerColor="white"
            icon={<HamburgMenu_icon width="2.5rem"/>}

        >
            <>
                <div className={styles.all}>
                    <div className={styles.body}>
                        <div className={styles.section}>
                            <div className={styles.container}>
                                <img className={styles.picture} src={require("../../assets/image/Ghool cheragh jadoo.png")} alt="Ghool cheragh jadoo"/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.container}>
                        <Button onClick={()=> navigation("/dreams/addwish")} children="آرزو کن" className={styles.Btn}></Button>
                        <div className={styles.subtitle}>
                            <span>یادت باشه که آرزو هات قراره توسط کسایی که بهت می خوان کادو بدن قراره برآورده بشه ، پس چیزی آرزو نکن که از توانشون خارج</span>
                        </div>
                        <button  className={styles.dreamCounter}>هنوز <span className={styles.valueSpan}>{value}</span> تا آرزوی دیگه داری</button>
                    </div>

                </div>
            </>
        </MainLayout>
    );
};

export default DreamPage;