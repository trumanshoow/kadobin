
import * as React from 'react';
import ReactInputVerificationCode from 'react-input-verification-code';
import './inputGroup.css'

// const group = [
//     {
//         value: 6,
//         label: 'Amount of apples',
//         name: 'Apple',
//     },
//     {
//         value: 2,
//         label: 'Amount of bananas',
//         name: 'Banana',
//     },
// ];
const InputGroup = ({length , placeholder ,className, onChange}) => {

    return (
        <>
            <div className={className + " " + "custom-styles"}>
                <ReactInputVerificationCode length={length} placeholder={placeholder} onChange={onChange}/>
            </div>
        </>
    );
};

export default InputGroup;