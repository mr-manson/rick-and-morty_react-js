import { Routes, Route } from "react-router-dom";

import Home from "./components/HomePage";
import Characters from "./components/CharactersPage";
import Locations from "./components/LocationsPage";
import Error404 from "./components/ErrorPage";
import Navigation from "./components/Navigation";

import styles from './App.module.scss';



function App() {
    return (
        <div className={styles.container}>
            <Navigation />
            <Routes>
                <Route path="/" exact element={<Home/>}/>
                <Route path="/characters" exact element={<Characters/>}/>
                <Route path="/locations" exact element={<Locations/>}/>
                <Route path="/error" exact element={<Error404/>}/>
            </Routes>
        </div>
    );
}

export default App;
