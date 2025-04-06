import { useEffect, useState } from "react";
import { getConcurrentApi } from "../../../utils/api";

import styles from "./CharactersFilms.module.scss";

const CharacterFilms = ({ episodes }) => {
    const [charEpisodes, setCharEpisodes] = useState([]);

    useEffect(() => {
        episodes && (async () => {
            const res = await getConcurrentApi(episodes);
            setCharEpisodes(res);
        })()
    }, [episodes]);

    return (
        <div className={styles.container}>
            {charEpisodes.map((episode) => (
                <div key={episode.id}>
                    {episode.episode}: {episode.name}
                </div>
            ))}
        </div>
    );
};

export default CharacterFilms;