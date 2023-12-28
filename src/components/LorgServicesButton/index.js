import styles from "./ServicesButton2.module.css"

const ServicesButton2 = ({Icon ,title , subTitle}) => {
    return (
        <>
            <div className={styles.textIconWrapper}>
                <div className={styles.boxes}>
                    <Icon width="1.8rem"/>
                </div>
                <h3 className={styles.title}>{title}</h3>
                <span className={styles.subTitle}>{subTitle}</span>
            </div>
        </>
    );
};
export default ServicesButton2;