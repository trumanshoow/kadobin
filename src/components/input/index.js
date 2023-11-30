import Styles from './input.module.css'

const Input = ({type, placeholder, maxLength, className, onClick}) => {

    
    return (
        <>

            <input onChange={event => event.target.value} type={type} placeholder={placeholder} maxLength={maxLength} onClick={onClick}
                   className={className + " " + Styles.input}/>
        </>
    );
};

export default Input;