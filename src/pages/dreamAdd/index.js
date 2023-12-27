import React, {useRef} from 'react';
import Back from "../../assets/icons/back-card-icon";
import MainLayout from "../../layout/main";
import styles from "./dreamAdd.module.css";
const DreamAdd = () => {

    const inputRef = useRef(null);

    const handleChange = event => {
        if(event.currentTarget.files[0]?.size / 1024 / 1024 > 50) {
            alert("این فایل بیش از اندازه بزرگ است");
        }
    }

    return (
        <MainLayout
            icon={<Back width="2.5rem"/>}
            title="ثبت آرزو"
            subtitle="09032175822"
            headerColor="var(--babyBg)"
        >
            <div>
                <input
                    ref={inputRef}
                    style={{display: "none" , className: styles}}
                    type="file"
                    onChange={handleChange}
                />
                <button
                    style={{
                        backgroundColor: "#ccc",
                        border: "1px solid grey",
                        borderRadius: ".7rem",
                        width: 250,
                        height: 250

                    }}
                    onClick={() => inputRef.current.click()}
                >
                    Click me
                </button>
            </div>
        </MainLayout>
    );
};

export default DreamAdd;