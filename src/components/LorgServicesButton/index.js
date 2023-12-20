import Styles from "./ServicesButton2.module.css"

const ServicesButton2 = ({Icon ,text , test}) => {
    return (
        <>
            <div className={Styles.texticonWrapper}>
                <div className={Styles.boxes}>
                    <Icon/>
                </div>
                <h3  className={Styles.ServicesButton2}>{text}</h3>
                <span className={Styles.test}>{test}</span>
            </div>
        </>
    );
};
export default ServicesButton2;