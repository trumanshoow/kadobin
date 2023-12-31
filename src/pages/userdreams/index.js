import MainLayout from "../../layout/main";
import HamburgMenu_icon from "../../assets/icons/hamburgMenu_icon";
import Link from "../../assets/icons/Link";
import Pencil from "../../assets/icons/Pencil";
import Button from "../../components/button";
import Blind from "../../assets/icons/Blind"
import styles from "./userdreams.module.css"
import ProgressBar from "@ramonak/react-progress-bar";

const UserDreams = () => {
    return (
        <MainLayout
            icon={<HamburgMenu_icon width="2.5rem" />}
            title=" آرزوهای علیرضا حسینی "
            subtitle="09106193124"
        >
            <div className={styles.body}>
                <div className={styles.container}>
                    <div className={styles.wrapperWhite}>
                        <div className={styles.header}>
                            <Button className={styles.boxicon} icon={<Pencil className={styles.pencil} width="1rem" />} />
                            <Button className={styles.boxicon} icon={<Link className={styles.link} width="1rem" />} />
                        </div>
                        <img className={styles.img} src="/assets/images/psfive.webp" />
                        <div className={styles.boxSpecifications}>
                            <span className={styles.Specifications}> کنسول بازی سونی مدل ظرفیت 825 گیگابایت Playstation 5  </span>
                        </div>
                        <div className={styles.parentprogress}>
                            <span className={styles.amount}> مبلغ جمع شده </span>
                            <p className={styles.price}> 6.000.0 </p>
                            <ProgressBar
                                completed={30}
                                customLabel=" "
                                height=".5rem"
                                margin=".3rem 0 0 0"
                                borderRadius=".5rem" 
                                baseBgColor="#eee"
                                bgColor="#4bff59"
                                labelSize=".3rem"
                            />
                            <div className={styles.percent}>
                                <span className={styles.Price}> کل مبلغ 25.005.000 تومان </span>
                                <span className={styles.amount}>%32</span>
                            </div>
                        </div>
                        <p className={styles.Producers}> برآورده کنندگان </p>
                        <div className={styles.users}>
                            <div className={styles.user}>
                                <div className={styles.parenticon}>
                                    <Blind width="1rem" />
                                </div>
                                <p className={styles.name}> محمد ایرانی </p>
                                <p className={styles.Price}> 4,500,000 </p>
                            </div>
                            <div className={styles.user}>
                                <div className={styles.parenticon}>
                                    <img className={styles.amin} src="/assets/images/amin.webp" />
                                </div>
                                <p className={styles.name}> امین سنگ تراش </p>
                                <p className={styles.Price}> 1,500,000 </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}
export default UserDreams;