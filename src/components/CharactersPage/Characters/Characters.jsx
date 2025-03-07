import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import Character from "../Character/Character";
import Modal from "../../Modal";
import CharacterInfo from "../CharacterInfo";

import { getApi } from "../../../utils/api";
import { BASE_URL, CHARACTER } from "../../../constants/api";

import styles from "./Characters.module.scss";

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [itemId, setItemId] = useState(null);
    const [active, setActive] = useState(false);

    const navigate = useNavigate();

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
        } else {
            navigate('/error');
        }
    };

    useEffect(() => {
        getCharacters(BASE_URL + CHARACTER);
    }, []);

    // console.log(itemId, active);

    return (
        <>
            <div className={styles.container}>
                <ul className={styles.list}>
                    {characters.map(({id, name, image, status, species, origin}) => (
                        <Character
                            key={id}
                            id={id}
                            name={name}
                            image={image}
                            status={status}
                            species={species}
                            origin={origin}
                            setItemId={setItemId}
                            setActive={setActive}
                        />
                    ))}
                </ul>
            </div>
            <Modal itemId={itemId} active={active} setActive={setActive} >
                <CharacterInfo itemId={itemId} />
            </Modal>
        </>
    );
};

export default Characters;
