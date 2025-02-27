import { NavLink } from "react-router-dom";

import styles from "./Navigation.module.scss";

const Navigation = () => {
    return (
        <div className={styles.container}>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/characters/?page=1'>Characters</NavLink>
            <NavLink to='/locations'>Locations</NavLink>
            <NavLink to='/error'>Error</NavLink>
        </div>
    );
};

export default Navigation;