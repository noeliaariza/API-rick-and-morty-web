import CharacterCard from "./CharacterCard";
import PropTypes from "prop-types";

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

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired,
};

export default CharacterList;
