import CharacterCard from "./CharacterCard";
import PropTypes from "prop-types";
import "../scss/components/CharacterList.scss";

function CharacterList({ characters }) {
  return (
    <section>
      <ul className="charactersList">
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
