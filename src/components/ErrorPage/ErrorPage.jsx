import React from 'react';
import styles from './ErrorPage.module.scss';

const ErrorPage = () => {
    return (
        <>
            <div className={styles.background_img}>
                <div className={styles.space}></div>
                <div className={styles.wrapper}>
                    <div className={styles.img_wrapper}>
                        <span>44</span>
                    </div>
                    <p>
                        The page you are trying to search has been <br/>
                        moved to another universe.
                    </p>
                    <button type={styles.button}>GET ME HOME</button>
                </div>
            </div>
        </>
    );
};

export default ErrorPage;