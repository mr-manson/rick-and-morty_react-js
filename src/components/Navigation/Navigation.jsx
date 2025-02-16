import { NavLink } from "react-router-dom";

import styles from "./Navigation.module.scss";

const Navigation = () => {
    return (
        <div className={styles.container}>
            <NavLink to='/' exact>Home</NavLink>
            <NavLink to='/characters' exact>Characters</NavLink>
            <NavLink to='/locations' exact>Locations</NavLink>
            <NavLink to='/error' exact>Error</NavLink>
        </div>
    );
};

export default Navigation;