import Styles from './gift.module.css'
import Input from '../../components/input/index'
import { text } from '@fortawesome/fontawesome-svg-core';
import Telephon from '../../assets/icons/telephon'
import Button from '../../components/button'
import Back from '../../assets/icons/back-card-icon'

const GiftPage = () => {
    return (
        <div className={Styles.body}>
            <div className={Styles.white}>
                <div className={Styles.container}>
                    <img className={Styles.img} src={require("../../assets/image/kado.png")} alt="kado" />
                    <h3 className={Styles.title}> به کی می خوای هدیه بدی ؟ </h3>
                    <div>
                        <Input className={Styles.Input} type={text} placeholder=" نام و نام خانوادگی " />
                    </div>
                    <div className={Styles.parentinput}>
                        <Input className={Styles.Input2} type={Number} placeholder=" 98 _ _ _ _ _ _ _ _ _ _ _ " />
                        <button className={Styles.button}><Telephon className={Styles.Telephon}/></button>
                    </div>
                    <h3 className={Styles.name}> اسم و شماره تماس کسی که می خوای بهش کادو بدی رو وارد کن </h3>
                    <Button className={Styles.Button} text="ادامه"></Button>
                </div>
            </div>
        </div>
    )
}
export default GiftPage;