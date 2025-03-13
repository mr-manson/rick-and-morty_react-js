import styles from './Pagination.module.scss';
import { Link } from 'react-router-dom';

const Pagination = ({getCharacters, prevPage, nextPage, currentPage}) => {
    const nextPageHandler = () => {
        getCharacters(nextPage);
    }
    const prevPageHandler = () => {
        getCharacters(prevPage);
    }

    return (
        <div className={styles.container}>
            <Link to={`/characters/?page=${currentPage - 1}`} className={styles.link}>
                <button
                    onClick={prevPageHandler}
                    disabled={!prevPage}
                >PREV</button>
            </Link>
            <Link to={`/characters/?page=${currentPage + 1}`} className={styles.link}>
                <button
                    onClick={nextPageHandler}
                    disabled={!nextPage}
                >NEXT</button>
            </Link>
        </div>
    );
};

export default Pagination;