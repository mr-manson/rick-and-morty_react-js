import Header from "../Header";
import Main from "../Main";

import styles from "./Home.module.scss";

const Home = () => {
    return (
        <div className={styles.container}>
            <Header />
            <Main />
        </div>
    );
};

export default Home;