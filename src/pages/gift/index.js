import Styles from './gift.module.css'
import Input from '../../components/input/index'
import { text } from '@fortawesome/fontawesome-svg-core';
import Telephon from '../../assets/icons/telephon'
import Button from '../../components/button'
import {useEffect} from "react";
import {setPageData} from "../../redux/slices/pageData";
import {useDispatch} from "react-redux";
const GiftPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            setPageData({
                title: "هدیه",
                headerColor: "white"
            })
        )
    }, []);

    return (
        <div className={Styles.body}>
            <div className={Styles.whiteSection}>
                <div className={Styles.container}>
                    <img className={Styles.kadoImg} src={require("../../assets/image/kado.png")} alt="kado" />
                    <h3 className={Styles.title}> به کی می خوای هدیه بدی ؟ </h3>
                    <div>
                        <Input className={Styles.Input} type={text} placeholder=" نام و نام خانوادگی " />
                    </div>
                    <div className={Styles.parentInput}>
                        <Input className={Styles.Input2} type={Number} placeholder=" +98 _ _ _ _ _ _  _ _ _ _ "/>
                        <button className={Styles.button}><Telephon className={Styles.Telephone}/></button>
                    </div>
                    <h3 className={Styles.name}> اسم و شماره تماس کسی که می خوای بهش کادو بدی رو وارد کن </h3>
                </div>
            </div>
                    <Button className={Styles.Button} text="ادامه"></Button>
        </div>
    )
}
export default GiftPage;