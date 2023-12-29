import React, {useRef} from 'react';
import MainLayout from "../../layout/main";
import Input from "../../components/input";
import Upload from "../../assets/icons/uploadPicture";
import Back from "../../assets/icons/back-card-icon";
import Shop from "../../assets/icons/shop";
import Plus from "../../assets/icons/Plus";
import Minus from "../../assets/icons/Minus";
import styles from "./dreamAdd.module.css";


const DreamAdd = () => {

    const inputRef = useRef(null);

    return (
        <MainLayout
            title="ثبت آرزو"
            subtitle="09032175822"
            headerColor="white"
            icon={<Back width="2.5rem"/>}
        >
            <div className={styles.body}>
                <div className={styles.section}>
                    <div className={styles.container}>
                        <input
                            ref={inputRef}
                            className={styles.inp}
                            type="file"
                        />
                        <button
                            className={styles.Btn}
                            onClick={() => inputRef.current.click()}
                        >
                            <Upload className={styles.upload}/>
                            آپلود تصویر آرزو
                        </button>

                        <Input
                            className={styles.inputWrapper}
                            inputClassName={styles.linkput}
                            type="text"
                            placeholder="عنوان آرزو"
                        />

                        <Input
                            iconLeft
                            className={styles.inputWrapper}
                            inputClassName={styles.linkput}
                            type="text"
                            placeholder="لینک آرزو"
                            Icon={(props)=> (
                                <button
                                    {...props}
                                    className={props.className + " " + styles.iconButton}
                                    onClick={() => {
                                    }}
                                >
                                    <Shop width="1.3rem"/>
                                </button>
                            )}
                        />

                        <div className={styles.spanWrapper}>
                            <span className={styles.span}>اگه آرزوی شما لینک داشته باشه رسیدن بهش راحت تره</span>
                        </div>

                        <h5>
                            تعیین مبلغ آرزو
                        </h5>
                        <div className={styles.counter}>
                            <button><Plus/></button>

                            <button><Minus/></button>
                        </div>
                    </div>
                </div>
            </div>

        </MainLayout>
    );
};

export default DreamAdd;