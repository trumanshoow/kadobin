import {Link, useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPencil} from "@fortawesome/free-solid-svg-icons";
import styles from './code.module.css'
import Button from "../../../components/button";
import InputGroup from "../../../components/inputGroup";

const Code = ({error}) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/login/code?error=true")
    }

    const handleClickInput = () => {
        navigate("/login/code")
    }
    return (
        <>
            <p className={styles.number}>09032175822</p>
            <button className={styles.editingBtn}>
                <span><b>ویرایش شماره</b></span>
                <i><FontAwesomeIcon icon={faPencil}/></i>
            </button>
            <h4>کد فعالسازی را وارد نمائید</h4>
            <InputGroup length={5} placeholder={''} className={(error ? styles.error : "")} onChange={handleClickInput}/>
            <Button className={styles.button} onClick={handleClick}>ورود</Button>
            <div className={styles.resendWrapper}>
                <span>02:00</span>
                <Link to="#">ارسال دوباره کد</Link>
            </div>
        </>
    );
};

export default Code;