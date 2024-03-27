import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CharacterCard({ characterData }) {
  return (
    <li>
      <Link to={`/character/${characterData.id}`}>
        <img src={characterData.image} alt={characterData.name} />
        <div>
          <h3>{characterData.name}</h3>
          <p>{characterData.species}</p>
        </div>
      </Link>
    </li>
  );
}

CharacterCard.propTypes = {
  characterData: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    species: PropTypes.string,
    id: PropTypes.number,
  }),
};

export default CharacterCard;
