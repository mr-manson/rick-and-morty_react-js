//import React from "react";
import styles from "./Character.module.scss";
import sprite from "./img/sprite.svg";

const Character = ({id, name, image, status, species, origin, setItemId, setActive}) => { // FIXME сделать компонент Button

    const setItemData = (id) => {
        setItemId(id);
        setActive(true);
    }

    return (
        <div>
            <li key={id} className={styles.list_item}>
                <div className={styles.card}>
                    <img className={styles.img} src={image} alt={name}/>
                    <div className={styles.infobox}>
                        <div className={styles.info}>
                            <h3 className={styles.name}>{name}</h3>
                            <div className={styles.info_item}>
                                <svg className={styles.info_item_icon}>
                                    <use href={sprite + "#pulse"}></use>
                                </svg>
                                <div className={styles.info_item_text}>{status}</div>
                            </div>
                            <div className={styles.info_item}>
                                <svg className={styles.info_item_icon}>
                                    <use href={sprite + "#alien"}></use>
                                </svg>
                                <div className={styles.info_item_text}>{species}</div>
                            </div>
                            <div className={styles.info_item}>
                                <svg className={styles.info_item_icon}>
                                    <use href={sprite + "#planet"}></use>
                                </svg>
                                <div className={styles.info_item_text}>{origin}</div>
                            </div>
                        </div>
                        <div className={styles.fav_button}>
                            <svg className={styles.add_fav}>
                                <use href={sprite + "#heart_stroke"}></use>
                            </svg>
                        </div>
                    </div>
                    <div className={styles.more_button} onClick={() => setItemData(id)}>
                        <svg className={styles.more_button_icon}>
                            <use href={sprite + "#info"}></use>
                        </svg>
                        <span>Learn more</span>
                    </div>
                </div>
            </li>
        </div>
    );
};

export default Character;