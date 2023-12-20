import Styles from "./ServicesButton2.module.css"

const ServicesButton2 = ({Icon ,title , subTitle}) => {
    return (
        <>
            <div className={Styles.textIconWrapper}>
                <div className={Styles.boxes}>
                    <Icon width="2rem"/>
                </div>
                <h3 className={Styles.title}>{title}</h3>
                <span className={Styles.subTitle}>{subTitle}</span>
            </div>
        </>
    );
};
export default ServicesButton2;