import { useEffect, useState } from "react";
import Character from "./Character/Character";
import withErrorApi from "../../hoc/withErrorApi";

import { getApi } from "../../utils/api";
import { BASE_URL, CHARACTER } from "../../constants/api";

import styles from "./Characters.module.scss";

const Characters = ({setErrorApi}) => {
    const [characters, setCharacters] = useState([]);


    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getCharacters = async (url) => {
        const res = await getApi(url);

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
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }
    };

    useEffect(() => {
        getCharacters(BASE_URL + CHARACTER);
    }, [getCharacters]);

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

export default withErrorApi(Characters);
