import {Link, useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPencil} from "@fortawesome/free-solid-svg-icons";
import Styles from './code.module.css'
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
            <p className={Styles.number}>09032175822</p>
            <button className={Styles.editingBtn}>
                <span><b>ویرایش شماره</b></span>
                <i><FontAwesomeIcon icon={faPencil}/></i>
            </button>
            <h4>کد فعالسازی را وارد نمائید</h4>
            <InputGroup length={5} placeholder={''} className={(error ? Styles.error : "")} onChange={handleClickInput}/>
            <Button className={Styles.button} padding={".7rem 7.4rem"} text={'ورود'} onClick={handleClick}></Button>
            <div className={Styles.resendWrapper}>
                <span>02:00</span>
                <Link to="#">ارسال دوباره کد</Link>
            </div>
        </>
    );
};

export default Code;