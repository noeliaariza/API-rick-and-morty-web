import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../scss/components/CharacterCard.scss";

function CharacterCard({ characterData }) {
  return (
    <li className="characterCard">
      <Link
        className="characterCard__link"
        to={`/character/${characterData.id}`}
      >
        <img src={characterData.image} alt={characterData.name} />
        <div className="characterCard__info">
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
