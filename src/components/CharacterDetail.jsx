import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CharacterDetail({ character }) {
  return (
    <div>
      <Link to={"/"}>
        <p>⬅️ Volver</p>
      </Link>
      <div>
        <img src={character.image} alt={character.name} />
        <div>
          <h2>{character.name}</h2>
          <p>{`Status: ${character.status}`}</p>
          <p>{`Species: ${character.species}`}</p>
          <p>{`Origin: ${character.origin}`}</p>
          <p>{`Episodes: ${character.episode.length}`}</p>
        </div>
      </div>
    </div>
  );
}

CharacterDetail.propTypes = {
  character: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
    episode: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default CharacterDetail;
