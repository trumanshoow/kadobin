import React, {useRef} from 'react';
import Button from "../../components/button";

const DreamAdd = () => {
    const inputRef = useRef(null);

    const handleChange = event => {
        console.log(event.currentTarget.files)
        if(event.currentTarget.files[0]?.size / 1024 / 1024 > 50) {
            alert("این فایلی بیش از اندازه بزرگ است");
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