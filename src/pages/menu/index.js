import styles from "./menu.module.css"
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
        <div className={styles.body}>
            <div className={styles.container}>
                <div className={styles.Header}>
                    <p className={styles.Menu}>
                        منو
                    </p>
                    <Delete className={styles.IconDelete} />
                </div>
                <div className={styles.User}>
                    <User className={styles.IconUser} />
                </div>
                <div className={styles.UserName}>
                    <h4>
                        علیرضا حسینی
                    </h4>
                    <div className={styles.ProfileParent}>
                        <UserAdd className={styles.UserAdd}/>
                        <span className={styles.Profile}> پروفایل </span>
                    </div>
                </div>
                <div className={styles.ParentIcon}>
                    {
                        data.map((item, index) => (
                            <StartMenu
                                key={index}
                                {...item}
                            />
                        ))
                    }
                </div>
                <p className={styles.software}>
                    نرم افزار هدیه کادوبین
                </p>
                <p className={styles.prescription}>
                    نسخه 10.0
                </p>
            </div>
        </div>
    )
}
export default Menu;