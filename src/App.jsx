import { Routes, NavLink, Route } from "react-router-dom";

import Home from "./components/HomePage";
import Characters from "./components/CharactersPage";

import styles from './App.module.scss';


function App() {
    return (
        <div className={styles.container}>

                <NavLink to='/' exact>Home</NavLink>
                <NavLink to='/characters' exact>Characters</NavLink>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/characters" element={<Characters/>}/>
                </Routes>

        </div>
    );
}

export default App;
