import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";

import styles from "./Home.module.scss";

const Home = () => {
    return (
        <div className={styles.container}>
            <Header />
            <Main />
            <Footer />
        </div>
    );
};

export default Home;