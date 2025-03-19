import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";

import Character from "../Character/Character";
import Modal from "../../Modal";
import CharacterInfo from "../CharacterInfo";

import { getApi, getPageId } from "../../../utils/api";
import { BASE_URL, CHARACTER, PAGE } from "../../../constants/api";

import styles from "./Characters.module.scss";
import Pagination from "../../Pagination";

const Characters = () => {
    const [characters, setCharacters] = useState([]);

    const [totalPage, setTotalPage] = useState(null);
    const [currentPage, setCurrentPage] = useState(null);
    const [siblings] = useState(2);
    const [prevPage, setPrevPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [itemId, setItemId] = useState(null);
    const [active, setActive] = useState(false);

    const [searchParams] = useSearchParams(); // NOTE Получение параметра URL
    const paramPage = searchParams.get("page");

    const navigate = useNavigate();

    // console.log(characters.length);
    // console.log(nextPage);
    // console.log(prevPage);

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
            setPrevPage(res.info.prev);
            setNextPage(res.info.next);
            setCurrentPage(getPageId(url, PAGE));
            setTotalPage(res.info.pages);
        } else {
            navigate('/error');
        }
    };

    useEffect(() => {
        getCharacters(BASE_URL + CHARACTER + PAGE + paramPage);
    }, [paramPage]);

    return (
        <>
            <div className={styles.container}>
                <Pagination
                    getCharacters={getCharacters}
                    totalPage={totalPage}
                    currentPage={currentPage}
                    prevPage={prevPage}
                    nextPage={nextPage}
                    siblings={siblings}
                />
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
            <Modal itemId={itemId} active={active} setActive={setActive}>
                <CharacterInfo itemId={itemId}/>
            </Modal>
        </>
    );
};

export default Characters;
