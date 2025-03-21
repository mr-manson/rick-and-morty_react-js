import { Link } from 'react-router-dom';
import { returnPaginationRange } from "./utils/paginationUtils";
import cn from "classname";
import styles from './Pagination.module.scss';

const Pagination = ({getCharacters, prevPage, nextPage, totalPage, currentPage, siblings}) => {
    const nextPageHandler = () => {
        getCharacters(nextPage);
    }
    const prevPageHandler = () => {
        getCharacters(prevPage);
    }

    const pages = returnPaginationRange(totalPage, currentPage, siblings);

    return (
        <div className={styles.container}>
            <Link to={`/characters/?page=${currentPage - 1}`} className={`${styles.link} ${styles.arrow}`}>
                <button className={styles.link_btn}
                        onClick={prevPageHandler}
                        disabled={!prevPage}
                >&lsaquo;</button>
            </Link>

            <div className={styles.pages}>
                {pages.map((page, index) => (
                    <Link
                        to={`/characters/?page=${currentPage + (page - currentPage)}`}
                        key={index}
                        className={cn(
                            currentPage !== page ? styles.link : `${styles.link} ${styles.active}`,
                            page === "..." ? styles.dots : ""
                        )}
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