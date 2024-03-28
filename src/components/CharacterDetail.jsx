import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../scss/components/CharacterDetail.scss";

function CharacterDetail({ character }) {
  return (
    <div className="characterDetailContainer fade-in">
      <Link className="characterDetailContainer__return" to={"/"}>
        <p>⬅️ Volver</p>
      </Link>
      <div className="characterDetailContainer__info">
        <img
          className="characterDetailContainer__img"
          src={character.image}
          alt={character.name}
        />
        <div className="characterDetailContainer__data">
          <h2 className="characterDetailContainer__data__h2">
            {character.name}
          </h2>
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
