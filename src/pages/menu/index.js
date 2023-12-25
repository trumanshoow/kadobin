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
import Delete from "../../assets/icons/Delete"

const Menu = () => {

    const data = [
        { to: "/", title: " خانه ", Icon: D },
        { to: "/shop", title: " فروشگاه ", Icon: E },
        { to: "/dreams", title: " آرزوها ", Icon: H },
        { to: "/wallet", title: " کیف پول ", Icon: G },
        { to: "/gift", title: " هدیه ", Icon: F },
        { to: "/#", title: " درباره ما ", Icon: A },
        { to: "/#", title: " قوانین و مقررات ", Icon: C },
        { to: "/#", title: " خروج ", Icon: B },
    ]

    return (
<<<<<<< Updated upstream
        <>
            <div className={Styles.body}>
                <div className={Styles.container}>
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
                            data.map((item, index) => (
                                    <StartMenu
                                        key={index}
                                        {...item}
                                    />
                            ))
                        }
                    </div>
=======
            <div className={Styles.continer}>
                <div className={Styles.Header}>
                    <Delete className={Styles.IconDelete} />
                    <p className={Styles.Menu}>
                        منو
                    </p>
                </div>
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
                        data.map((item, index) => (
                            <StartMenu
                                key={index}
                                {...item}
                            />
                        ))
                    }
>>>>>>> Stashed changes
                </div>
                <p className={Styles.software}>
                    نرم افزار هدیه کادوبین
                </p>
                <p className={Styles.prescription}>
                    نسخه 10.0
                </p>
            </div>
    )
}
export default Menu;