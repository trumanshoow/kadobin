import Styles from "./menu.module.css"
import User from "../../assets/icons/icons8UserMale"
import UserAdd from "../../assets/icons/icons8MaleUser"
import StartMenu from "../../components/startMenu/index"
import A from "../../assets/icons/icons8About"
import B from "../../assets/icons/icons8LogoutRounded"
import C from "../../assets/icons/icons8Rules"
import D from "../../assets/icons/home_icon"
import E from "../../assets/icons/shop_icon"
import F from "../../assets/icons/gift_icon"
import G from "../../assets/icons/wallet_icon"
import H from "../../assets/icons/dreams_icon"

const Menu = () => {

    const data = [
        { to: "/",  title: " خانه ", Icon:A},
        { to: "/shop",  title: " فروشگاه " , Icon:B},
        { to: "/dreams",  title: " آرزوها " , Icon:C},
        { to: "/wallet",  title: " کیف پول " , Icon:D},
        { to: "/gift",  title: " هدیه " , Icon:E},
        { to: "/#",  title: " درباره ما " , Icon:F},
        { to: "/#",  title: " قوانین و مقررات " , Icon:G},
        { to: "/#", title: " خروج " , Icon:H},
    ]

    return (
        <>
            <div className={Styles.body}>
                <div className={Styles.continer}>
                    <div className={Styles.User}>
                        <User className={Styles.IconUser} />
                    </div>
                    <div className={Styles.UserName}>
                        <h4>
                            علیرضا حسینی
                        </h4>
                        <div className={Styles.ProfileParent}>
                            <span className={Styles.Profile}> پروفایل </span>
                            <UserAdd />
                        </div>
                    </div>
                    <div className={Styles.ParentIcon}>
                        {
                            data.map((item, index) =>
                                <StartMenu className={Styles.Pages}
                                    key={index}
                                    {...item}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default Menu;