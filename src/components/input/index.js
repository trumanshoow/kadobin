import Styles from './input.module.css'

const Input = ({type, placeholder, maxLength, className}) => {

    
    return (
        <>

            <input onChange={event => event.target.value} type={type} placeholder={placeholder} maxLength={maxLength}
                   className={className + " " + Styles.input}/>
        </>
    );
};

export default Input;