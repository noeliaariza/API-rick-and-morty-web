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

export default CharacterCard;
