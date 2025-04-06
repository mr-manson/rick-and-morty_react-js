import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.line}></div>
            <div className={styles.footer}>FOOTER</div>
        </div>
    );
};

export default Footer;