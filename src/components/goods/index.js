import styles from "./goodsData.module.css"
import Delete from "../../assets/icons/Delete"

const GoodsData = () => {
    return (
        <>
            <div className={styles.Parent}>
                <div className={styles.ParentIcon}>
                    <Delete />
                </div>
                <div className={styles.Specifications}>
                    <p className={styles.Name}></p>
                    <div>
                        <p className={styles.previousprice}></p>
                        <div className={styles.Discount}></div>
                    </div>
                    <p className={styles.Price}></p>
                </div>
                <img className={styles.Picture}/>
            </div>
        </>
    )
}
export default GoodsData;