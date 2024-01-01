
import {Outlet, useSearchParams} from "react-router-dom";
import styles from './LoginLayout.module.css';
import LogoIcon from '../../assets/icons/logo_icon';
import LogoTextIcon from '../../assets/icons/logo_text_icon'

const LayoutLogin = () => {

        const [searchParams]  = useSearchParams();
        const error = searchParams.get("error")

    return (
        <>

            <div className={styles.body}>
                <div className={styles.box1}>
                    <div className={styles.logo}>
                        <LogoTextIcon className={styles.logoText}/>
                        <LogoIcon className={styles.logoIcon}/>
                    </div>
                    <div className={styles.textUnderLogo}>
                        <h2>اونی که دوس داره رو بهش کادو بده</h2>
                    </div>
                </div>

                <div className={styles.box2}>
                    <div className={styles.circle1 + " " + (error ? styles.error : "")}></div>
                    <div className={styles.circle2}></div>
                    <h3 className={styles.loginText}>ورود</h3>
                        <Outlet error={error}/>
                    <div className={styles.endText}>
                        <p>نرم افزار هدیه کادو بین</p>
                        <span>نسخه 1.0.0</span>
                    </div>
                </div>
            </div>
        </>
    );
};


export default LayoutLogin;