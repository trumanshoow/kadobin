import styles from "./cart.module.css"
import MainLayout from "../../layout/main"
import Back from "../../assets/icons/back-card-icon"
import Bucket from "../../assets/icons/bucket"

const Cart = () => {
    return (
        <MainLayout
            icon={<Back width="2.5rem" />}
            title=" سبد خرید "
        >
            <div className={styles.body}>
                <div className={styles.container}>
                    <div className={styles.Parent}>
                        <div className={styles.ParentImg}>
                            <img className={styles.Picture} src="/assets/images/psfive.webp" />
                        </div>
                        <div className={styles.Specificationbox}>
                            <p className={styles.Name}> کنسول بازی سونی مدل ظرفیت 825 گیگابایت Playstation 5  </p>
                            <div className={styles.Specifications}>
                                <div className={styles.Discount}> مبلغ مشارکت </div>
                                <p className={styles.Price}>50.000</p>
                            </div>
                        </div>
                        <div className={styles.ParentIcon}>
                            <Bucket className={styles.Icon} />
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}
export default Cart;