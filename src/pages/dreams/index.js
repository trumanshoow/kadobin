import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Button from "../../components/button";
import Styles from "./dream.module.css";
import {useDispatch} from "react-redux";
import {setPageData} from "../../redux/slices/pageData";
import HamburgMenu_icon from "../../assets/icons/hamburgMenu_icon";



const DreamPage = () => {
    const navigation = useNavigate();

    const [value , setValue] = useState(3)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            setPageData({
                title: "آرزو",
                headerColor: "white",
                icon: <HamburgMenu_icon width='2.5rem'/>,
            })
        )
    }, []);


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
                        <Button onClick={()=> navigation("/dreams/addwish")} text="آرزو کن" className={Styles.Btn}></Button>
                         <div className={Styles.subtitle}>
                             <span>یادت باشه که آرزو هات قراره توسط کسایی که بهت می خوان کادو بدن قراره برآورده بشه ، پس چیزی آرزو نکن که از توانشون خارج</span>
                         </div>
                        <button  className={Styles.dreamCounter}>هنوز <span className={Styles.valueSpan}>{value}</span> تا آرزوی دیگه داری</button>
                </div>

             </div>
        </>
    );
};

export default DreamPage;