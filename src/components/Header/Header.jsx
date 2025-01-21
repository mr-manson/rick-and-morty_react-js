import styles from "./Header.module.scss";

import sprite from "./img/sprite.svg";
import logo from "./img/LogoA.png";
import hero from "./img/HighLightImage.png";

const Header = () => { // FIXME сделать компонент Button
    return (
        <div>
            <div className={styles.header}>
                <img src={logo} alt="Logo"/>
                <div className={styles.favorites_button}>
                    <svg className={styles.favorites_button_icon}>
                        <use href={sprite + "#heart"}></use>
                    </svg>
                    <span>Favorites list</span>
                </div>
            </div>
            <div className={styles.hero}>
                <div className={styles.hero_text}>
                    <h1 className={styles.hero_title}>Find out everything in one <span>place.</span></h1>
                    <div className={styles.hero_content}>Characters, locations, episodes and more.</div>
                    <div className={styles.hero_themes}>
                        <div className={`${styles.themes_button} ${styles.white}`}>
                            <svg className={styles.theme_icon}>
                                <use href={sprite + "#light"}></use>
                            </svg>
                            <span>Dark</span>
                        </div>
                        <div className={styles.themes_button}>
                            <svg className={styles.theme_icon}>
                                <use href={sprite + "#dark"}></use>
                            </svg>
                            <span>Light</span>
                        </div>
                    </div>
                    <div className={styles.wubba}>Wubba Lubba Dub Dub! Watch your eyes.</div>
                </div>
                <div className={styles.hero_img}>
                    <img src={hero} alt="Hero"/>
                </div>
            </div>
            <div className={styles.line}></div>
        </div>
    );
};

export default Header;