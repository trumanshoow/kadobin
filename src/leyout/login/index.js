import logoImage from '../../assets/logo.png'
import logoText from '../../assets/logoText.png'
import Styles from './LoginLayout.module.css'
import {Outlet, useSearchParams} from "react-router-dom";


const LayoutLogin = () => {

        const [searchParams, setSearchParams]  = useSearchParams();
        const error = searchParams.get("error")

    return (
        <>
            <div className={Styles.body}>
                <div className={Styles.box1}>
                    <div className={Styles.logo}>
                        <img src={logoText} alt={'logo-text'} id={Styles.logoText}/>
                        <img src={logoImage} alt={'logo-img'} id={Styles.logoImage}/>
                    </div>
                    <div className={Styles.textUnderLogo}>
                        <h2>اونی که دوس داره رو بهش کادو بده</h2>
                    </div>
                </div>

                <div className={Styles.box2}>
                    <div className={Styles.circle1 + " " + (error ? Styles.error : "")}></div>
                    <div className={Styles.circle2}></div>
                    <h3 className={Styles.loginText}>ورود</h3>
                        <Outlet error={error}/>
                    <div className={Styles.endText}>
                        <p>نرم افزار هدیه کادو بین</p>
                        <span>نسخه 1.0.0</span>
                    </div>
                </div>
            </div>
        </>
    );
};


export default LayoutLogin;