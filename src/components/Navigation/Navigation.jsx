import { NavLink } from "react-router-dom";

import styles from "./Navigation.module.scss";
import logo from "../Header/img/LogoA.png";
import sprite from "../Header/img/sprite.svg";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Navigation = () => {
    const [favListLength, setFavListLength] = useState(0);

    const favList = useSelector(state => state.favorite.favList);

    useEffect(() => {
        setFavListLength(favList.length);
    }, [favList]);

    return (
        <div className={styles.header}>
            <img src={logo} alt="Logo"/>
            <div className={styles.nav}>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/characters/?page=1'>Characters</NavLink>
                <NavLink to='/locations'>Locations</NavLink>
                <NavLink to='/error'>Error</NavLink>
            </div>
            <NavLink to='/favorites'>
                <div className={styles.container}>
                    <div className={styles.favCount}>
                        <div className={styles.favCount_number}>
                            {favListLength > 0 ? <div>{favListLength}</div> : 0}
                        </div>
                    </div>
                    <div className={styles.favorites_button}>
                        <svg className={styles.favorites_button_icon}>
                            <use href={sprite + "#heart"}></use>
                        </svg>
                        <span>Favorites list</span>
                    </div>
                </div>
            </NavLink>
        </div>
    );
};

export default Navigation;