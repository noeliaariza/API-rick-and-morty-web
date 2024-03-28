const getCharactersFromApi = () => {
  return fetch("https://rickandmortyapi.com/api/character/?page=2")
    .then((response) => response.json())
    .then((data) => {
      const parsedCharacters = data.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          status: character.status,
          species: character.species,
          image: character.image,
          episode: character.episode,
          origin: character.origin.name,
        };
      });
      return parsedCharacters;
    });
};

export default getCharactersFromApi;
