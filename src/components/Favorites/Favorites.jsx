import styles from "./Favorites.module.scss";
import { useSelector } from "react-redux";

const Favorites = () => {
    const favId = useSelector(state => state.favorite.favList);

    return (
        <div className={styles.container}>
            <h2>Favorites</h2>
            {favId.map((fav, index) => (
                <div key={index}>
                    {fav}
                </div>
            ))}
        </div>
    );
};

export default Favorites;