import FilterByName from "./FilterByName";
import PropTypes from "prop-types";

function Filters({ onChangeName, valueCharacter }) {
  return (
    <form>
      <FilterByName
        onChangeName={onChangeName}
        valueCharacter={valueCharacter}
      />
    </form>
  );
}

export default Filters;

Filters.propTypes = {
  onChangeName: PropTypes.func.isRequired,
  valueCharacter: PropTypes.string.isRequired,
};
