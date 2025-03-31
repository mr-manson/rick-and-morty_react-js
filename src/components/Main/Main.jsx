import styles from "./Main.module.scss";
import Slider from "../Slider";

const Main = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>MAIN</div>
            <Slider />
        </div>
    );
};

export default Main;