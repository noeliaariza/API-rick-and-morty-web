import CharacterCard from "./CharacterCard";

function CharacterList({ characters }) {
  return (
    <section>
      <ul>
        {characters.map((character) => {
          return <CharacterCard key={character.id} characterData={character} />;
        })}
      </ul>
    </section>
  );
}

export default CharacterList;
