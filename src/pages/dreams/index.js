import Styles from "./dream.module.css"
import Button from "../../components/button";

const DreamPage = (props) => {
    return (
        <>
            <img className={Styles.picture} src={require("../../assets/image/Ghool cheragh jadoo.png")} alt="Ghool cheragh jadoo"/>

            <Button text="آرزو کن" className={Styles.Btn}></Button>
            <div className={Styles.subtitle}>
                <span>یادت باشه که آرزو هات قراره توسط کسایی که بهت می خوان کادو بدن قراره برآورده بشه ، پس چیزی آرزو نکن که از توانشون خارج</span>
            </div>

            <button className={Styles.dreamCounter}>هنوز {props.value} تا آرزوی دیگه داری</button>


        </>
    );
};

export default DreamPage;