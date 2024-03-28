import PropTypes from "prop-types";
import "../../scss/components/FilterByName.scss";

function FilterByName({ onChangeName, valueCharacter }) {
  const handleChange = (ev) => {
    ev.preventDefault();
    onChangeName(ev.target.value);
  };
  return (
    <div>
      <input
        className="inputSearch"
        type="text"
        placeholder="Busca un personaje..."
        onChange={handleChange}
        value={valueCharacter}
        name="byName"
      />
    </div>
  );
}

FilterByName.propTypes = {
  onChangeName: PropTypes.func.isRequired,
  valueCharacter: PropTypes.string.isRequired,
};

export default FilterByName;
