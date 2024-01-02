import styles from "./cart.module.css"
import MainLayout from "../../layout/main"
import Back from "../../assets/icons/back-card-icon"
import Bucket from "../../assets/icons/bucket"
import Plus from "../../assets/icons/Plus"
import SimpleSlider from "../../components/slider"
import Product from "../../components/products"

const Cart = () => {

    const data = [
        { name: " گوشواره طرح نگین دخترانه 18 میلی گرمی ", Discount: "%45", previousprice: "398.000", Price: "298.000" },
        { name: " گوشواره طرح نگین دخترانه 18 میلی گرمی ", Price: "298.000", }
    ]

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
                                <div className={styles.amount}> مبلغ مشارکت </div>
                                <p className={styles.Price}>50.000</p>
                            </div>
                        </div>
                        <div className={styles.ParentIcon}>
                            <Bucket className={styles.Icon} />
                        </div>
                    </div>
                    <div className={styles.add}>
                        <div className={styles.parentplus}>
                            <Plus styles={{ color: "blue" }} width=".7rem" />
                        </div>
                        افزودن محصول
                    </div>
                    <div className={styles.favorite}>
                        <SimpleSlider>
                            {
                                data.map((item,index)=>(
                                    <Product 
                                       key={index}
                                       {...item}
                                    />
                                ))
                            }
                        </SimpleSlider>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}
export default Cart;