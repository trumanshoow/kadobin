import styles from "./home.module.css";
import Button from "../../components/button";
import ServicesButton from "../../components/ServicesButton";
import HamburgMenu_icon from "../../assets/icons/hamburgMenu_icon";
import MainLayout from "../../layout/main";
import servicesButton from "../data/servicesButton";

const Home = () => {

    return (
        <MainLayout
            title="سلام خوش اومدی"
            titleProps="var(--babyPurple)"
            subtitle=""
            headerColor="white"
            icon={<HamburgMenu_icon width="2.5rem"/>}
        >

            <div className={styles.body}>
                <div className={styles.section}>
                    <div className={styles.container}>
                        <div className={styles.kadoImg}>
                            <img src={require("../../assets/image/kado.png")} alt="kado"/>
                        </div>
                    </div>
                </div>

                <div className={styles.container}>
                    <Button children={'ارسال کادو'} className={styles.button}></Button>
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
                    <img className={styles.banner} src={require('../../assets/image/notification-banner.png')} alt=""/>
                </div>
            </div>
        </MainLayout>
    );
};

export default Home;