import React from 'react';
import styles from "../Characters/Characters.module.scss";
import Character from "../Character/Character";

const CharactersList = ({characters, setItemId, setActive}) => {
    return (
        <>
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
        </>
    );
};

export default CharactersList;