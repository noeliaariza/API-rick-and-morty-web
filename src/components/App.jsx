// Fichero src/components/App.jsx
import "../scss/App.scss";
import getCharactersFromApi from "./services/getCharactersFromApi";
import { useState, useEffect } from "react";
import { Route, Routes, useLocation, matchPath } from "react-router-dom";
import CharacterList from "./CharacterList";
import Header from "./Header";
import Filters from "./filters/Filters";
import CharacterDetail from "./CharacterDetail";

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

  const { pathname } = useLocation();
  const characterDetailRoute = matchPath("/character/:characterId", pathname);
  const characterId = characterDetailRoute
    ? characterDetailRoute.params.characterId
    : null;

  const characterDetailData = characters.find(
    (character) => character.id === parseInt(characterId)
  );

  console.log("esto es ", characterDetailData);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters onChangeName={handleChangeName} />
                <CharacterList characters={filteredCharacters} />
              </>
            }
          />
          <Route
            path="/character/:characterId"
            element={<CharacterDetail character={characterDetailData} />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
