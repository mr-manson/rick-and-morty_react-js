import styles from "./Favorites.module.scss";
import { useDispatch, useSelector } from "react-redux";
import sprite from "./img/sprite.svg";
import hero from "./img/rick-and-morty-fav.png";
import { clearFavorites } from "../../store/slices/favoritesSlice";
import CharactersList from "../CharactersPage/CharactersList";
import { useState } from "react";
import CharacterInfo from "../CharactersPage/CharacterInfo";
import Modal from "../Modal";

const Favorites = () => {
    const [itemId, setItemId] = useState(null);
    const [active, setActive] = useState(false);

    const favList = useSelector(state => state.favorite.favList);
    const dispatch = useDispatch();

    console.log(favList);

    const clearFavoritesHandler = () => {
        dispatch(clearFavorites());
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.hero_text}>
                    <svg className={styles.fav}>
                        <use href={sprite + "#heart_stroke"}></use>
                    </svg>
                    <h1 className={styles.hero_title}>All your <br/> <span>favorites.</span></h1>
                    <div className={styles.reset_button} onClick={clearFavoritesHandler}>
                        <span>Cleare</span>
                    </div>
                </div>
                <div className={styles.hero_img}>
                    <img src={hero} alt="Hero"/>
                </div>
            </div>

            <div className={styles.line}></div>

            <CharactersList
                characters={favList}
                setItemId={setItemId}
                setActive={setActive}
            />

            <Modal itemId={itemId} active={active} setActive={setActive}>
                <CharacterInfo itemId={itemId}/>
            </Modal>
        </>
    );
};

export default Favorites;