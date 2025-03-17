import styles from './Pagination.module.scss';
import { Link, NavLink } from 'react-router-dom';

const Pagination = ({getCharacters, prevPage, nextPage, currentPage}) => {
    const nextPageHandler = () => {
        getCharacters(nextPage);
    }
    const prevPageHandler = () => {
        getCharacters(prevPage);
    }

    const pages = [1, 2, 3, 4, 5];

    return (
        <div className={styles.container}>
            <Link to={`/characters/?page=${currentPage - 1}`} className={`${styles.link} ${styles.arrow}`}>
                <button className={styles.link_btn}
                    onClick={prevPageHandler}
                    disabled={!prevPage}
                >&lsaquo;</button>
            </Link>

            <div className={styles.pages}>
                {pages.map((page) => (
                    <Link
                        to={`/characters/?page=${currentPage + (page - currentPage)}`}
                        key={page}
                        className={(currentPage !== page) ? styles.link : `${styles.link} ${styles.active}`}
                    >
                        <span className={styles.number}>{page}</span>
                    </Link>
                ))}
            </div>

            <Link to={`/characters/?page=${currentPage + 1}`} className={`${styles.link} ${styles.arrow}`}>
                <button className={styles.link_btn}
                    onClick={nextPageHandler}
                    disabled={!nextPage}
                >&rsaquo;</button>
            </Link>
        </div>
    );
};

export default Pagination;