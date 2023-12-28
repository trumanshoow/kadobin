import ProductsData from "../../components/products";
import styles from "./products.module.css"
import Input from "../../components/input"
import Search from "../../assets/icons/Search"
import MainLayout from "../../layout/main";

const Products = () => {

    const data = [
        { Name: " کفش روزمره مردانه پاما مدل استیون ", previousprice: " 1,039,000 ", Discount: " %30 ", Price: " 727,000", src: "/assets/images/hedphon.webp" },
        { Name: " ساعت مچی عقربه ای زنانه مدل ", previousprice: " 1,080,000", Discount: " %45 ", Price: " 605,000 ", src: "/assets/images/Rectangle1.webp" },
        { Name: " پولوشرت آستین کوتاه مردانه 1991 اس دبلیو ", previousprice: " 398,000 ", Discount: " %45 ", Price: " 298,000 ", src: "/assets/images/Rectangle3.webp" },
        { Name: " پولوشرت آستین کوتاه مردانه رینگ  ", previousprice: " 537,000 ", Discount: " %55 ", Price: " 239,000 ", src: "/assets/images/Rectangle4.webp" },
        { Name: " پایه نگهدارنده گوشی موبایل زیلوت ", Price: " 319,000 ", src: "/assets/images/Rectangle5.webp" },
        { Name: " شارژر فندکی زیلوت مدل CG01 ", previousprice: " 360,000 ", Discount: " %20 ", Price: " 288,000 ", src: "/assets/images/Rectangle4.webp" },
    ]

    return (
        <div className={styles.body}>
            <div className={styles.Continer}>
                <div className={styles.inputParent}>
                    <Input
                        className={styles.Search}
                        placeholder="جست و جو در بین هزاران محصول"
                        Icon={Search}
                    />
                </div>
                <div className={styles.Parentdata}>
                    {
                        data.map((item, index) => (
                            <ProductsData
                                key={index}
                                {...item}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Products;