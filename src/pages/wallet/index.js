import styles from './wallet.module.css'
import Button from '../../components/button'
import ServicesButton from "../../components/ServicesButton";
import MainLayout from "../../layout/main";
import HamburgMenu_icon from "../../assets/icons/hamburgMenu_icon";
import Alert from "../../components/alert";
import React, {useState} from "react";
import servicesButton from "../data/servicesButton";
import plusIcon from "../../assets/plusIcon";


const WalletPage = () => {
    const [notification, setText] = useState(null);

    const request = ()=> {
        // api
        //
        //
        //
        //
        const success = "پرداخت با موفقیت انجام شد و هدیه شما برای علیرضا حسینی ارسال خواهد شد";
        const mode = 'success'
        setText({
            text: success,
            style: mode,
        })
    }
    return (
        <MainLayout
            icon={<HamburgMenu_icon width="2.5rem"/>}
            title="کیف پول"
            subtitle="واریز و برداشت"
            headerColor="var(--babyBg)"
        >
            <Alert text={notification?.text} onFinish={() => setText(null)} mode={notification?.style}/>
            <div className={styles.walletBalance}>
                <div className={styles.wrapperImg}>
                    <img src={require("../../assets/image/wallet.png")}/>
                </div>
                <div className={styles.wrapperText}>
                    <p className={styles.title}>موجودی کیف پول</p>
                    <p className={styles.subTitle}>150.000<span className={styles.toman}>تومان</span></p>
                </div>
            </div>
            <div className={styles.buttonWrapper}>
                <Button onClick={request} className={styles.payButton}>پرداخت</Button>
                <Button icon={plusIcon} className={styles.addButton}/>
            </div>
            <div className={styles.container}>
                <p className={styles.text}>برای برداشت وجه ابتدا بایستی مقصد برداشت شیوه واریز را در پروفایل مشخص نمایید</p>
                <div className={styles.otherTitle}>
                    <h3>دیگر امکانات</h3>
                </div>
                <div className={styles.servicesWrapper}>
                    {
                        servicesButton.map((item, index) =>
                            <ServicesButton
                                key={index}
                                {...item}
                            />
                        )
                    }
                </div>
            </div>
        </MainLayout>
    );
};

export default WalletPage;