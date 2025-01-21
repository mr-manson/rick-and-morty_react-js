import Header from "./components/Header";
import CharactersPage from "./components/CharactersPage";
import styles from './App.module.scss';

function App() {
    return (
        <div className={styles.container}>
            <Header />
            <CharactersPage />
        </div>
    );
}

export default App;
