import PropTypes from "prop-types";

function CharacterCard({ characterData }) {
  return (
    <li>
      <img src={characterData.image} alt={characterData.name} />
      <div>
        <h3>{characterData.name}</h3>
        <p>{characterData.species}</p>
      </div>
    </li>
  );
}

CharacterCard.propTypes = {
  characterData: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    species: PropTypes.string,
  }),
};

export default CharacterCard;
