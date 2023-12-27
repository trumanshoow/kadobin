import Plus from "../../assets/icons/Plus"
import styles from "./productsData.module.css"

const ProductsData = ({ Name, previousprice, Discount, Price, src }) => {
    return (
        <div className={styles.Parent}>
            <div className={styles.ParentImg}>
                <img className={styles.Picture} src={src} />
            </div>
            <div className={styles.Specificationbox}>
                <p className={styles.Name}>{Name}</p>
                <div className={styles.Specifications}>
                    <div className={styles.Discount}>{Discount}</div>
                    <p className={styles.previousprice}>{previousprice}</p>
                </div>
                <p className={styles.Price}>{Price}</p>
            </div>
            <div className={styles.ParentIcon}>
                <Plus className={styles.Icon} />
            </div>
        </div>
    )
}
export default ProductsData;