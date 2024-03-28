// Fichero src/components/App.jsx
import "../scss/App.scss";
import getCharactersFromApi from "./services/getCharactersFromApi";
import { useState, useEffect } from "react";
import { Route, Routes, useLocation, matchPath } from "react-router-dom";
import CharacterList from "./CharacterList";
import Header from "./Header";
import Filters from "./filters/Filters";
import CharacterDetail from "./CharacterDetail";
import localStorageService from "./services/localStorage";
import Error404 from "./Error404";
import { Navigate } from "react-router";
import BgHeader from "./BgHeader";

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState(
    localStorageService.get("characterSearch", "")
  );

  useEffect(() => {
    getCharactersFromApi().then((characterData) => {
      setCharacters(characterData);
    });
  }, []);

  useEffect(() => {
    localStorageService.set("characterSearch", filterName);
  }, [filterName]);

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

  return (
    <div className="container">
      <BgHeader />
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  valueCharacter={filterName}
                  onChangeName={handleChangeName}
                />
                <CharacterList characters={filteredCharacters} />
              </>
            }
          />
          <Route
            path="/character/:characterId"
            element={<CharacterDetail character={characterDetailData} />}
          />
          <Route path="/Error404" element={<Error404 />} />
          <Route path="*" element={<Navigate to="/Error404" />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
