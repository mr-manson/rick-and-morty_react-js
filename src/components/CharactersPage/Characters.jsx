import { useEffect, useState } from 'react';
import Character from "./Character/Character";

import { getApi } from '../../utils/api';
import { BASE_URL, CHARACTER } from '../../constants/api';

import styles from './Characters.module.scss';
import Error404 from "../ErrorPage";

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [errorApi, setErrorApi] = useState(false);

    const getCharacters = async (url) => {
        const res = await getApi(url);

        if (res) {
            const charList = res.results.map(({id, name, image, status, species, origin}) => {
                return {
                    id,
                    name,
                    image,
                    status,
                    species,
                    origin: origin.name
                }
            })
            setCharacters(charList);
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }

    };

    useEffect(() => {
        getCharacters(BASE_URL + CHARACTER);
    }, []);

    return (
        <>
            {errorApi
                ? (
                    <div className={styles.container}>
                        {/*<h2 style={{color: 'black'}}>ERROR</h2>*/}
                        <Error404 />
                    </div>
                )
                : (
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
                )
            }
        </>
    );
};

export default Characters;