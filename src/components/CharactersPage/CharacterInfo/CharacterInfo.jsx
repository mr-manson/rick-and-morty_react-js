import styles from "./CharactersInfo.module.scss";
import { useEffect, useState } from "react";
import { getApi } from "../../../utils/api";
import { BASE_URL, CHARACTER } from "../../../constants/api";

const CharacterInfo = ({itemId}) => {
    const [charInfo, setCharInfo] = useState({});

    const getCharacters = async (url) => {
        const res = await getApi(url);

        console.log(res);
        if (res) {
            const charInfo = {
                id: res.id,
                name: res.name,
                status: res.status,
                species: res.species,
                type: res.type,
                gender: res.gender,
                origin: res.origin.name,
                image: res.image,
                episode: res.episode,
            }
            setCharInfo(charInfo);
        }

    };

    useEffect(() => {
        // console.log(`ID: ${itemId}`);
        itemId && getCharacters(BASE_URL + CHARACTER + `/${itemId}/`);
    }, [itemId]);

    return (
        <div className={styles.container}>
            <p>{charInfo.name}</p>
            <img src={charInfo.image} alt={charInfo.name} />
        </div>
    );
};

export default CharacterInfo;