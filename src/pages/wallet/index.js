// import Styles from 'wallet.module.css'
import Button from '../../components/button'
import ServicesButton from "../../components/ServicesButton";
import Bill_card_icon from "../../assets/icons/bill_card_icon";
import Back from "../../assets/icons/back-card-icon";
import MainLayout from "../../layout/main";
import HamburgMenu_icon from "../../assets/icons/hamburgMenu_icon";


const WalletPage = () => {
    return (
        <MainLayout
            icon={<HamburgMenu_icon width="2.5rem"/>}
            title="کیف پول"
            subtitle="واریز و برداشت"
            headerColor="var(--babyBg)"
        >

            <div>
                <p></p>
            </div>
            <div>
                <div></div>
                <img src={require("../../assets/image/wallet.png")}/>
            </div>
            <div>

            </div>
            <p></p>
            <h3></h3>
            <div>
                <Button/>
                <Button/>
            </div>
            <ServicesButton text={"www"} Icon={Bill_card_icon}/>
            <div>
                <span>sswwooiippee</span>
            </div>
        </MainLayout>
    );
};

export default WalletPage;