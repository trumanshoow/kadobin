// import Styles from 'wallet.module.css'
import Button from '../../components/button'
import ServicesButton from "../../components/ServicesButton";
import Bill_card_icon from "../../assets/icons/bill_card_icon";

const WalletPage = () => {
    return (
        <>
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
        </>
    );
};

export default WalletPage;