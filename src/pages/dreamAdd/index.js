import React, {useRef} from 'react';
import Back from "../../assets/icons/back-card-icon";
import Upload from "../../assets/icons/uploadPicture";
import MainLayout from "../../layout/main";
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

                        <input
                            className={styles.input}
                            type="text"
                            placeholder="عنوان آرزو"
                        />

                    </div>
                </div>
            </div>

        </MainLayout>
    );
};

export default DreamAdd;