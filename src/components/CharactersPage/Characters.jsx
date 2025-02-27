import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Character from "./Character/Character";

import { getApi } from "../../utils/api";
import { BASE_URL, CHARACTER } from "../../constants/api";

import styles from "./Characters.module.scss";

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const navigate = useNavigate();

    const getCharacters = async (url) => {
        const res = await getApi(url);

        // console.log(res.info.next);

        if (res) {
            const charList = res.results.map(
                ({id, name, image, status, species, origin}) => {
                    return {
                        id,
                        name,
                        image,
                        status,
                        species,
                        origin: origin.name,
                    };
                }
            );
            setCharacters(charList);
        } else {
            navigate('/error');
        }
    };

    useEffect(() => {
        getCharacters(BASE_URL + CHARACTER);
    }, []);

    return (
        <>
            <div className={styles.container}>
                <ul className={styles.list}>
                    {characters.map(({id, name, image, status, species, origin}) => (
                        <Character
                            key={id}
                            name={name}
                            image={image}
                            status={status}
                            species={species}
                            origin={origin}
                        />
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Characters;
