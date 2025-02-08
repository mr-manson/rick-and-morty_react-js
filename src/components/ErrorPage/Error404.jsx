import styles from './Error404.module.scss';
import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.space}></div>
                <div className={styles.wrapper}>
                    <div className={styles.img_wrapper}>
                        <span>44</span>
                    </div>
                    <p>
                        The page you are trying to search has been <br/>
                        moved to another universe.
                    </p>
                    <Link className={styles.button} to="/">GET ME HOME</Link>
                </div>
            </div>
        </>
    );
};

export default Error404;