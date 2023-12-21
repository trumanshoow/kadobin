import Styles from "./dream.module.css"
import Button from "../../components/button";
import {useState} from "react";

const DreamPage = () => {

    const [value , setValue]=useState(3)

    return (
        <>
            <div className={Styles.all}>
                 <div className={Styles.body}>
                     <div className={Styles.section}>
                        <div className={Styles.container}>
                            <img className={Styles.picture} src={require("../../assets/image/Ghool cheragh jadoo.png")} alt="Ghool cheragh jadoo"/>
                        </div>
                     </div>
                 </div>
                 <div className={Styles.container}>
                        <Button text="آرزو کن" className={Styles.Btn}></Button>
                         <div className={Styles.subtitle}>
                             <span>یادت باشه که آرزو هات قراره توسط کسایی که بهت می خوان کادو بدن قراره برآورده بشه ، پس چیزی آرزو نکن که از توانشون خارج</span>
                         </div>
                        <button className={Styles.dreamCounter}>هنوز <span className={Styles.valueSpan}>{value}</span> تا آرزوی دیگه داری</button>
                </div>

             </div>
        </>
    );
};

export default DreamPage;