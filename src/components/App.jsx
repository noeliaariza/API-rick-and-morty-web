// Fichero src/components/App.jsx
import "../scss/App.scss";
import getCharactersFromApi from "./services/getCharactersFromApi";
import { useState, useEffect } from "react";
import CharacterList from "./CharacterList";
import Header from "./Header";
import Filters from "./filters/Filters";

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");

  useEffect(() => {
    getCharactersFromApi().then((characterData) => {
      setCharacters(characterData);
    });
  }, []);

  const handleChangeName = (value) => {
    setFilterName(value);
  };

  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(filterName.toLowerCase());
  });

  return (
    <>
      <Header />
      <Filters onChangeName={handleChangeName} />
      <main>
        <CharacterList characters={filteredCharacters} />
      </main>
    </>
  );
}

export default App;
