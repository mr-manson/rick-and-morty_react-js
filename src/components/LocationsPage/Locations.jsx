import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { getApi } from "../../utils/api";
import { BASE_URL, LOCATION } from "../../constants/api";

import styles from "./Locations.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "../../store/slices/favoritesSlice";

const Locations = () => {
    const [locations, setLocations] = useState([]);
    const navigate = useNavigate();

    const favId = useSelector(state => state.favorite.favList);
    const dispatch = useDispatch();

    const getLocations = async (url) => {
        const res = await getApi(url);

        if (res) {
            const locList = res.results.map(({id, name, type, dimension, residents}) => {
                return {
                    id,
                    name,
                    type,
                    dimension,
                    residents: residents.length,
                }
            })
            setLocations(locList);
        } else {
            navigate("/error");
        }
    };

    useEffect(() => {
        getLocations(BASE_URL + LOCATION);
    }, []);

    return (
        <div className={styles.container}>
            {
                locations.filter(loc => loc.id <= 3).map(({id, name}) => (
                    <div key={id}>
                        {name}
                    </div>
                ))
            }
            <div className={styles.name}>Name is: {favId}</div>
            <button onClick={() => {
                dispatch(addFavorite(1));
            }}>Change name</button>
        </div>
    );
};

export default Locations;