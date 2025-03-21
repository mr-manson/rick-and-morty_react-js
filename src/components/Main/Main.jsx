import styles from "./Main.module.scss";

const Main = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>MAIN</div>
            <div className={styles.line}></div>
        </div>
    );
};

export default Main;