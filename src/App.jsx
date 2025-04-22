import { Routes, Route } from "react-router-dom";

import Home from "./components/HomePage";
import Characters from "./components/CharactersPage/Characters";
import Locations from "./components/LocationsPage";
import Error404 from "./components/ErrorPage";
import Navigation from "./components/Navigation";

import styles from "./App.module.scss";
import Footer from "./components/Footer";
import Favorites from "./components/Favorites";

function App() {
    return (
        <div className={styles.container}>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/characters" element={<Characters/>}/>
                <Route path="/locations" element={<Locations/>}/>
                <Route path="/favorites" element={<Favorites/>}/>
                <Route path="/error" element={<Error404/>}/>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
