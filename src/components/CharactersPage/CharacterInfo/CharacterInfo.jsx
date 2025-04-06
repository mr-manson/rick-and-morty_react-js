import styles from "./CharactersInfo.module.scss";
import { useEffect, useState } from "react";
import { getApi } from "../../../utils/api";
import { BASE_URL, CHARACTER } from "../../../constants/api";
import CharacterFilms from "../CharacterFilms";

const CharacterInfo = ({itemId}) => {
    const [charInfo, setCharInfo] = useState({});
    const [charEpisodes, setCharEpisodes] = useState([]);

    const getCharacters = async (url) => {
        const res = await getApi(url);

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
            setCharEpisodes(charInfo.episode);
        }

    };

    useEffect(() => {
        itemId && getCharacters(BASE_URL + CHARACTER + `/${itemId}/`);
    }, [itemId]);

    return (
        <div className={styles.container}>
            <div>
                <p>{charInfo.name}</p>
                <img src={charInfo.image} alt={charInfo.name}/>
            </div>
            <CharacterFilms episodes={charEpisodes} />
        </div>
    );
};

export default CharacterInfo;