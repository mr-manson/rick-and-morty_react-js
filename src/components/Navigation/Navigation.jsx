import { NavLink } from "react-router-dom";

import styles from "./Navigation.module.scss";
import logo from "../Header/img/LogoA.png";
import sprite from "../Header/img/sprite.svg";

const Navigation = () => {
    return (
        <div className={styles.header}>
            <img src={logo} alt="Logo"/>
            <div className={styles.container}>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/characters/?page=1'>Characters</NavLink>
                <NavLink to='/locations'>Locations</NavLink>
                <NavLink to='/error'>Error</NavLink>
            </div>
            <div className={styles.favorites_button}>
                <svg className={styles.favorites_button_icon}>
                    <use href={sprite + "#heart"}></use>
                </svg>
                <span>Favorites list</span>
            </div>
        </div>
    );
};

export default Navigation;