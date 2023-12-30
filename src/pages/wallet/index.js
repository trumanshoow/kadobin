import styles from './wallet.module.css'
import Button from '../../components/button'
import ServicesButton from "../../components/ServicesButton";
import Bill_card_icon from "../../assets/icons/bill_card_icon";
import MainLayout from "../../layout/main";
import HamburgMenu_icon from "../../assets/icons/hamburgMenu_icon";
import Alert from "../../components/alert";
import {useState} from "react";


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
            mode: "error",
        })
    }
    return (
        <MainLayout
            icon={<HamburgMenu_icon width="2.5rem"/>}
            title="کیف پول"
            subtitle="واریز و برداشت"
            headerColor="var(--babyBg)"
        >
            <Alert text={notification?.text} onFinish={()=> setText(null)} mode={notification?.mode}/>
            <div className={styles.walletBalance}>
                <div className={styles.wrapperImg}>
                    <img src={require("../../assets/image/wallet.png")}/>
                </div>
                <div className={styles.wrapperText}>
                    <p className={styles.title}>موجودی کیف پول</p>
                    <p className={styles.subTitle}>150.000<span className={styles.toman}>تومان</span></p>
                </div>
            </div>
            <div>

            </div>
            <p></p>
            <h3></h3>
            <div>
                <Button onClick={request}>
                    Fuck
                </Button>
                <Button>
                    +
                </Button>
            </div>
            <ServicesButton text={"www"} Icon={Bill_card_icon}/>
            <div>
                <span>sswwooiippee</span>
            </div>
        </MainLayout>
    );
};

export default WalletPage;