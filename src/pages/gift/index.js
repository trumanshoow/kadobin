import Styles from './gift.module.css'

const GiftPage = () => {
    return (
        <>
            <div className={Styles.KadoImg}>
                <img src={require("../../assets/image/kado.png")} alt="kado" />
            </div>
        </>
    )
}
export default GiftPage;