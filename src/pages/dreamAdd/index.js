import React, {useEffect, useRef} from 'react';
import Styles from "./dreamAdd.module.css";
import {setPageData} from "../../redux/slices/pageData";
import {useDispatch} from "react-redux";
import Back from "../../assets/icons/back-card-icon";



const DreamAdd = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            setPageData({
                title: "ثبت آرزو",
                subtitle: "09032175822",
                subTitleProps: {className: Styles.subtitle},
                headerColor: "white",
                icon: <Back width="2.5rem"/>
            })
        )
    }, []);

    const inputRef = useRef(null);

    const handleChange = event => {
        console.log(event.currentTarget.files)
        if(event.currentTarget.files[0]?.size / 1024 / 1024 > 50) {
            alert("این فایل بیش از اندازه بزرگ است");
            return;
        }
    }

    return (
        <div>
            <input
                ref={inputRef}
                style={{display: "none"}}
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
                onClick={()=> inputRef.current.click()}
            >
                Click me
            </button>
        </div>
    );
};

export default DreamAdd;