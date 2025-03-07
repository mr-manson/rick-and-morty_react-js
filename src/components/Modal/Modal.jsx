import styles from "./Modal.module.scss";
import close from "./img/close.svg";

const Modal = ({active, setActive, children}) => {
    return (
        <div className={`${styles.overlay} ${active ? styles.active : ""}`} onClick={() => setActive(false)}>
            <div className={styles.modal_content} onClick={(e) => e.stopPropagation()}>
                <img className={styles.close} src={close} alt="close" onClick={() => setActive(false)}/>
                {children}
            </div>
        </div>
    );
};

export default Modal;