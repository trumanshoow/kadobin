import styles from "./profile.module.css"
import User from "../../assets/icons/icons8UserMale"
import MainLayout from "../../layout/main"
import HamburgMenu_icon from "../../assets/icons/hamburgMenu_icon"
import Plus from "../../assets/icons/Plus"
import Button from "../../components/button"

const Profile = () => {
    return (
        <MainLayout
            icon={<HamburgMenu_icon width="2.5rem" />}
            title=" پروفایل "
        >
            <div className={styles.body}>
                <div className={styles.container}>
                    <div className={styles.wrapperWhite}>
                        <div className={styles.User}>
                            <User className={styles.IconUser} />
                        </div>
                        <a href="#" className={styles.Picture}>
                            <Plus className={styles.icon} width=".5rem"/>
                            <p> عکستو اضافه کن </p>
                        </a>
                        <input className={styles.name} placeholder=" نام " />
                        <input className={styles.name} placeholder="  نام خانوادگی " />
                        <div className={styles.parentjensiat}>
                            <Button className={styles.man} text=" آقا "/>
                            <Button className={styles.woman} text=" خانم "/>
                        </div>
                        <input className={styles.name} placeholder=" شماره تماس 1 " />
                        <input className={styles.name} placeholder=" شماره تماس 2 " />
                        <input className={styles.name} placeholder=" شیوه پرداخت پول " />
                        <input className={styles.name} placeholder="  شماره کارت " />
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}
export default Profile;