// Fichero src/components/App.jsx
import "../scss/App.scss";
import getCharactersFromApi from "./services/getCharactersFromApi";
import { useState, useEffect } from "react";
import CharacterList from "./CharacterList";
import Header from "./Header";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharactersFromApi().then((characterData) => {
      setCharacters(characterData);
    });
  }, []);

  return (
    <>
      <Header />
      <main>
        <CharacterList characters={characters} />
      </main>
    </>
  );
}

export default App;
