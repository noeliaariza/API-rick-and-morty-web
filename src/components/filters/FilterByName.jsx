import PropTypes from "prop-types";

function FilterByName({ onChangeName, valueCharacter }) {
  const handleChange = (ev) => {
    ev.preventDefault();
    onChangeName(ev.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Busca un personaje..."
        onChange={handleChange}
        value={valueCharacter}
      />
    </div>
  );
}

FilterByName.propTypes = {
  onChangeName: PropTypes.func.isRequired,
  valueCharacter: PropTypes.string.isRequired,
};

export default FilterByName;
